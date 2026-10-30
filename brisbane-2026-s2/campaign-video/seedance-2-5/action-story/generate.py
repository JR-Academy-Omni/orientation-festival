#!/usr/bin/env python3
"""Generate a sequential vertical Seedance 2.5 action story."""

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
                "POST",
                "/",
                {"Action": "GetApiKey", "Version": "2024-01-01"},
                {},
                {},
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
    mime = mimetypes.guess_type(path.name)[0] or "image/png"
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{encoded}"


def clean_url(url: str) -> str:
    parsed = urlsplit(url)
    return urlunsplit((parsed.scheme, parsed.netloc, parsed.path, "", ""))


def sanitized(payload: dict[str, Any]) -> dict[str, Any]:
    clean = json.loads(json.dumps(payload))
    for item in clean.get("content", []):
        if item.get("type") == "image_url":
            url = item["image_url"]["url"]
            item["image_url"]["url"] = (
                "<local-first-frame-redacted>" if url.startswith("data:") else clean_url(url)
            )
    return clean


def download(url: str, path: Path) -> None:
    response = requests.get(url, timeout=600)
    response.raise_for_status()
    path.write_bytes(response.content)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--credentials", type=Path, required=True)
    parser.add_argument("--endpoint-id", required=True)
    parser.add_argument("--prompts", type=Path, required=True)
    parser.add_argument("--first-frame", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--start-at", type=int, default=1)
    args = parser.parse_args()

    access_key, secret_key = credentials(args.credentials)
    token = api_key(access_key, secret_key, args.endpoint_id)
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    shots = json.loads(args.prompts.read_text(encoding="utf-8"))
    args.output_dir.mkdir(parents=True, exist_ok=True)
    manifest_path = args.output_dir / "seedance-2-5-chain.json"
    manifest: list[dict[str, Any]] = []
    if manifest_path.exists():
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    if args.start_at == 1:
        current_frame = data_url(args.first_frame)
    else:
        previous = args.output_dir / f"{shots[args.start_at - 2]['id']}-last-frame.png"
        if not previous.exists():
            raise RuntimeError(f"Missing previous frame: {previous}")
        current_frame = data_url(previous)

    for shot in shots[args.start_at - 1 :]:
        payload = {
            "model": args.endpoint_id,
            "content": [
                {"type": "text", "text": shot["prompt"]},
                {
                    "type": "image_url",
                    "image_url": {"url": current_frame},
                    "role": "first_frame",
                },
            ],
            "resolution": "720p",
            "duration": int(shot["duration"]),
            "generate_audio": True,
            "watermark": False,
            "return_last_frame": True,
        }
        response = None
        for attempt in range(1, POST_ATTEMPTS + 1):
            try:
                response = requests.post(
                    f"{ARK_BASE_URL}/contents/generations/tasks",
                    headers=headers,
                    json=payload,
                    timeout=(60, 300),
                )
                break
            except requests.RequestException as error:
                if attempt == POST_ATTEMPTS:
                    raise
                print(
                    f"{shot['id']}: submit retry {attempt} ({type(error).__name__})",
                    flush=True,
                )
                time.sleep(5 * attempt)
        assert response is not None
        if not response.ok:
            raise RuntimeError(f"Create failed ({response.status_code}): {response.text}")
        task_id = response.json()["id"]
        print(f"{shot['id']}: submitted {task_id}", flush=True)

        while True:
            response = requests.get(
                f"{ARK_BASE_URL}/contents/generations/tasks/{task_id}",
                headers=headers,
                timeout=60,
            )
            response.raise_for_status()
            result = response.json()
            print(f"{shot['id']}: {result['status']}", flush=True)
            if result["status"] == "succeeded":
                break
            if result["status"] in {"failed", "cancelled"}:
                raise RuntimeError(json.dumps(result.get("error", result), ensure_ascii=False))
            time.sleep(POLL_SECONDS)

        video_path = args.output_dir / f"{shot['id']}.mp4"
        frame_path = args.output_dir / f"{shot['id']}-last-frame.png"
        download(result["content"]["video_url"], video_path)
        download(result["content"]["last_frame_url"], frame_path)
        clean_result = json.loads(json.dumps(result))
        for key in ("video_url", "last_frame_url"):
            clean_result["content"][key] = clean_url(clean_result["content"][key])
        record = {
            "id": shot["id"],
            "task_id": task_id,
            "model": result.get("model"),
            "video": video_path.name,
            "last_frame": frame_path.name,
            "request": sanitized(payload),
            "result": clean_result,
        }
        manifest = [item for item in manifest if item["id"] != shot["id"]] + [record]
        manifest_path.write_text(
            json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        current_frame = result["content"]["last_frame_url"]
        print(f"{shot['id']}: downloaded", flush=True)


if __name__ == "__main__":
    main()
