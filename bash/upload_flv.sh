#!/bin/bash

# FLV専用（VIDEOs/FLVs配下の*.flvのみ）を直列でアップロード
# 使い方:
#   bash upload_flv.sh

set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
DATA_ROOT="/home/arunbababa/Dev/QA-app/DATA"
FLV_DIR="$DATA_ROOT/VIDEOs/FLVs"
WORKER_URL="https://r2-worker.hatuki-1-gzs.workers.dev"

# .env からトークン（プロジェクト直下を想定）
[ -f "$DIR/../.env" ] && source "$DIR/../.env"
[ -f "$DIR/.env" ] && source "$DIR/.env"
: "${UPLOAD_TOKEN:?Set UPLOAD_TOKEN in .env}"

find "$FLV_DIR" -type f -iname "*.flv" | while read -r file; do
  key=$(realpath --relative-to="$DATA_ROOT" "$file")
  echo "📤 アップロード中: $key"
  curl --http1.1 -sS --fail -X POST "$WORKER_URL?key=$key" \
    -H "X-Upload-Token: $UPLOAD_TOKEN" \
    -H "Content-Type: video/x-flv" \
    --data-binary "@$file" \
    && echo "✅ 完了: $key" || echo "❌ 失敗: $key" >&2
done


