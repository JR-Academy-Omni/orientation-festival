#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
RAW_DIR="$ROOT_DIR/raw"
WORK_DIR="$ROOT_DIR/work"
OUT_DIR="$ROOT_DIR/output"
FONT_DIR="$ROOT_DIR/fonts"
LOGO="$ROOT_DIR/../../../campaign-poster/assets/brisbane-freshers-festival-logo.png"

mkdir -p "$WORK_DIR" "$OUT_DIR" "$FONT_DIR"
cp "/System/Library/Fonts/Hiragino Sans GB.ttc" "$FONT_DIR/hiragino-sans-gb.ttc"
cd "$ROOT_DIR"

magick -size 1080x1920 xc:none \
  -fill '#071921C7' -stroke none -draw 'roundrectangle 54,92 1026,438 30,30' \
  -font fonts/hiragino-sans-gb.ttc -gravity north \
  -fill white -stroke none -pointsize 82 \
  -annotate +0+145 '@copy/01.txt' -depth 8 "PNG32:$WORK_DIR/copy-01.png"
magick -size 1080x1920 xc:none \
  -fill '#071921C7' -stroke none -draw 'roundrectangle 44,1535 1036,1840 30,30' \
  -font fonts/hiragino-sans-gb.ttc -gravity south \
  -fill white -stroke none -pointsize 66 \
  -annotate +0+165 '@copy/02.txt' -depth 8 "PNG32:$WORK_DIR/copy-02.png"
magick -size 1080x1920 xc:none \
  -fill '#071921C7' -stroke none -draw 'roundrectangle 44,1535 1036,1840 30,30' \
  -font fonts/hiragino-sans-gb.ttc -gravity south \
  -fill '#67FFDE' -stroke none -pointsize 74 \
  -annotate +0+170 '@copy/03.txt' -depth 8 "PNG32:$WORK_DIR/copy-03.png"
magick -size 1080x1920 xc:none \
  -fill '#071921C7' -stroke none -draw 'roundrectangle 44,1535 1036,1840 30,30' \
  -font fonts/hiragino-sans-gb.ttc -gravity south \
  -fill white -stroke none -pointsize 62 \
  -annotate +0+165 '@copy/04.txt' -depth 8 "PNG32:$WORK_DIR/copy-04.png"
magick -size 1080x1920 xc:none \
  -fill '#071921C7' -stroke none -draw 'roundrectangle 44,1535 1036,1840 30,30' \
  -font fonts/hiragino-sans-gb.ttc -gravity south \
  -fill '#67FFDE' -stroke none -pointsize 76 \
  -annotate +0+170 '@copy/05.txt' -depth 8 "PNG32:$WORK_DIR/copy-05.png"
magick -size 1080x1920 xc:none \
  -fill '#071921D1' -stroke none -draw 'roundrectangle 64,970 1016,1490 30,30' \
  -font fonts/hiragino-sans-gb.ttc -gravity north -fill white -pointsize 62 \
  -annotate +0+1040 '08.21 周五  ·  14:00–17:00' \
  -fill '#43DDE6' -pointsize 52 -annotate +0+1160 'Market Square  ·  Sunnybank' \
  -fill '#FFFFFFD1' -pointsize 29 -annotate +0+1255 '341 Mains Rd, Sunnybank QLD 4109' \
  -fill '#D6FF67' -draw 'roundrectangle 310,1360 770,1464 52,52' \
  -fill '#071921' -pointsize 50 -annotate +0+1374 '免费报名' \
  -depth 8 "PNG32:$WORK_DIR/end-card-overlay.png"

for clip in 01-card-catch 02-follow-the-hello 03-inside-the-festival; do
  ffmpeg -y -i "$RAW_DIR/$clip.mp4" \
    -vf "scale=1080:1920:flags=lanczos,format=yuv420p" \
    -c:v libx264 -preset slow -crf 17 -c:a aac -b:a 192k -ar 48000 \
    "$WORK_DIR/$clip.mp4"
done

printf "file '%s'\nfile '%s'\nfile '%s'\n" \
  "$WORK_DIR/01-card-catch.mp4" \
  "$WORK_DIR/02-follow-the-hello.mp4" \
  "$WORK_DIR/03-inside-the-festival.mp4" > "$WORK_DIR/concat.txt"

ffmpeg -y -f concat -safe 0 -i "$WORK_DIR/concat.txt" \
  -i "$WORK_DIR/copy-01.png" -i "$WORK_DIR/copy-02.png" \
  -i "$WORK_DIR/copy-03.png" -i "$WORK_DIR/copy-04.png" \
  -i "$WORK_DIR/copy-05.png" \
  -filter_complex "[0:v][1:v]overlay=enable='between(t,0.2,2.9)'[v1];[v1][2:v]overlay=enable='between(t,3.1,6.0)'[v2];[v2][3:v]overlay=enable='between(t,6.15,10.7)'[v3];[v3][4:v]overlay=enable='between(t,10.85,15.3)'[v4];[v4][5:v]overlay=enable='between(t,15.45,18.55)'[vout]" \
  -map "[vout]" -map 0:a -shortest \
  -c:v libx264 -preset slow -crf 17 -c:a aac -b:a 192k \
  "$WORK_DIR/story-with-copy.mp4"

ffmpeg -y -sseof -0.08 -i "$WORK_DIR/story-with-copy.mp4" -frames:v 1 \
  "$WORK_DIR/end-frame.png"

ffmpeg -y -loop 1 -t 4 -i "$WORK_DIR/end-frame.png" -i "$LOGO" \
  -i "$WORK_DIR/end-card-overlay.png" \
  -filter_complex "[0:v]scale=1080:1920,boxblur=10:2,eq=brightness=-0.34:saturation=0.78[bg];[1:v]scale=870:-1[logo];[bg][logo]overlay=(W-w)/2:300[branded];[branded][2:v]overlay=0:0" \
  -r 24 -c:v libx264 -preset slow -crf 17 -pix_fmt yuv420p -shortest \
  "$WORK_DIR/end-card-video.mp4"

ffmpeg -y -f lavfi -i anullsrc=r=48000:cl=stereo -t 4 -c:a aac -b:a 192k \
  "$WORK_DIR/end-card-audio.m4a"
ffmpeg -y -i "$WORK_DIR/end-card-video.mp4" -i "$WORK_DIR/end-card-audio.m4a" \
  -map 0:v -map 1:a -c copy -shortest "$WORK_DIR/end-card.mp4"

printf "file '%s'\nfile '%s'\n" \
  "$WORK_DIR/story-with-copy.mp4" "$WORK_DIR/end-card.mp4" > "$WORK_DIR/final-concat.txt"
ffmpeg -y -f concat -safe 0 -i "$WORK_DIR/final-concat.txt" \
  -c:v libx264 -preset slow -crf 17 -c:a aac -b:a 192k -movflags +faststart \
  "$OUT_DIR/brisbane-freshers-seedance-2-5-action-story.mp4"

ffmpeg -v error -i "$OUT_DIR/brisbane-freshers-seedance-2-5-action-story.mp4" -f null -
ffprobe -v error -show_entries format=duration,size -show_entries stream=codec_name,width,height,r_frame_rate,channels \
  -of json "$OUT_DIR/brisbane-freshers-seedance-2-5-action-story.mp4"
