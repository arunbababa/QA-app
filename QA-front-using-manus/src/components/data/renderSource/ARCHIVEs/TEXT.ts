import { FileTextIcon } from "lucide-react";

const text = {
    title: 'TEXT テキストファイル',
    description: 'TEXT形式のテキストファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
    icon: FileTextIcon,
    color: 'blue',
    files: [
        // 1MB～100MBまで、各MBごとに0.9MB, 1.0MB, 1.1MB
        ...Array.from({ length: 100 }, (_, i) => {
            const mb = i + 1; // 最初のインデックスは0のため
            return [
                { name: `${(mb - 0.1).toFixed(1)}MB.txt`, size: `${(mb - 0.1).toFixed(1)} MB`, path: `ARCHIVEs/TEXTs/${mb}/${(mb - 0.1).toFixed(1)}MB.txt` },
                { name: `${mb.toFixed(1)}MB.txt`, size: `${mb.toFixed(1)} MB`, path: `ARCHIVEs/TEXTs/${mb}/${mb.toFixed(1)}MB.txt` },
                { name: `${(mb + 0.1).toFixed(1)}MB.txt`, size: `${(mb + 0.1).toFixed(1)} MB`, path: `ARCHIVEs/TEXTs/${mb}/${(mb + 0.1).toFixed(1)}MB.txt` },
            ];
        }).flat()
    ]
}

export default text