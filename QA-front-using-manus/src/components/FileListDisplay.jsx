import { useParams } from 'react-router-dom'
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

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center space-x-3">
            <IconComponent className={`w-8 h-8 text-${currentData.color}-600`} />
            <span>{currentData.title}</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            {currentData.description}
          </p>
        </div>
        <Badge variant="outline" className="text-lg px-4 py-2">
          {fileFormat?.toUpperCase()}
        </Badge>
      </div>

      {/* 統計情報 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <File className="w-5 h-5 text-blue-600" />
              <div>
                {/* 配列の要素数カウントで置き換え */}
                <p className="text-sm text-slate-600 dark:text-slate-400">ファイル数</p>
                <p className="text-xl font-bold">{currentData.files.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5 text-orange-600" />
              <div>
                {/* DB最後らへんに作成 */}
                <p className="text-sm text-slate-600 dark:text-slate-400">ダウンロード数</p>
                <p className="text-xl font-bold">
                  {/* {format === 'mp4' ? '15.2K' : format === 'mkv' ? '8.7K' : format === 'jpg' ? '23.1K' : '12.4K'} */}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ファイル一覧 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IconComponent className={`w-5 h-5 text-${currentData.color}-600`} />
            <span>利用可能なファイル</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentData.files.map((file, index) => {
              return (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg bg-${currentData.color}-100 dark:bg-${currentData.color}-900`}>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{file.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button size="sm" className="flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      {/* ここにクリックでダウンロードでいるようにする、あと少しの検証だ */}
                      <DownloadButton file={file}/>
                    </Button>
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

