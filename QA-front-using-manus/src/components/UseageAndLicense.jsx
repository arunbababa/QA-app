import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const UseageAndLicense = () => {
    return (
        <>
            {/* 使用方法 */}
            <Card>
                <CardHeader>
                    <CardTitle>使用方法とライセンス</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
        </>
  )
}

export default UseageAndLicense
