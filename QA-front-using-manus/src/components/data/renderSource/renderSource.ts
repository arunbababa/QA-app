import png from "./IMAGEs/PNG";
import jpg from "./IMAGEs/JPG";
import gif from "./IMAGEs/GIF";
import mp4 from "./VIDEOs/MP4";
import avi from "./VIDEOs/AVI";
import flv from "./VIDEOs/FLV";
import csv from "./ARCHIVEs/CSV";
import pdf from "./ARCHIVEs/PDF";
import text from "./ARCHIVEs/TEXT";
import xls from "./ARCHIVEs/XLS";
import zip from "./ARCHIVEs/ZIP";


const fileSources = { // 各ファイルタイプごとに次のような感じに保持してsidebarでレンダリングする videos: [mp4, avi, flv] んでsidebarコンポーネントのべた書きをなくす
  // 動画
  mp4,
  avi,
  flv,

  // 画像
  png,
  jpg,
  gif,

  //  その他
  csv,
  pdf,
  text,
  xls,
  zip
}

export default fileSources