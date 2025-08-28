import { ImageIcon } from "lucide-react";

const png = {
    title: 'PNG 画像ファイル',
    description: 'PNG形式の画像ファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
    icon: ImageIcon,
    color: 'green',
    files: [
        // 1MB～100MBまで、各MBごとに0.9MB, 1.0MB, 1.1MB
        ...Array.from({ length: 100 }, (_, i) => {
            const mb = i + 1; // 最初のインデックスは0のため
            return [
                { name: `${(mb - 0.1).toFixed(1)}MB.png`, size: `${(mb - 0.1).toFixed(1)} MB`, path: `IMAGEs/PNGs/${mb}/${(mb - 0.1).toFixed(1)}MB.png` },
                { name: `${mb.toFixed(1)}MB.png`, size: `${mb.toFixed(1)} MB`, path: `IMAGEs/PNGs/${mb}/${mb.toFixed(1)}MB.png` },
                { name: `${(mb + 0.1).toFixed(1)}MB.png`, size: `${(mb + 0.1).toFixed(1)} MB`, path: `IMAGEs/PNGs/${mb}/${(mb + 0.1).toFixed(1)}MB.png` },
            ];
        }).flat()
    ]
}

export default png