import { FileTextIcon } from "lucide-react";

const pdf = {
    title: 'PDF ドキュメントファイル',
    description: 'PDF形式のドキュメントファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
    icon: FileTextIcon,
    color: 'red',
    files: [
        // 1MB～100MBまで、各MBごとに0.9MB, 1.0MB, 1.1MB
        ...Array.from({ length: 100 }, (_, i) => {
            const mb = i + 1; // 最初のインデックスは0のため
            return [
                { name: `${(mb - 0.1).toFixed(1)}MB.pdf`, size: `${(mb - 0.1).toFixed(1)} MB`, path: `ARCHIVEs/PDFs/${mb}/${(mb - 0.1).toFixed(1)}MB.pdf` },
                { name: `${mb.toFixed(1)}MB.pdf`, size: `${mb.toFixed(1)} MB`, path: `ARCHIVEs/PDFs/${mb}/${mb.toFixed(1)}MB.pdf` },
                { name: `${(mb + 0.1).toFixed(1)}MB.pdf`, size: `${(mb + 0.1).toFixed(1)} MB`, path: `ARCHIVEs/PDFs/${mb}/${(mb + 0.1).toFixed(1)}MB.pdf` },
            ];
        }).flat()
    ]
}

export default pdf