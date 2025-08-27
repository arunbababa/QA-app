import React from "react";
import { Button } from '@/components/ui/button.jsx'
import { Download } from 'lucide-react'

// これグローバルに置こうかな、stateではなくただの定数として
const API = "https://r2-worker.hatuki-1-gzs.workers.dev";

const DownloadButton = React.memo(({ file, fileFormat, onIncrement }) => {
  const href = `${API}?key=${file.path}`;

  const handleClick = (e) => {
    // 楽観的更新のため先にUI更新
    onIncrement?.();

    // 送信は非同期で実行（ダウンロードはアンカーのデフォルト動作で継続）
    try {
      const body = JSON.stringify({ file_type: String(fileFormat || '').toUpperCase() });
      navigator.sendBeacon?.(
        `${API}?key=metrics/downloads/increment`,
        new Blob([body], { type: 'application/json' })
      );
    } catch { }
  };

  return (
    <Button asChild size="sm" className="flex items-center space-x-2">
      <a href={href} download onClick={handleClick}>
        <Download className="w-4 h-4" />
        <span>ダウンロード</span>
      </a>
    </Button>
  );
});

export default DownloadButton