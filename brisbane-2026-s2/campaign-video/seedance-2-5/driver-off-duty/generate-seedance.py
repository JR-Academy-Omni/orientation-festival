#!/usr/bin/env python3
"""Generate the approved Driver Off Duty film with Seedance 2.5."""

from __future__ import annotations

import argparse
import base64
import json
import mimetypes
import re
import time
from pathlib import Path
from typing import Any
from urllib.parse import urlsplit, urlunsplit

import requests
from volcengine.ApiInfo import ApiInfo
from volcengine.Credentials import Credentials
from volcengine.ServiceInfo import ServiceInfo
from volcengine.base.Service import Service


ARK_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3"
PROJECT_NAME = "default"
POLL_SECONDS = 15
POST_ATTEMPTS = 3
DOWNLOAD_ATTEMPTS = 6


def credentials(path: Path) -> tuple[str, str]:
    fields: dict[str, str] = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        match = re.match(r"^([^:=：]+)\s*[:=：]\s*(.*)$", line.strip())
        if match:
            fields[match.group(1).strip()] = match.group(2).strip().strip("[]")
    return fields["AccessKeyId"], fields["SecretAccessKey"]


def api_key(access_key: str, secret_key: str, endpoint_id: str) -> str:
    service = Service(
        ServiceInfo(
            "open.volcengineapi.com",
            {"Accept": "application/json", "Content-Type": "application/json"},
            Credentials(access_key, secret_key, "ark", "cn-beijing"),
            10,
            30,
            scheme="https",
        ),
        {
            "GetApiKey": ApiInfo(
                "POST", "/", {"Action": "GetApiKey", "Version": "2024-01-01"}, {}, {}
            )
        },
    )
    response = json.loads(
        service.json(
            "GetApiKey",
            {},
            json.dumps(
                {
                    "DurationSeconds": 3600,
                    "ResourceType": "endpoint",
                    "ResourceIds": [endpoint_id],
                    "ProjectName": PROJECT_NAME,
                }
            ),
        )
    )
    if "Result" not in response:
        raise RuntimeError("Unable to create temporary Ark API key")
    return response["Result"]["ApiKey"]


def data_url(path: Path) -> str:
    mime = mimetypes.guess_type(path.name)[0] or "image/jpeg"
    return f"data:{mime};base64,{base64.b64encode(path.read_bytes()).decode('ascii')}"


def clean_url(url: str) -> str:
    parsed = urlsplit(url)
    return urlunsplit((parsed.scheme, parsed.netloc, parsed.path, "", ""))


def sanitized(payload: dict[str, Any]) -> dict[str, Any]:
    clean = json.loads(json.dumps(payload))
    for item in clean.get("content", []):
        if item.get("type") == "image_url":
            item["image_url"]["url"] = "<local-reference-redacted>"
    return clean


def download_with_resume(url: str, path: Path) -> None:
    for attempt in range(1, DOWNLOAD_ATTEMPTS + 1):
        offset = path.stat().st_size if path.exists() else 0
        headers = {"Range": f"bytes={offset}-"} if offset else {}
        try:
            with requests.get(url, headers=headers, stream=True, timeout=(60, 600)) as response:
                response.raise_for_status()
                if offset and response.status_code != 206:
                    offset = 0
                mode = "ab" if offset else "wb"
                with path.open(mode) as output:
                    for chunk in response.iter_content(chunk_size=1024 * 1024):
                        if chunk:
                            output.write(chunk)
            return
        except requests.RequestException as error:
            if attempt == DOWNLOAD_ATTEMPTS:
                raise
            print(f"download retry {attempt} ({type(error).__name__})", flush=True)
            time.sleep(5 * attempt)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--credentials", type=Path, required=True)
    parser.add_argument("--endpoint-id", required=True)
    parser.add_argument("--prompt", type=Path, required=True)
    parser.add_argument("--frames-dir", type=Path)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--task-id")
    args = parser.parse_args()

    spec = json.loads(args.prompt.read_text(encoding="utf-8"))
    frame_paths: list[Path] = []
    if args.frames_dir:
        frame_paths = [args.frames_dir / f"0{index}.jpg" for index in range(1, 5)]
        missing = [str(path) for path in frame_paths if not path.exists()]
        if missing:
            raise RuntimeError(f"Missing reference frames: {missing}")

    access_key, secret_key = credentials(args.credentials)
    token = api_key(access_key, secret_key, args.endpoint_id)
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    content: list[dict[str, Any]] = [{"type": "text", "text": spec["prompt"]}]
    for path in frame_paths:
        content.append(
            {
                "type": "image_url",
                "image_url": {"url": data_url(path)},
                "role": "reference_image",
            }
        )

    payload = {
        "model": args.endpoint_id,
        "content": content,
        "resolution": "720p",
        "duration": int(spec["duration"]),
        "generate_audio": True,
        "watermark": False,
        "return_last_frame": True,
    }
    args.output_dir.mkdir(parents=True, exist_ok=True)
    if args.task_id:
        task_id = args.task_id
        print(f"resuming {task_id}", flush=True)
    else:
        response = None
        for attempt in range(1, POST_ATTEMPTS + 1):
            try:
                response = requests.post(
                    f"{ARK_BASE_URL}/contents/generations/tasks",
                    headers=headers,
                    json=payload,
                    timeout=(60, 600),
                )
                break
            except requests.RequestException as error:
                if attempt == POST_ATTEMPTS:
                    raise
                print(f"submit retry {attempt} ({type(error).__name__})", flush=True)
                time.sleep(5 * attempt)
        assert response is not None
        if not response.ok:
            raise RuntimeError(f"Create failed ({response.status_code}): {response.text}")
        task_id = response.json()["id"]
        print(f"submitted {task_id}", flush=True)

    while True:
        response = requests.get(
            f"{ARK_BASE_URL}/contents/generations/tasks/{task_id}",
            headers=headers,
            timeout=60,
        )
        response.raise_for_status()
        result = response.json()
        print(result["status"], flush=True)
        if result["status"] == "succeeded":
            break
        if result["status"] in {"failed", "cancelled"}:
            raise RuntimeError(json.dumps(result.get("error", result), ensure_ascii=False))
        time.sleep(POLL_SECONDS)

    video_path = args.output_dir / f"{spec['id']}.mp4"
    last_frame_path = args.output_dir / f"{spec['id']}-last-frame.jpg"
    for url, path in (
        (result["content"]["video_url"], video_path),
        (result["content"]["last_frame_url"], last_frame_path),
    ):
        download_with_resume(url, path)

    clean_result = json.loads(json.dumps(result))
    for key in ("video_url", "last_frame_url"):
        clean_result["content"][key] = clean_url(clean_result["content"][key])
    manifest = {
        "id": spec["id"],
        "task_id": task_id,
        "model": result.get("model"),
        "video": video_path.name,
        "last_frame": last_frame_path.name,
        "request": sanitized(payload),
        "result": clean_result,
    }
    (args.output_dir / "seedance-2-5-result.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"downloaded {video_path}", flush=True)


if __name__ == "__main__":
    main()
