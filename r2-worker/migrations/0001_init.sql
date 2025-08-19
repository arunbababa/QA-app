PRAGMA foreign_keys = ON;

-- 配布ファイルのメタ
CREATE TABLE IF NOT EXISTS files (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  r2_key    TEXT NOT NULL UNIQUE,       -- 例: 'IMAGEs/PNGs/1/0.9MB.png'
  file_type TEXT NOT NULL,              -- 例: 'PNG','JPEG','MP4','PDF',...
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now'))
);

-- 各ファイルの累計ダウンロード数（1ファイル=1行）
CREATE TABLE IF NOT EXISTS file_download_counts (
  file_id        INTEGER NOT NULL,
  download_count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (file_id),
  FOREIGN KEY (file_id) REFERENCES files(id) ON DELETE CASCADE
);
