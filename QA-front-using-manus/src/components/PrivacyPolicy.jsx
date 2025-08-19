import { Badge, BarChart3, Cookie, Download, ExternalLink, Eye, Lock, Mail, Shield, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const  PrivacyPolicyPage = () => {
    // const [downloadCount] = useState(3558603)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                {/* <Sidebar /> */}
                {/* 全体共通で設定しているので */}

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

export default PrivacyPolicyPage