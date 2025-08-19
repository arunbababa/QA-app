import React from "react";

const API = "https://r2-worker.hatuki-1-gzs.workers.dev";

const DownloadButton = React.memo(({ file, onDownloaded }) => (
  <a
    href={`${API}/${file.path}`}
    download
    onClick={() => onDownloaded()}
  >
    ダウンロード
  </a>
));

export default DownloadButton