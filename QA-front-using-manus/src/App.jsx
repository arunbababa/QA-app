import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Shield, Eye, Cookie, Users, Lock, Mail, ExternalLink, BarChart3, FileText, Download } from 'lucide-react'
import FileListDisplay from './components/FileListDisplay.jsx'
import './App.css'

// プライバシーポリシーページのコンポーネント
function PrivacyPolicyPage() {
  const [downloadCount] = useState(3558603)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {/* Sample Videos Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-slate-700 dark:text-slate-300">Sample Videos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <Link to="/videos/mp4" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">MP4</Link>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <a href="#" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">FLV</a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <Link to="/videos/mkv" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">MKV</Link>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <a href="#" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">3GP</a>
                </div>
              </CardContent>
            </Card>

            {/* Sample Images Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-slate-700 dark:text-slate-300">Sample Images</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <Link to="/images/jpg" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">JPG</Link>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <a href="#" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">PNG</a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <Link to="/images/gif" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">GIF</Link>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <a href="#" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">SVG</a>
                </div>
              </CardContent>
            </Card>

            {/* Sample Files Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-slate-700 dark:text-slate-300">Sample Files</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {['XLS', 'CSV', 'Doc File', 'SQL', 'PPT', 'PDF', 'Text File', 'ZIP'].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <a href="#" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Sample {type}</a>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Download Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Sample Video Download Statistics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Total Downloaded</span>
                  <Badge variant="outline" className="font-mono">
                    {downloadCount.toLocaleString()}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white flex items-center space-x-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <span>プライバシーポリシー</span>
              </CardTitle>
              <Badge variant="outline" className="w-fit">
                発効日: 2025年8月3日
              </Badge>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  当サイトでは、お客様のプライバシーを重視しています。このプライバシーポリシーは、お客様が当サイトを訪問または利用する際に、お客様のデータをどのように取り扱うかを説明するものです。
                </p>
              </div>

              <Separator />

              {/* Information We Collect */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <span>1. 収集する情報</span>
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  当サイトでは、お客様から<strong>直接個人情報を収集することはありません</strong>。ログインや登録なしに、自由に当サイトにアクセスし、利用することができます。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <Download className="w-4 h-4 text-green-600" />
                        <span>ダウンロードカウンター</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li>• このカウンターは<strong>純粋に統計的なもの</strong>です</li>
                        <li>• <strong>個人データ、IPアドレス、ユーザーIDを追跡または保存することはありません</strong></li>
                        <li>• データは、一般的な利用状況の統計を公開するためにのみ使用されます</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                        <span>Google Analytics</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        Google LLCが提供するウェブ分析サービスを使用し、匿名化された利用状況データを収集します。
                      </p>
                      <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                        <li>• 訪問したページ</li>
                        <li>• ページに費やした時間</li>
                        <li>• ブラウザとデバイスの種類</li>
                        <li>• 一般的な地理的位置（都市レベル）</li>
                        <li>• 参照元サイト</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Cookies */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Cookie className="w-5 h-5 text-orange-600" />
                  <span>2. クッキー</span>
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Google Analytics</strong>で使用されるもの以外に、当サイトでは追跡、広告、パーソナライゼーションのために<strong>他のクッキーを使用しません</strong>。
                </p>
              </div>

              <Separator />

              {/* Third-Party Services */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5 text-purple-600" />
                  <span>3. サードパーティサービス</span>
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  当サイトでは、Google Analytics以外のサードパーティの広告プラットフォームやユーザー追跡システムは使用していません。
                </p>
              </div>

              <Separator />

              {/* Children's Privacy */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span>4. 子供のプライバシー</span>
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  当サイトはすべての年齢のユーザーがアクセス可能であり、13歳未満の子供から情報を意図的に収集することはありません。Google Analyticsが匿名データを処理する可能性があるため、保護者の方にはお子様のウェブ活動を監督することをお勧めします。
                </p>
              </div>

              <Separator />

              {/* Data Security */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-red-600" />
                  <span>5. データセキュリティ</span>
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  当サイトでは、個人情報を直接収集または保存することはありません。すべての分析データは、Googleのプライバシーポリシーに基づいてGoogleによって安全に処理および保存されます。
                </p>
              </div>

              <Separator />

              {/* Contact */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>7. お問い合わせ</span>
                </h2>
                <p className="text-slate-700 dark:text-slate-300">
                  このプライバシーポリシーに関するご質問やご不明な点がございましたら、
                  <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                    こちら
                  </Button>
                  からお問い合わせください。
                </p>
              </div>

              <Separator />

              {/* Ezoic Services */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Ezoicサービス</h2>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    このウェブサイトは、サードパーティのインタレストベース広告を管理するために、Ezoic Inc.（「Ezoic」）のサービスを使用しています。Ezoicは、コンテンツの提供、広告の表示、このウェブサイトの訪問者への広告の有効化のためのツールなど、さまざまな技術をこのウェブサイトで採用する場合があります。
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">収集される可能性のある情報：</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div>• IPアドレス</div>
                      <div>• オペレーティングシステム</div>
                      <div>• デバイスの種類</div>
                      <div>• 言語設定</div>
                      <div>• ウェブブラウザの種類</div>
                      <div>• メール（暗号化形式）</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// ヘッダーコンポーネント
function Header() {
  const location = useLocation()
  
  const getPageTitle = () => {
    if (location.pathname.startsWith('/videos/')) {
      const format = location.pathname.split('/')[2]
      return `${format?.toUpperCase()} Videos`
    }
    if (location.pathname.startsWith('/images/')) {
      const format = location.pathname.split('/')[2]
      return `${format?.toUpperCase()} Images`
    }
    return 'Privacy Policy'
  }

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">Sample Videos</h1>
            </Link>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">About</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Contact</a>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {getPageTitle()}
            </Badge>
          </nav>
        </div>
      </div>
    </header>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <Header />
        
        <Routes>
          <Route path="/" element={<PrivacyPolicyPage />} />
          <Route path="/videos/:format" element={<FileListDisplay />} />
          <Route path="/images/:format" element={<FileListDisplay />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

