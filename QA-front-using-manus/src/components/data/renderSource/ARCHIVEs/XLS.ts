import { FileTextIcon } from "lucide-react";

const xls = {
    title: 'XLS Excelファイル',
    description: 'XLS形式のExcelファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
    icon: FileTextIcon,
    color: 'orange',
    files: [
        // 1MB～100MBまで、各MBごとに0.9MB, 1.0MB, 1.1MB
        ...Array.from({ length: 100 }, (_, i) => {
            const mb = i + 1; // 最初のインデックスは0のため
            return [
                { name: `${(mb - 0.1).toFixed(1)}MB.xls`, size: `${(mb - 0.1).toFixed(1)} MB`, path: `ARCHIVEs/XLSs/${mb}/${(mb - 0.1).toFixed(1)}MB.xls` },
                { name: `${mb.toFixed(1)}MB.xls`, size: `${mb.toFixed(1)} MB`, path: `ARCHIVEs/XLSs/${mb}/${mb.toFixed(1)}MB.xls` },
                { name: `${(mb + 0.1).toFixed(1)}MB.xls`, size: `${(mb + 0.1).toFixed(1)} MB`, path: `ARCHIVEs/XLSs/${mb}/${(mb + 0.1).toFixed(1)}MB.xls` },
            ];
        }).flat()
    ]
}

export default xls