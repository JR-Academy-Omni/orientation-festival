#!/usr/bin/env bash
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
FONT="/System/Library/Fonts/STHeiti Medium.ttc"
OUT="$HERE/driver-off-duty-storyboard.jpg"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

labels=(
  '01  去 UQ 吗？｜不去。'
  '02  QUT？Griffith？｜摇头。'
  '03  那你去哪？｜新生节。'
  '04  车门打开｜你上不上？'
)

for index in 1 2 3 4; do
  source="$HERE/frames/0${index}.png"
  magick "$source" \
    -resize '420x748^' -gravity center -extent 420x748 \
    -bordercolor '#07182F' -border 4 \
    -font "$FONT" -pointsize 25 -fill white \
    -gravity south -background '#07182F' -splice 0x62 \
    -annotate +0+17 "${labels[$((index - 1))]}" \
    "$WORK/0${index}.png"
done

magick -size 1920x1080 xc:'#F4F1EA' \
  -font "$FONT" -fill '#07182F' -pointsize 58 -gravity northwest \
  -annotate +80+52 '司机今天不接单' \
  -pointsize 27 -fill '#516071' \
  -annotate +82+128 '布里斯班新生节 · Seedance 2.5 静态导演板｜手机实拍感｜约 12 秒' \
  "$WORK/01.png" -gravity northwest -geometry +78+205 -compose over -composite \
  "$WORK/02.png" -geometry +538+205 -compose over -composite \
  "$WORK/03.png" -geometry +998+205 -compose over -composite \
  "$WORK/04.png" -geometry +1458+205 -compose over -composite \
  -font "$FONT" -pointsize 25 -fill '#07182F' \
  -annotate +82+1031 '笑点：司机从头到尾不笑；最后一镜只靠“满车新生 + 礼品 + 大熊”完成反转。' \
  -quality 93 "$OUT"

identify "$OUT"
