import { ImageIcon } from "lucide-react";

const gif = {
    title: 'GIF 画像ファイル',
    description: 'GIF形式の画像ファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
    icon: ImageIcon,
    color: 'purple',
    files: [
        // 1MB～100MBまで、各MBごとに0.9MB, 1.0MB, 1.1MB
        ...Array.from({ length: 100 }, (_, i) => {
            const mb = i + 1; // 最初のインデックスは0のため
            return [
                { name: `${(mb - 0.1).toFixed(1)}MB.gif`, size: `${(mb - 0.1).toFixed(1)} MB`, path: `IMAGEs/GIFs/${mb}/${(mb - 0.1).toFixed(1)}MB.gif` },
                { name: `${mb.toFixed(1)}MB.gif`, size: `${mb.toFixed(1)} MB`, path: `IMAGEs/GIFs/${mb}/${mb.toFixed(1)}MB.gif` },
                { name: `${(mb + 0.1).toFixed(1)}MB.gif`, size: `${(mb + 0.1).toFixed(1)} MB`, path: `IMAGEs/GIFs/${mb}/${(mb + 0.1).toFixed(1)}MB.gif` },
            ];
        }).flat()
    ]
}

export default gif