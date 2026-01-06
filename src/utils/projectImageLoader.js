// Import project images
import sxdbg10 from "../assets/img/sxd-ab10.png";
import sxdbg11 from "../assets/img/sxd-ab11.png";
import sxdbg12 from "../assets/img/sxd-ab12.png";
import sxdbg13 from "../assets/img/sxd-ab13.png";
import sxdbg14 from "../assets/img/sxd-ab14.png";
import sxdbg15 from "../assets/img/sxd-ab15.png";

// Map key là tên file ảnh (ví dụ: "sxd-ab10.jpg", "sxd-ab11.jpg",...)
const projectImageMap = {
  "sxd-ab10.jpg": sxdbg10,
  "sxd-ab11.jpg": sxdbg11,
  "sxd-ab12.jpg": sxdbg12,
  "sxd-ab13.jpg": sxdbg13,
  "sxd-ab14.jpg": sxdbg14,
  "sxd-ab15.jpg": sxdbg15,
};

// Function để lấy ảnh theo tên file
export function getProjectImageByFileName(imageFile) {
  return projectImageMap[imageFile] || null;
}

export default projectImageMap;
