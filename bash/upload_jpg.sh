#!/bin/bash

# JPG専用（IMAGEs/JPGs配下の*.jpgのみ）を直列でアップロード
# 使い方:
#   bash upload_jpg.sh

set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
DATA_ROOT="/home/arunbababa/Dev/QA-app/DATA"
JPG_DIR="$DATA_ROOT/IMAGEs/JPGs"
WORKER_URL="https://r2-worker.hatuki-1-gzs.workers.dev"

# .env からトークン（プロジェクト直下を想定）
[ -f "$DIR/../.env" ] && source "$DIR/../.env"
[ -f "$DIR/.env" ] && source "$DIR/.env"
: "${UPLOAD_TOKEN:?Set UPLOAD_TOKEN in .env}"

find "$JPG_DIR" -type f -iname "*.jpg" | while read -r file; do
  key=$(realpath --relative-to="$DATA_ROOT" "$file")
  echo "📤 アップロード中: $key"
  curl --http1.1 -sS --fail -X POST "$WORKER_URL?key=$key" \
    -H "X-Upload-Token: $UPLOAD_TOKEN" \
    -H "Content-Type: image/jpg" \
    --data-binary "@$file" \
    && echo "✅ 完了: $key" || echo "❌ 失敗: $key" >&2
done


