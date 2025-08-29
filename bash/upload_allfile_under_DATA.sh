#!/bin/bash

ROOT_DIR="/home/arunbababa/Dev/QA-app/DATA"
WORKER_URL="https://r2-worker.hatuki-1-gzs.workers.dev"

# .env から UPLOAD_TOKEN
[ -f "$(dirname "$0")/../.env" ] && source "$(dirname "$0")/../.env"

: "${UPLOAD_TOKEN:?Set UPLOAD_TOKEN in .env}"

find "$ROOT_DIR" -type f | while read -r file; do
  key=$(realpath --relative-to="$ROOT_DIR" "$file")
  echo "📤 アップロード中: $key"
  curl --http1.1 -sS --fail -X POST "$WORKER_URL?key=$key" \
    -H "X-Upload-Token: $UPLOAD_TOKEN" \
    -H "Content-Type: application/octet-stream" \
    --data-binary "@$file" \
    && echo "✅ 完了: $key" || echo "❌ 失敗: $key" >&2
done