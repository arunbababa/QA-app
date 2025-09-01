import { FileTextIcon } from "lucide-react";

const csv = {
    title: 'CSV データファイル',
    description: 'CSV形式のデータファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
    icon: FileTextIcon,
    color: 'green',
    files: [
        // 1MB～100MBまで、各MBごとに0.9MB, 1.0MB, 1.1MB
        ...Array.from({ length: 100 }, (_, i) => {
            const mb = i + 1; // 最初のインデックスは0のため
            return [
                { name: `${(mb - 0.1).toFixed(1)}MB.csv`, size: `${(mb - 0.1).toFixed(1)} MB`, path: `ARCHIVEs/CSVs/${mb}/${(mb - 0.1).toFixed(1)}MB.csv` },
                { name: `${mb.toFixed(1)}MB.csv`, size: `${mb.toFixed(1)} MB`, path: `ARCHIVEs/CSVs/${mb}/${mb.toFixed(1)}MB.csv` },
                { name: `${(mb + 0.1).toFixed(1)}MB.csv`, size: `${(mb + 0.1).toFixed(1)} MB`, path: `ARCHIVEs/CSVs/${mb}/${(mb + 0.1).toFixed(1)}MB.csv` },
            ];
        }).flat()
    ]
}

export default csv