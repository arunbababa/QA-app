# 特定の画像をアップロードするのに利用する
# 全ファイルアップロード時に正常アップロードされなかった特定の画像をアップロードするのに使う

# .env に UPLOAD_TOKEN=xxxx を保存（gitignoreに .env を追加）
set -a; source .env; set +a

curl -X POST "https://r2-worker.hatuki-1-gzs.workers.dev/VIDEOs/MP4s/1/0.9MB.mp4" \
  -H "X-Upload-Token: $UPLOAD_TOKEN" \
  -H "Content-Type: image/png" \
  --data-binary "@/home/arunbababa/Dev/QA-app/DATA/VIDEOs/MP4s/1/0.9MB.mp4"

# wranglerのPOSTを受け取る処理でX-Upload-Tokenを受け取れるようにしているので、そこでバリデーションを行う
# npx wrangler PUT TOKEN で.envのトークンをセットしており、wranglerのindex.tsでenv.UPLOAD_TOKENでとれるようにしている