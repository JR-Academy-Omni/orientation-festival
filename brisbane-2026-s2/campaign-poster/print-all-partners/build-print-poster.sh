#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
EVENT_ROOT="$(cd "$ROOT/../.." && pwd)"
PARTNERS="$EVENT_ROOT/partner-promo-poster/assets/partners"
FESTIVAL_LOGO="$EVENT_ROOT/campaign-poster/assets/brisbane-freshers-festival-logo.png"
FONT="/System/Library/Fonts/Hiragino Sans GB.ttc"
WORK="$ROOT/work"
OUT="$ROOT/output"

mkdir -p "$WORK/cards" "$OUT"

magick "$ROOT/print-background.png" -resize '2480x3508!' \
  -units PixelsPerInch -density 300 "$WORK/canvas.png"

magick "$ROOT/source-poster.png" -resize '2000x3000!' "$WORK/poster.png"

# Cover the generated English festival lettering with a clean navy field, then
# place the verified transparent Chinese event logo over the same blue section.
magick "$WORK/poster.png" \
  -fill '#063E78' -stroke none -draw 'roundrectangle 55,2390 955,2725 80,80' \
  "$WORK/poster-clean.png"
magick "$FESTIVAL_LOGO" -resize '700x350>' "$WORK/festival-logo.png"

declare -a FILES=(
  'fortune-forward.webp'
  'hungry-panda.webp'
  'bupa.webp'
  'bank-of-china.webp'
  'mobile-connect.webp'
  'goodlife.png'
  'compass.jpg'
  'sol.jpg'
  'luggeasy.png'
  'airbotix.svg'
  'dealmoon.webp'
  'yeeyi.webp'
  'uqcssa.webp'
  'uqhac.webp'
)

for i in "${!FILES[@]}"; do
  n=$(printf '%02d' "$((i + 1))")
  magick -size 286x142 xc:none \
    -fill '#FFFFFFF5' -stroke '#E4D5C4' -strokewidth 3 \
    -draw 'roundrectangle 2,2 283,139 20,20' \
    "$WORK/cards/${n}-base.png"
  magick "$PARTNERS/${FILES[$i]}" -background white -alpha background \
    -resize '238x96>' -gravity center -extent 238x96 "$WORK/cards/${n}-logo.png"
  magick "$WORK/cards/${n}-base.png" "$WORK/cards/${n}-logo.png" \
    -gravity center -composite "$WORK/cards/${n}.png"
done

cp "$WORK/canvas.png" "$WORK/final.png"
magick "$WORK/final.png" "$WORK/poster-clean.png" -geometry +240+36 -composite \
  "$WORK/final-1.png"
magick "$WORK/final-1.png" "$WORK/festival-logo.png" -geometry +390+2425 -composite \
  "$WORK/final-2.png"

magick "$WORK/final-2.png" \
  -font "$FONT" -fill '#12213F' -pointsize 48 -gravity north \
  -annotate +0+3030 '合作伙伴' "$WORK/final-3.png"

current="$WORK/final-3.png"
for i in $(seq 1 14); do
  idx=$(printf '%02d' "$i")
  col=$(( (i - 1) % 7 ))
  row=$(( (i - 1) / 7 ))
  x=$(( 188 + col * 301 ))
  y=$(( 3100 + row * 158 ))
  next="$WORK/final-logo-${idx}.png"
  magick "$current" "$WORK/cards/${idx}.png" -geometry "+${x}+${y}" -composite "$next"
  current="$next"
done

magick "$current" -units PixelsPerInch -density 300 \
  "$OUT/brisbane-freshers-all-partners-a4-print.png"

magick "$OUT/brisbane-freshers-all-partners-a4-print.png" \
  -quality 96 "$OUT/brisbane-freshers-all-partners-a4-print.jpg"

magick identify -format '%f: %w×%h, %x×%y DPI\n' \
  "$OUT/brisbane-freshers-all-partners-a4-print.png"
