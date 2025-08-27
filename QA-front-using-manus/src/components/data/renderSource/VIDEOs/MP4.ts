import { FileVideo } from "lucide-react";

const mp4 = {
    title: 'MP4 動画ファイル',
    description: 'MP4形式の動画ファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
    icon: FileVideo,
    color: 'blue',
    files: [
        // 1MB～100MBまで、各MBごとに0.9MB, 1.0MB, 1.1MB
        ...Array.from({length: 100}, (_, i) => {
            const mb = i + 1;
            return [
                { name: `${(mb-0.1).toFixed(1)}MB.mp4`, size: `${(mb-0.1).toFixed(1)} MB`, path: `VIDEOs/MP4s/${mb}/${(mb-0.1).toFixed(1)}MB.mp4` },
                { name: `${mb.toFixed(1)}MB.mp4`, size: `${mb.toFixed(1)} MB`, path: `VIDEOs/MP4s/${mb}/${mb.toFixed(1)}MB.mp4` },
                { name: `${(mb+0.1).toFixed(1)}MB.mp4`, size: `${(mb+0.1).toFixed(1)} MB`, path: `VIDEOs/MP4s/${mb}/${(mb+0.1).toFixed(1)}MB.mp4` },
            ];
        }).flat()
    ]
}

export default mp4;
