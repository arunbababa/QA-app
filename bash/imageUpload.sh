# 特定の画像をアップロードするのに利用する
# 全ファイルアップロード時に正常アップロードされなかった特定の画像をアップロードするのに使う

# .env に UPLOAD_TOKEN=xxxx を保存（gitignoreに .env を追加）
# 先頭付近
[ -f "$(dirname "$0")/../.env" ] && source "$(dirname "$0")/../.env"
WORKER_URL="https://r2-worker.hatuki-1-gzs.workers.dev"
FILE_PATH="/home/arunbababa/Dev/QA-app/DATA/IMAGEs/GIFs/1/0.9MB.gif"
KEY="IMAGEs/GIFs/1/0.9MB.gif"

curl -X POST "$WORKER_URL?key=$KEY" \
  -H "X-Upload-Token: $UPLOAD_TOKEN" \
  -H "Content-Type: image/png" \
  --data-binary "@/home/arunbababa/Dev/QA-app/DATA/VIDEOs/MP4s/1/0.9MB.mp4"

# wranglerのPOSTを受け取る処理でX-Upload-Tokenを受け取れるようにしているので、そこでバリデーションを行う
# npx wrangler PUT TOKEN で.envのトークンをセットしており、wranglerのindex.tsでenv.UPLOAD_TOKENでとれるようにしている