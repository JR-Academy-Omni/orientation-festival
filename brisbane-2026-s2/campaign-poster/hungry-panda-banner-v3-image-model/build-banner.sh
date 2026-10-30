#!/usr/bin/env bash
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
SOURCE="$HERE/assets/image-model-banner.png"
FESTIVAL_LOGO="$HERE/../assets/brisbane-freshers-festival-logo.png"
OUTPUT="$HERE/brisbane-freshers-festival-hungry-panda-banner-v3-2196x432.png"
OUTPUT_JPG="$HERE/brisbane-freshers-festival-hungry-panda-banner-v3-2196x432.jpg"

# The image model owns the scene and promotional headline. Give the official
# festival logo equal visual weight by reserving a wider left identity block.
magick "$SOURCE" \
  -background '#03162C' -alpha remove -alpha off \
  -resize 1840x \
  -gravity center \
  -extent 1840x432 \
  "$HERE/.headline-strip.png"

magick -size 2196x432 xc:'#03162C' \
  "$HERE/.headline-strip.png" -gravity west -geometry +390+0 -compose over -composite \
  \( "$FESTIVAL_LOGO" -trim +repage -resize 620x310 \) \
  -gravity west -geometry +20+0 -compose over -composite \
  -strip \
  "$OUTPUT"

rm -f "$HERE/.headline-strip.png"

magick "$OUTPUT" \
  -background white -alpha remove -alpha off \
  -sampling-factor 4:2:0 -quality 92 \
  "$OUTPUT_JPG"

identify "$OUTPUT" "$OUTPUT_JPG"
