const { ImageIcon } = "lucide-react"

// ダミーファイルデータ
const fileData = {
    jpeg: {
        title: 'JPG 画像ファイル',
        description: 'JPG形式の画像ファイルをダウンロードできます。境界値テストにも使えるよう、各1~100MBサイズのファイルの+-0.1MBまでご用意しております。',
        icon: ImageIcon,
        color: 'red',
        files: [
            { name: 'sample_8k.jpg', size: '15.2 MB' },
            { name: 'sample_4k_high.jpg', size: '8.5 MB' },
            { name: 'sample_4k_standard.jpg', size: '4.2 MB' },
            { name: 'sample_1080p_high.jpg', size: '2.8 MB' },
            { name: 'sample_1080p_standard.jpg', size: '1.2 MB' },
            { name: 'sample_720p.jpg', size: '680 KB' },
            { name: 'sample_480p.jpg', size: '320 KB' },
            { name: 'sample_thumbnail.jpg', size: '45 KB' }
        ]
    },
}

export default fileData