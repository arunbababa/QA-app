import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Download, FileVideo, Image as ImageIcon, File, HardDrive, Monitor, Smartphone, Tablet } from 'lucide-react'
import fileSources from './data/renderSource/renderSource'
import DownloadButton from './DownloadButton'

const FileListDisplay = () => {
  const { fileFormat } = useParams()
  const currentData = fileSources[fileFormat]
  const IconComponent = currentData.icon

  const API = "https://r2-worker.hatuki-1-gzs.workers.dev";
  const [downloadCount, setDownloadCount] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}?key=metrics/downloads&file_type=${fileFormat?.toUpperCase()}`);
        const data = await response.json();
        let count = 0;
        if (typeof data?.downloadCount === 'number') {
          count = data.downloadCount;
        } else if (Array.isArray(data?.results) && typeof data.results[0]?.download_count === 'number') {
          count = data.results[0].download_count;
        } else if (Array.isArray(data) && typeof data[0]?.download_count === 'number') {
          count = data[0].download_count;
        }
        setDownloadCount(count);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    }
    fetchData();
  }, [fileFormat]) // カウントステートが変わった際にはこちらは走らない

  return (
    <div className="w-full p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 lg:space-y-10">
      {/* ヘッダー */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white flex items-center space-x-3 sm:space-x-4">
            <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-${currentData.color}-600`} />
            <span>{currentData.title}</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 max-w-2xl">
            {currentData.description}
          </p>
        </div>
        <Badge variant="outline" className="text-base sm:text-lg lg:text-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 self-start sm:self-auto">
          {fileFormat?.toUpperCase()}
        </Badge>
      </div>

      {/* 統計情報 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <Card className="p-4 sm:p-6 lg:p-8">
          <CardContent className="p-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <File className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600" />
              <div>
                {/* 配列の要素数カウントで置き換え */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400">ファイル数</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">{currentData.files.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="p-4 sm:p-6 lg:p-8">
          <CardContent className="p-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Download className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-orange-600" />
              <div>
                {/* DB最後らへんに作成 */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400">ダウンロード数</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">{downloadCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ファイル一覧 */}
      <Card className="p-4 sm:p-6 lg:p-8">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="flex items-center space-x-3 sm:space-x-4 text-lg sm:text-xl lg:text-2xl">
            <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 text-${currentData.color}-600`} />
            <span>利用可能なファイル</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 sm:space-y-6">
            {currentData.files.map((file) => {
              return (
                <div key={file.path} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 lg:p-8 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className={`p-3 sm:p-4 lg:p-5 rounded-lg bg-${currentData.color}-100 dark:bg-${currentData.color}-900`}>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{file.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DownloadButton file={file} fileFormat={fileFormat} onIncrement={() => setDownloadCount((c) => c + 1)} />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FileListDisplay

