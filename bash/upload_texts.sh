#!/bin/bash

# TEXT専用（ARCHIVEs/TEXTs配下の*.txt, *.md, *.logのみ）を直列でアップロード
# 失敗時は最大3回まで再試行（指数バックオフ）
# 使い方:
#   bash upload_texts.sh

set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
DATA_ROOT="/home/arunbababa/Dev/QA-app/DATA"
TEXT_DIR="$DATA_ROOT/ARCHIVEs/TEXTs"
WORKER_URL="https://r2-worker.hatuki-1-gzs.workers.dev"

# .env からトークン（プロジェクト直下を想定）
[ -f "$DIR/../.env" ] && source "$DIR/../.env"
[ -f "$DIR/.env" ] && source "$DIR/.env"
: "${UPLOAD_TOKEN:?Set UPLOAD_TOKEN in .env}"

find "$TEXT_DIR" -type f \( -iname "*.txt" -o -iname "*.md" -o -iname "*.log" \) | while read -r file; do
  key=$(realpath --relative-to="$DATA_ROOT" "$file")
  echo "📤 アップロード中: $key"
  
  # 最大3回まで再試行
  for attempt in {1..3}; do
    if curl --http1.1 -sS --fail -X POST "$WORKER_URL?key=$key" \
      -H "X-Upload-Token: $UPLOAD_TOKEN" \
      -H "Content-Type: text/plain" \
      --data-binary "@$file"; then
      echo "✅ 完了: $key (試行回数: $attempt)"
      break  # 成功したらループを抜ける
    else
      echo "❌ 失敗: $key (試行回数: $attempt/3)" >&2
      
      if [ $attempt -lt 3 ]; then
        wait_time=$((2 ** (attempt - 1)))  # 1, 2, 4秒
        echo "⏳ ${wait_time}秒待機して再試行..."
        sleep $wait_time
      else
        echo "🚫 最大試行回数に達しました: $key" >&2
      fi
    fi
  done
done
