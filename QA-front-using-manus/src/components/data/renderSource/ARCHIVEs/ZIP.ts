import { ArchiveIcon } from "lucide-react";

const zip = {
    title: 'ZIP 圧縮ファイル',
    description: 'ZIP形式の圧縮ファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
    icon: ArchiveIcon,
    color: 'black',
    files: [
        // 1MB～100MBまで、各MBごとに0.9MB, 1.0MB, 1.1MB
        ...Array.from({ length: 100 }, (_, i) => {
            const mb = i + 1; // 最初のインデックスは0のため
            return [
                { name: `${(mb - 0.1).toFixed(1)}MB.zip`, size: `${(mb - 0.1).toFixed(1)} MB`, path: `ARCHIVEs/ZIPs/${mb}/${(mb - 0.1).toFixed(1)}MB.zip` },
                { name: `${mb.toFixed(1)}MB.zip`, size: `${mb.toFixed(1)} MB`, path: `ARCHIVEs/ZIPs/${mb}/${mb.toFixed(1)}MB.zip` },
                { name: `${(mb + 0.1).toFixed(1)}MB.zip`, size: `${(mb + 0.1).toFixed(1)} MB`, path: `ARCHIVEs/ZIPs/${mb}/${(mb + 0.1).toFixed(1)}MB.zip` },
            ];
        }).flat()
    ]
}

export default zip