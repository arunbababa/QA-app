import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, BarChart3 } from 'lucide-react'
import UseageAndLicense from './UseageAndLicense'

const Sidebar = () => {
    // Temporary static value, replace with your logic if needed
    const API = "https://r2-worker.hatuki-1-gzs.workers.dev";
    const [sumDownloadCount, setSumDownloadCount] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API}?key=metrics/downloads&file_type=all`);
                const data = await response.json();
                console.log(data)
                let count = 0;
                if (typeof data?.sumDownloadCount === 'number') {
                    count = data.sumDownloadCount;
                } else if (Array.isArray(data?.results) && typeof data.results[0]?.download_count === 'number') {
                    count = data.results[0].sumDownloadCount;
                } else if (Array.isArray(data) && typeof data[0]?.sumDownloadCount === 'number') {
                    count = data[0].sumDownloadCount;
                }
                setSumDownloadCount(count);
            } catch (error) {
                console.error("データの取得に失敗しました:", error);
            }
        }
        fetchData();
    }, []) // カウントステートが変わった際にはこちらは走らない

    // ここら辺の各Cardをコンポーネントに切り出し
    return (
        <>
            <div className="w-full">
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                    {/*  動画形式ファイルセクション */}
                    <Card className="p-4 sm:p-6 lg:p-8">
                        <CardHeader className="pb-4 sm:pb-6">
                            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300">動画形式のファイル</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 sm:space-y-4">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded"></div>
                                <Link to="/videos/mp4" className="text-base sm:text-lg lg:text-xl text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">MP4</Link>
                            </div>
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded"></div>
                                <Link to="/videos/flv" className="text-base sm:text-lg lg:text-xl text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">FLV</Link>
                            </div>
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded"></div>
                                <Link to="/videos/avi" className="text-base sm:text-lg lg:text-xl text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">AVI</Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 画像形式ファイルセクション */}
                    <Card className="p-4 sm:p-6 lg:p-8">
                        <CardHeader className="pb-4 sm:pb-6">
                            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300">画像形式のファイル</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 sm:space-y-4">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded"></div>
                                <Link to="/images/jpg" className="text-base sm:text-lg lg:text-xl text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">JPG</Link>
                            </div>
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded"></div>
                                <Link to="/images/png" className="text-base sm:text-lg lg:text-xl text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">PNG</Link>
                            </div>
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded"></div>
                                <Link to="/images/gif" className="text-base sm:text-lg lg:text-xl text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">GIF</Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* いろんな形式のファイルセクション */}
                    <Card className="p-4 sm:p-6 lg:p-8">
                        <CardHeader className="pb-4 sm:pb-6">
                            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300">様々な形式のファイル</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 sm:space-y-4">
                            {['CSV', 'PDF', 'Text'].map((type) => ( // べた書き修正
                                <div key={type} className="flex items-center space-x-3 sm:space-x-4">
                                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500" />
                                    <Link to={`/archives/${type.toLowerCase()}`} className="text-base sm:text-lg lg:text-xl text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">{type}</Link>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* ダウンロード統計情報 */}
                    <Card className="p-4 sm:p-6 lg:p-8">
                        <CardHeader className="pb-4 sm:pb-6">
                            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center space-x-3 sm:space-x-4">
                                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
                                <span>ダウンロードされたファイルの統計情報</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <span className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400">総ダウンロード数</span>
                                <Badge variant="outline" className="text-base sm:text-lg lg:text-xl font-mono px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3">
                                    {sumDownloadCount}
                                </Badge>
                            </div>
                        </CardContent>
                        {/* <CardContent>
                            <p className='pb-2'>人気順</p>
                            {['XLS', 'CSV', 'Doc File', 'SQL', 'PPT', 'PDF', 'Text File', 'ZIP'].map((type, index) => (
                                <div key={index} className="flex items-center justify-between pb-2">
                                    <span className="text-sm text-slate-600 dark:text-slate-400">{type}</span>
                                    <Badge variant="outline" className="font-mono">
                                        {downloadCount.toLocaleString()}
                                    </Badge>
                                </div>
                            ))}
                        
                        </CardContent> */}
                    </Card>

                    <UseageAndLicense />
                </div>
            </div>
        </>
    )
}

export default Sidebar
