// ファイル型定義
export interface FileItem {
  name: string;
  size: string;
  path: string;
}

// DownloadButton の props 型定義
export interface DownloadButtonProps {
  file: FileItem;
  fileFormat?: string;
  onIncrement?: () => void;
}

// API レスポンス型定義
export interface DownloadMetricsResponse {
  downloadCount?: number;
  sumDownloadCount?: number;
  results?: Array<{
    download_count?: number;
    sumDownloadCount?: number;
  }>;
}

// FileFormat型
export type FileFormat = 'mp4' | 'avi' | 'flv' | 'jpg' | 'png' | 'gif' | 'csv' | 'pdf' | 'text' | 'xls' | 'zip' | string;

