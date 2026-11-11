#!/bin/bash
# 用法: bash render.sh [file.html ...]，默认渲染全部海报为同名 PNG（1242×1656）
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
files=("$@"); [ ${#files[@]} -eq 0 ] && files=(0*.html)
for f in "${files[@]}"; do
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --window-size=1242,1656 --virtual-time-budget=15000 \
    --screenshot="$PWD/${f%.html}.png" "file://$PWD/$f" 2>/dev/null
  echo "rendered ${f%.html}.png"
done
