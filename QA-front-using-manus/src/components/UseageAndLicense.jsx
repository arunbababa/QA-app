import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const UseageAndLicense = () => {
    return (
        <div className="w-full px-8 sm:px-0">
            <Card className="lg:px-8">
                <CardHeader>
                    <CardTitle>使用方法とライセンス</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">利用規約</h4>
                            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                <li>• 個人利用・商用利用ともに無料</li>
                                <li>• 再配布・転売は禁止</li>
                                <li>• 著作権は当サイトに帰属</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">推奨用途</h4>
                            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                <li>• ウェブサイト・アプリのテスト</li>
                                <li>• 開発・検証作業の一環</li>
                                <li>• 教育・学習目的</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">対応ファイル形式</h4>
                            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                <li>• 動画: MP4, AVI, FLV</li>
                                <li>• 画像: JPG, PNG, GIF</li>
                                <li>• その他: CSV, PDF, Text</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default UseageAndLicense