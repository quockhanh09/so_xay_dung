// Import tất cả ảnh
import img2 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/2.jpg";
import img3 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/3.jpg";
import img4 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/4.jpg";
import img5 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/5.jpg";
import img6 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/6.jpg";
import img7 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/7.jpg";
import img8 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/8.jpg";
import img9 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/9.jpg";
import img10 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/10.jpg";
import img11 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/11.jpg";
import img12 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/12.jpg";
import img13 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/13.jpg";
import img14 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/14.jpg";
import img15 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/15.jpg";
import img16 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/16.jpg";
import img17 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/17.jpg";
import img18 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/18.jpg";
import img19 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/19.jpg";
import img20 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/20.jpg";
import img21 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/21.jpg";
import img22 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/22.jpg";
import img23 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/23.jpg";
import img24 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/24.jpg";
import img25 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/25 (2).jpg";
import img26 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/26.jpg";
import img27 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/27.jpg";
import img28 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/28.jpg";
import img29 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/29.jpg";
import img30 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/30.jpg";
import img31 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/31.jpg";
import img32 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/31.jpg";

// Map key là tên file ảnh (ví dụ: "2.jpg", "3.jpg",...)
const imageMap = {
  "2.jpg": img2,
  "3.jpg": img3,
  "4.jpg": img4,
  "5.jpg": img5,
  "6.jpg": img6,
  "7.jpg": img7,
  "8.jpg": img8,
  "9.jpg": img9,
  "10.jpg": img10,
  "11.jpg": img11,
  "12.jpg": img12,
  "13.jpg": img13,
  "14.jpg": img14,
  "15.jpg": img15,
  "16.jpg": img16,
  "17.jpg": img17,
  "18.jpg": img18,
  "19.jpg": img19,
  "20.jpg": img20,
  "21.jpg": img21,
  "22.jpg": img22,
  "23.jpg": img23,
  "24.jpg": img24,
  "25 (2).jpg": img25,
  "26.jpg": img26,
  "27.jpg": img27,
  "28.jpg": img28,
  "29.jpg": img29,
  "30.jpg": img30,
  "31.jpg": img31,
  "32.jpg": img32,
};

// Hàm lấy ảnh từ tên file
export const getImageByFileName = (fileName) => {
  return imageMap[fileName] || null;
};

export default imageMap;
