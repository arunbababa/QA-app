import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Download, FileVideo, Image as ImageIcon, File, HardDrive, Monitor, Smartphone, Tablet } from 'lucide-react'

const FileListDisplay = () => {
  const { format } = useParams()

  // ダミーファイルデータ
  const fileData = {
    mp4: {
      title: 'MP4 動画ファイル',
      description: 'MP4形式の動画ファイルをダウンロードできます。様々な解像度とファイルサイズをご用意しています。',
      icon: FileVideo,
      color: 'blue',
      files: [
        { name: 'sample_4k_ultra.mp4', size: '2.1 GB', resolution: '3840x2160', quality: '4K Ultra HD', bitrate: '25 Mbps', duration: '10:30' },
        { name: 'sample_1080p_high.mp4', size: '850 MB', resolution: '1920x1080', quality: 'Full HD', bitrate: '8 Mbps', duration: '10:30' },
        { name: 'sample_1080p_standard.mp4', size: '420 MB', resolution: '1920x1080', quality: 'Full HD', bitrate: '4 Mbps', duration: '10:30' },
        { name: 'sample_720p_high.mp4', size: '280 MB', resolution: '1280x720', quality: 'HD', bitrate: '3 Mbps', duration: '10:30' },
        { name: 'sample_720p_standard.mp4', size: '180 MB', resolution: '1280x720', quality: 'HD', bitrate: '2 Mbps', duration: '10:30' },
        { name: 'sample_480p.mp4', size: '95 MB', resolution: '854x480', quality: 'SD', bitrate: '1 Mbps', duration: '10:30' },
        { name: 'sample_360p.mp4', size: '65 MB', resolution: '640x360', quality: 'Low', bitrate: '0.7 Mbps', duration: '10:30' }
      ]
    },
    mkv: {
      title: 'MKV 動画ファイル',
      description: 'MKV形式の動画ファイルをダウンロードできます。高品質なコーデックに対応した動画ファイルです。',
      icon: FileVideo,
      color: 'purple',
      files: [
        { name: 'sample_4k_hevc.mkv', size: '1.8 GB', resolution: '3840x2160', quality: '4K Ultra HD', bitrate: '20 Mbps', duration: '10:30' },
        { name: 'sample_1080p_hevc.mkv', size: '720 MB', resolution: '1920x1080', quality: 'Full HD', bitrate: '6 Mbps', duration: '10:30' },
        { name: 'sample_1080p_x264.mkv', size: '950 MB', resolution: '1920x1080', quality: 'Full HD', bitrate: '8.5 Mbps', duration: '10:30' },
        { name: 'sample_720p_hevc.mkv', size: '320 MB', resolution: '1280x720', quality: 'HD', bitrate: '2.8 Mbps', duration: '10:30' },
        { name: 'sample_720p_x264.mkv', size: '480 MB', resolution: '1280x720', quality: 'HD', bitrate: '4.2 Mbps', duration: '10:30' },
        { name: 'sample_480p.mkv', size: '180 MB', resolution: '854x480', quality: 'SD', bitrate: '1.5 Mbps', duration: '10:30' }
      ]
    },
    jpg: {
      title: 'JPG 画像ファイル',
      description: 'JPG形式の画像ファイルをダウンロードできます。様々な解像度と品質の画像をご用意しています。',
      icon: ImageIcon,
      color: 'green',
      files: [
        { name: 'sample_8k.jpg', size: '15.2 MB', resolution: '7680x4320', quality: '8K Ultra HD', compression: '95%' },
        { name: 'sample_4k_high.jpg', size: '8.5 MB', resolution: '3840x2160', quality: '4K Ultra HD', compression: '95%' },
        { name: 'sample_4k_standard.jpg', size: '4.2 MB', resolution: '3840x2160', quality: '4K Ultra HD', compression: '85%' },
        { name: 'sample_1080p_high.jpg', size: '2.8 MB', resolution: '1920x1080', quality: 'Full HD', compression: '95%' },
        { name: 'sample_1080p_standard.jpg', size: '1.2 MB', resolution: '1920x1080', quality: 'Full HD', compression: '85%' },
        { name: 'sample_720p.jpg', size: '680 KB', resolution: '1280x720', quality: 'HD', compression: '85%' },
        { name: 'sample_480p.jpg', size: '320 KB', resolution: '854x480', quality: 'SD', compression: '80%' },
        { name: 'sample_thumbnail.jpg', size: '45 KB', resolution: '320x240', quality: 'Thumbnail', compression: '75%' }
      ]
    },
    gif: {
      title: 'GIF 画像ファイル',
      description: 'GIF形式の画像ファイルをダウンロードできます。アニメーション対応の画像ファイルです。',
      icon: ImageIcon,
      color: 'yellow',
      files: [
        { name: 'sample_1080p_animated.gif', size: '12.5 MB', resolution: '1920x1080', quality: 'Full HD', frames: '120 frames', duration: '4s' },
        { name: 'sample_720p_animated.gif', size: '6.8 MB', resolution: '1280x720', quality: 'HD', frames: '120 frames', duration: '4s' },
        { name: 'sample_480p_animated.gif', size: '3.2 MB', resolution: '854x480', quality: 'SD', frames: '120 frames', duration: '4s' },
        { name: 'sample_360p_animated.gif', size: '1.8 MB', resolution: '640x360', quality: 'Low', frames: '120 frames', duration: '4s' },
        { name: 'sample_720p_static.gif', size: '850 KB', resolution: '1280x720', quality: 'HD Static', frames: '1 frame', duration: 'Static' },
        { name: 'sample_480p_static.gif', size: '420 KB', resolution: '854x480', quality: 'SD Static', frames: '1 frame', duration: 'Static' }
      ]
    }
  }

  const currentData = fileData[format] || fileData.mp4
  const IconComponent = currentData.icon

  const getQualityIcon = (quality) => {
    if (quality.includes('4K') || quality.includes('8K')) return Monitor
    if (quality.includes('HD')) return Tablet
    if (quality.includes('SD') || quality.includes('Low')) return Smartphone
    return HardDrive
  }

  const getQualityColor = (quality) => {
    if (quality.includes('8K')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    if (quality.includes('4K')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    if (quality.includes('Full HD')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    if (quality.includes('HD')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }

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
          {format?.toUpperCase()}
        </Badge>
      </div>

      {/* 統計情報 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <File className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">ファイル数</p>
                <p className="text-xl font-bold">{currentData.files.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <HardDrive className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">総サイズ</p>
                <p className="text-xl font-bold">
                  {format === 'mp4' ? '3.9 GB' : format === 'mkv' ? '3.6 GB' : format === 'jpg' ? '33.1 MB' : '25.6 MB'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Monitor className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">最高品質</p>
                <p className="text-xl font-bold">
                  {format === 'jpg' ? '8K' : '4K'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5 text-orange-600" />
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">ダウンロード数</p>
                <p className="text-xl font-bold">
                  {format === 'mp4' ? '15.2K' : format === 'mkv' ? '8.7K' : format === 'jpg' ? '23.1K' : '12.4K'}
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
              const QualityIcon = getQualityIcon(file.quality)
              return (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg bg-${currentData.color}-100 dark:bg-${currentData.color}-900`}>
                      <QualityIcon className={`w-5 h-5 text-${currentData.color}-600 dark:text-${currentData.color}-400`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">{file.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mt-1">
                        <span>{file.resolution}</span>
                        <span>•</span>
                        <span>{file.size}</span>
                        {file.bitrate && (
                          <>
                            <span>•</span>
                            <span>{file.bitrate}</span>
                          </>
                        )}
                        {file.duration && (
                          <>
                            <span>•</span>
                            <span>{file.duration}</span>
                          </>
                        )}
                        {file.compression && (
                          <>
                            <span>•</span>
                            <span>品質 {file.compression}</span>
                          </>
                        )}
                        {file.frames && (
                          <>
                            <span>•</span>
                            <span>{file.frames}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getQualityColor(file.quality)}>
                      {file.quality}
                    </Badge>
                    <Button size="sm" className="flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>ダウンロード</span>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* 使用方法 */}
      <Card>
        <CardHeader>
          <CardTitle>使用方法とライセンス</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">利用規約</h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• 個人利用・商用利用ともに無料</li>
                <li>• クレジット表記は不要</li>
                <li>• 再配布・転売は禁止</li>
                <li>• 著作権は当サイトに帰属</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">推奨用途</h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• ウェブサイト・アプリのテスト</li>
                <li>• プレゼンテーション資料</li>
                <li>• 開発・デモンストレーション</li>
                <li>• 教育・学習目的</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FileListDisplay

