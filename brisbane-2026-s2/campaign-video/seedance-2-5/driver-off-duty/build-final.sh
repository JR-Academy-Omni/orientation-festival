#!/usr/bin/env bash
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
SOURCE="$HERE/raw-v2/driver-off-duty-full-v2.mp4"
NARRATION="$HERE/audio-fix/narration-seedance.wav"
LOGO="$HERE/../../../campaign-poster/assets/brisbane-freshers-festival-logo.png"
OUT_DIR="$HERE/final"
OUTPUT="$OUT_DIR/brisbane-freshers-festival-driver-off-duty.mp4"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

mkdir -p "$OUT_DIR"

magick -size 420x220 xc:none \
  -fill 'rgba(3,22,44,0.82)' -draw 'roundrectangle 0,0 419,219 34,34' \
  \( "$LOGO" -trim +repage -resize 360x176 \) \
  -gravity center -compose over -composite \
  "$WORK/logo-card.png"

# Preserve every part of Seedance's original soundtrack except its final narration.
# Duck only the incorrect closing voice, then insert the verified Seedance voice take.
ffmpeg -y -hide_banner -loglevel error \
  -i "$SOURCE" -i "$NARRATION" -loop 1 -framerate 24 -i "$WORK/logo-card.png" \
  -filter_complex "
    [0:a]volume='if(lt(t,11.58),1,0.12)'[bed];
    [1:a]volume=1.12,adelay=11600|11600,afade=t=in:st=11.60:d=0.08,afade=t=out:st=14.82:d=0.16[narration];
    [bed][narration]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.92[aout];
    [2:v]format=rgba,fade=t=in:st=0:d=0.25:alpha=1[logo];
    [0:v][logo]overlay=(W-w)/2:58:enable='gte(t,11.35)'[vout]
  " \
  -map '[vout]' -map '[aout]' \
  -c:v libx264 -preset slow -crf 17 -pix_fmt yuv420p \
  -c:a aac -b:a 192k -ar 48000 \
  -movflags +faststart -shortest "$OUTPUT"

ffprobe -v error -show_entries format=duration,size:stream=codec_name,codec_type,width,height,r_frame_rate,sample_rate,channels -of json "$OUTPUT"
