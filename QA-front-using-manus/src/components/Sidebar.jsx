import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, BarChart3 } from 'lucide-react'
import UseageAndLicense from './UseageAndLicense'

const Sidebar = () => {
    // Temporary static value, replace with your logic if needed
    const downloadCount = 1000;

    // ここら辺の各Cardをコンポーネントに切り出し
    return (
        <>
            <div className="lg:col-span-1">
                <div className="space-y-6">
                    {/* Sample Videos Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-semibold text-slate-700 dark:text-slate-300">動画形式のファイル</CardTitle>
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
                        </CardContent>
                    </Card>

                    {/* Sample Images Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-semibold text-slate-700 dark:text-slate-300">画像形式のファイル</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-red-500 rounded"></div>
                                <Link to="/images/jpeg" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">JPEG</Link>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                                <Link to="/images/png" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">PNG</Link>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                                <Link to="/images/gif" className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">GIF</Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sample Files Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-semibold text-slate-700 dark:text-slate-300">様々な形式のファイル</CardTitle>
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
                                <span>ダウンロードされたファイルの統計情報</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600 dark:text-slate-400">総ダウンロード数</span>
                                <Badge variant="outline" className="font-mono">
                                    {downloadCount.toLocaleString()}
                                </Badge>
                            </div>
                        </CardContent>
                        <CardContent>
                            <p className='pb-2'>人気順</p>
                            {['XLS', 'CSV', 'Doc File', 'SQL', 'PPT', 'PDF', 'Text File', 'ZIP'].map((type) => (
                                <div className="flex items-center justify-between pb-2">
                                    <span className="text-sm text-slate-600 dark:text-slate-400">{type}</span>
                                    <Badge variant="outline" className="font-mono">
                                        {downloadCount.toLocaleString()}
                                    </Badge>
                                </div>
                            ))}
                        
                        </CardContent>
                    </Card>

                    <UseageAndLicense />
                </div>
            </div>
        </>
    )
}

export default Sidebar
