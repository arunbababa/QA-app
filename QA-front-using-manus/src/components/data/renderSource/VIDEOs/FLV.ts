import { FileVideo } from "lucide-react";

const flv = {
    title: 'FLV 動画ファイル',
    description: 'FLV形式の動画ファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
    icon: FileVideo,
    color: 'green',
    files: [
        // 1MB～100MBまで、各MBごとに0.9MB, 1.0MB, 1.1MB
        ...Array.from({ length: 100 }, (_, i: number) => {
            const mb = i + 1; // 最初のインデックスは0のため
            return [
                { name: `${(mb - 0.1).toFixed(1)}MB.flv`, size: `${(mb - 0.1).toFixed(1)}`, path: `VIDEOs/FLVs/${mb}/${(mb - 0.1).toFixed(1)}MB.flv` },
                { name: `${mb.toFixed(1)}MB.flv`, size: `${mb.toFixed(1)}`, path: `VIDEOs/FLVs/${mb}/${mb.toFixed(1)}MB.flv` },
                { name: `${(mb + 0.1).toFixed(1)}MB.flv`, size: `${(mb + 0.1).toFixed(1)}`, path: `VIDEOs/FLVs/${mb}/${(mb + 0.1).toFixed(1)}MB.flv` },
            ];
        }).flat()
    ]
}

export default flv