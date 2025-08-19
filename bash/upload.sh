#!/bin/bash

ROOT_DIR="/home/arunbababa/Dev/QA-app/DATA"
WORKER_URL="https://r2-worker.hatuki-1-gzs.workers.dev"

find "$ROOT_DIR" -type f | while read -r file; do
  # key は R2 上のファイル名（DATA以下の相対パス）
  key=$(realpath --relative-to="$ROOT_DIR" "$file")

  echo "📤 アップロード中: $key"

  curl -s -X POST "$WORKER_URL?key=$key" \
    -H "Content-Type: application/octet-stream" \
    --data-binary "@$file"

done