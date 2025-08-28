import { ImageIcon } from "lucide-react";

const avi = {
    title: 'AVI 動画ファイル',
    description: 'AVI形式の動画ファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
    icon: ImageIcon,
    color: 'purple',
    files: [
        // 1MB～100MBまで、各MBごとに0.9MB, 1.0MB, 1.1MB
        ...Array.from({ length: 100 }, (_, i) => {
            const mb = i + 1; // 最初のインデックスは0のため
            return [
                { name: `${(mb - 0.1).toFixed(1)}MB.avi`, size: `${(mb - 0.1).toFixed(1)} MB`, path: `VIDEOs/AVI/${mb}/${(mb - 0.1).toFixed(1)}MB.avi` },
                { name: `${mb.toFixed(1)}MB.avi`, size: `${mb.toFixed(1)} MB`, path: `VIDEOs/AVI/${mb}/${mb.toFixed(1)}MB.avi` },
                { name: `${(mb + 0.1).toFixed(1)}MB.avi`, size: `${(mb + 0.1).toFixed(1)} MB`, path: `VIDEOs/AVI/${mb}/${(mb + 0.1).toFixed(1)}MB.avi` },
            ];
        }).flat()
    ]
}

export default avi