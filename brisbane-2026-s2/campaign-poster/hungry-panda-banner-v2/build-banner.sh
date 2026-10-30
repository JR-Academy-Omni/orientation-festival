#!/usr/bin/env bash
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
FESTIVAL_ROOT="$(cd "$HERE/../.." && pwd)"
SCENE="$HERE/assets/freshers-festival-students.png"
FESTIVAL_LOGO="$FESTIVAL_ROOT/campaign-poster/assets/brisbane-freshers-festival-logo.png"
HUNGRY_PANDA_LOGO="$FESTIVAL_ROOT/partner-promo-poster/assets/partners/hungry-panda.webp"
OUTPUT="$HERE/brisbane-freshers-festival-hungry-panda-banner-2196x432.png"
OUTPUT_JPG="$HERE/brisbane-freshers-festival-hungry-panda-banner-2196x432.jpg"
FONT="/System/Library/Fonts/STHeiti Medium.ttc"

WORK_DIR="$(mktemp -d)"
trap 'rm -rf "$WORK_DIR"' EXIT

# Keep the generated festival photography as atmosphere only. All logos and copy
# below are deterministic overlays so the final banner stays brand-accurate.
magick "$SCENE" \
  -resize '2196x432^' \
  -gravity center \
  -extent 2196x432 \
  "$WORK_DIR/background.png"

magick "$FESTIVAL_LOGO" \
  -trim +repage \
  -resize 318x140 \
  "$WORK_DIR/festival-logo.png"

magick "$HUNGRY_PANDA_LOGO" \
  -resize 190x86 \
  "$WORK_DIR/hungry-panda-logo.png"

magick "$WORK_DIR/background.png" \
  \( -size 2196x432 xc:none \
     -fill 'rgba(2,19,49,0.92)' -draw 'rectangle 0,0 950,432' \
     -fill 'rgba(2,19,49,0.55)' -draw 'rectangle 950,0 1190,432' \
     -blur 0x45 \) -compose over -composite \
  "$WORK_DIR/base.png"

magick "$WORK_DIR/base.png" \
  -gravity northwest \
  "$WORK_DIR/festival-logo.png" -geometry +55+18 -compose over -composite \
  \( -size 214x102 xc:none \
     -fill '#FFD629' -draw 'roundrectangle 0,0 213,101 18,18' \
     "$WORK_DIR/hungry-panda-logo.png" -gravity center -compose over -composite \) \
     -gravity northwest -geometry +390+22 -compose over -composite \
  -font "$FONT" \
  -fill '#DDE9F7' -pointsize 25 -gravity northwest \
  -annotate +630+43 'UQ · QUT · Griffith 新生集合' \
  -fill white -stroke 'rgba(0,0,0,0.18)' -strokewidth 1.2 -pointsize 72 \
  -annotate +55+151 '免费入场' \
  -stroke none -fill '#FFD629' -pointsize 60 \
  -annotate +55+235 '超 $5,000 礼品大奖' \
  -fill white -pointsize 35 \
  -annotate +55+314 '领礼品 · 抽大奖 · 认识新朋友' \
  -fill '#DDE9F7' -pointsize 27 \
  -annotate +55+374 '8月21日 · Market Square, Sunnybank' \
  \( -size 215x66 xc:none \
     -fill '#FF5A36' -draw 'roundrectangle 0,0 214,65 33,33' \
     -font "$FONT" -fill white -pointsize 30 -gravity center \
     -annotate +0-1 '免费报名  →' \) \
     -gravity northwest -geometry +720+347 -compose over -composite \
  -strip -quality 94 \
  "$OUTPUT"

identify "$OUTPUT"

magick "$OUTPUT" \
  -background white -alpha remove -alpha off \
  -sampling-factor 4:2:0 -quality 92 \
  "$OUTPUT_JPG"

identify "$OUTPUT_JPG"
