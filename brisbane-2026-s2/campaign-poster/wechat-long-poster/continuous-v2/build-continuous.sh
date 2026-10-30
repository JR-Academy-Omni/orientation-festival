#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR/source"
NORMALIZED_DIR="$SCRIPT_DIR/normalized"
OUTPUT="$SCRIPT_DIR/brisbane-freshers-2026-s2-wechat-continuous-long-poster.png"
CONTACT_SHEET="$SCRIPT_DIR/continuous-long-poster-contact-sheet.png"
JR_LOGO="$SCRIPT_DIR/../../../partner-promo-poster/assets/jr-academy-logo.svg"
WIDTH=1080
OVERLAP=120
sequence=(01 t01 02 t02 03 t03 04 t04 05 t05 06)

mkdir -p "$NORMALIZED_DIR"

for item in "${sequence[@]}"; do
  magick "$SOURCE_DIR/$item.png" -resize "${WIDTH}x" "$NORMALIZED_DIR/$item.png"
done

PIECES_DIR="$SCRIPT_DIR/.pieces"
mkdir -p "$PIECES_DIR"
parts=()
last_index=$((${#sequence[@]} - 1))

for index in "${!sequence[@]}"; do
  item="${sequence[$index]}"
  height="$(identify -format '%h' "$NORMALIZED_DIR/$item.png")"

  if [[ "$index" -eq 0 ]]; then
    body_y=0
    body_height=$((height - OVERLAP))
  elif [[ "$index" -eq "$last_index" ]]; then
    body_y="$OVERLAP"
    body_height=$((height - OVERLAP))
  else
    body_y="$OVERLAP"
    body_height=$((height - OVERLAP * 2))
  fi
  magick "$NORMALIZED_DIR/$item.png" \
    -crop "${WIDTH}x${body_height}+0+${body_y}" +repage \
    "$PIECES_DIR/$item-body.png"
  parts+=("$PIECES_DIR/$item-body.png")

  if [[ "$index" -eq "$last_index" ]]; then
    continue
  fi

  next="${sequence[$((index + 1))]}"
  next_height="$(identify -format '%h' "$NORMALIZED_DIR/$next.png")"
  transition="$(printf '%02d' $((index + 1)))"

  magick "$NORMALIZED_DIR/$item.png" \
    -crop "${WIDTH}x${OVERLAP}+0+$((height - OVERLAP))" +repage \
    "$PIECES_DIR/$transition-out.png"
  magick "$NORMALIZED_DIR/$next.png" \
    -crop "${WIDTH}x${OVERLAP}+0+0" +repage \
    "$PIECES_DIR/$transition-in.png"
  magick -size "${WIDTH}x${OVERLAP}" gradient:black-white "$PIECES_DIR/$transition-mask.png"
  magick "$PIECES_DIR/$transition-out.png" "$PIECES_DIR/$transition-in.png" \
    "$PIECES_DIR/$transition-mask.png" -composite "$PIECES_DIR/$transition-blend.png"
  parts+=("$PIECES_DIR/$transition-blend.png")
done

magick "${parts[@]}" -append "$SCRIPT_DIR/.canvas.png"

magick "$JR_LOGO" -background none -resize 250x "$SCRIPT_DIR/.jr-logo.png"
magick "$SCRIPT_DIR/.canvas.png" "$SCRIPT_DIR/.jr-logo.png" \
  -gravity northwest -geometry +64+44 -compose Over -composite \
  -strip -quality 94 "$OUTPUT"

rm -f "$SCRIPT_DIR/.canvas.png" "$SCRIPT_DIR/.jr-logo.png"
find "$PIECES_DIR" -type f -delete
rmdir "$PIECES_DIR"

for number in 01 02 03 04 05 06; do
  magick "$NORMALIZED_DIR/$number.png" -thumbnail 180x300 "$SCRIPT_DIR/.thumb-$number.png"
done
magick "$SCRIPT_DIR/.thumb-01.png" "$SCRIPT_DIR/.thumb-02.png" "$SCRIPT_DIR/.thumb-03.png" \
  "$SCRIPT_DIR/.thumb-04.png" "$SCRIPT_DIR/.thumb-05.png" "$SCRIPT_DIR/.thumb-06.png" \
  +append "$CONTACT_SHEET"
rm -f "$SCRIPT_DIR"/.thumb-*.png

identify -format '%f %wx%h\n' "$OUTPUT" "$CONTACT_SHEET"
