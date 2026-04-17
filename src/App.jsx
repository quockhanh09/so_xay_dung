import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const AwardDetail = lazy(() => import("./components/AwardDetail"));

// import Layout from "./Layout.jsx";
import Header from "./components/Header";
import LogoAnimation from "./components/LogoAnimation";
import Achievement from "./components/Achievement";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Project from "./components/Project";
import ProjectProfile from "./components/ProjectProfile";

import ProjectDetails from "./components/ProjectDetails";

import About from "./components/About";
import Profile from "./components/Profile";
import LeadershipPage from "./components/LeadershipPage";
import ManageSectionPage from "./components/ManageSectionPage";
import ProjectCategory from "./components/ProjectCategory";

import "./style/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flag-icons/css/flag-icons.min.css'

import sxdbg1 from "./assets/img/sxd-ab1.png"
import sxdbg2 from "./assets/img/sxd-ab2.png"
import sxdbg3 from "./assets/img/sxd-ab3.png"
import sxdbg4 from "./assets/img/sxd-ab4.png"
import vietnamOutline from "./data/vietnam_outline.json";
import projectsData from "./data/projects.json";
  // Lấy 6 dự án gần nhất từ projects.json
  const allProjectsArr = Object.values(projectsData)
    .sort((a, b) => b.id - a.id); // id lớn nhất là mới nhất
  const featuredProjects = allProjectsArr.slice(0, 6).map((p) => ({
    id: p.id,
    title: p.title,
    location: p.location || "Việt Nam", // fallback nếu không có location
    year: p.year || "2026", // fallback nếu không có year
    category:
      p.category === "quy-hoach-do-thi"
        ? "Quy hoạch đô thị"
        : p.category === "thiet-ke-cong-trinh"
        ? "Thiết kế công trình"
        : p.category === "thiet-ke-canh-quan"
        ? "Thiết kế cảnh quan"
        : p.category === "ha-tang-ky-thuat"
        ? "Hạ tầng kỹ thuật"
        : p.category === "quy-hoach-nong-thon"
        ? "Quy hoạch nông thôn"
        : "Khác",
    image: Array.isArray(p.images) && p.images.length > 0 ? p.images[0] : p.avatar,
  }));



// ===== Ảnh bản thân =====
import banThan2 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/2.jpg";
import banThan3 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/3.jpg";
import banThan4 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/4.jpg";
import banThan5 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/5.jpg";
import banThan6 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/6.jpg";
import banThan7 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/7.jpg";
import banThan8 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/8.jpg";
import banThan9 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/9.jpg";
import banThan10 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/10.jpg";
import banThan11 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/11.jpg";
import banThan12 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/12.jpg";
import banThan13 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/13.jpg";
import banThan14 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/14.jpg";
import banThan15 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/15.jpg";
import banThan16 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/16.jpg";
import banThan17 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/17.jpg";
import banThan18 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/18.jpg";
import banThan19 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/19.jpg";
import banThan20 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/20.jpg";
import banThan21 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/21.jpg";
import banThan22 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/22.jpg";
import banThan23 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/23.jpg";
import banThan24 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/24.jpg";
import banThan25 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/25 (2).jpg";
import banThan26 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/26.jpg";
import banThan27 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/27.jpg";
import banThan28 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/28.jpg";
import banThan29 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/29.jpg";
import banThan30 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/30.jpg";
import banThan31 from "./assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/31.jpg";

const buildVietnamPathData = () => {
  const coords =
    vietnamOutline?.features?.[0]?.geometry?.coordinates?.[0] ?? [];

  if (!coords.length) {
    return {
      viewBox: "0 0 100 200",
      path: "",
    };
  }

  const projected = coords.map(([lon, lat]) => ({ x: lon, y: -lat }));
  const xs = projected.map((p) => p.x);
  const ys = projected.map((p) => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const width = maxX - minX;
  const height = maxY - minY;
  const padX = width * 0.22;
  const padY = height * 0.2;

  const path =
    projected
      .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(4)} ${p.y.toFixed(4)}`)
      .join(" ") + " Z";

  return {
    viewBox: `${(minX - padX).toFixed(4)} ${(minY - padY).toFixed(4)} ${(width + padX * 2).toFixed(4)} ${(height + padY * 2).toFixed(4)}`,
    path,
  };
};

const vietnamMapSvg = buildVietnamPathData();



function App({ characters }) {
  const [showLogo, setShowLogo] = useState(true);
  const charactersList = [
    { 
      id: 1,"
      name: "Nguyễn Thị Phương Liên" 
      image: banThan2,
      title: "Trưởng phòng tài chính - tổng hợp" 
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 2,
      name: "Phạm Thị Lan Anh"
      image: banThan3,
      title: "Văn Thư"
      subtitle: "Board of Directors, Principal",
      role: "Civil Engineer"
    },
    { 
      id: 3,
      name: "Nguyễn Thị Huyền"
      image: banThan4,
      title:"Phụ Trách Kế Toán "
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 4,
      name: "Vũ Bá Minh"
      image: banThan5,
      title: "Chuyên viên - Truyền thông"
      subtitle: "Associate Principal, Board of Directors",
      role: "Architect"
    },
    { 
      id: 5,
      name: "Phạm Minh Phương"
      image: banThan6,
      title: "Giám đốc trung tâm thiết kế đô thị"
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 6,
      name: "Lê Huy Phong"
      image: banThan7,
      title: "Phó Giám đốc trung tâm thiết kế đô thị",
      subtitle: "Board of Directors, Principal",
      role: "Designer"
    },
    { 
      id: 7,
      name: "Vũ Thị Minh Nguyệt"
      image: banThan8,
      title: "KTS- Chuyên viên trung tâm thiết kế đô thị",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 8,
      name: "Joshua Brooks", 
      image: banThan9,
      title: "Denver Office Director",
      subtitle: "Principal",
      role: "Landscape Architect"
    },
    { 
      id: 9,
      name: "Nguyễn Đại Thắng"
      image: banThan10,
      title: "Giám đốc trung tâm quy hoạch đô thị",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 10,
      name: "Trần Hoàng Giang"
      image: banThan11,
      title: "Phó Giám đốc trung tâm quy hoạch đô thị",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 11,
      name: "Đặng Thị Nguyễn Huyền"
      image: banThan12,
      title: "KTS- Chuyên viên trung tâm quy hoạch đô thị",
      subtitle: "Architect",
      role: ""
    },
    { 
      id: 12,
      name: "Phan Đình Ấn"
      image: banThan13,
      title: "Chuyên viên trung tâm quy hoạch đô thị",
      subtitle: "Principal",
      role: "Architect"
    },
    { 
      id: 13,
      name: "Nguyễn Hùng Sơn "
      image: banThan14,
      title: "Giám đốc trung tâm hạ tầng kỹ thuật",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 14,
      name: "Nguyễn Thùy Dung", 
      image: banThan15,
      title: "Phó giám đốc trung tâm hạ tầng kỹ thuật",
      subtitle: "Board of Directors, Principal",
      role: "Civil Engineer"
    },
    { 
      id: 15,
      name: "Nguyễn Anh Tuấn", 
      image: banThan16,
      title: "KTS- Trung tâm hạ tầng kỹ thuật",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 16,
      name: "Tô Duy Long", 
      image: banThan17,
      title: "KTS- Trung tâm hạ tầng kỹ thuật",
      subtitle: "Associate Principal",
      role: "Architect"
    },
    { 
      id: 17,
      name: "Hoàng Trung Dũng", 
      image: banThan18,
      title: "KTS - Trung tâm hạ tầng kỹ thuật",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 18,
      name: "Lê Thị Ngọc Lan", 
      image: banThan19,
      title: "KTS - Trung tâm hạ tầng kỹ thuật",
      subtitle: "Board of Directors, Principal",
      role: "Designer"
    },
    { 
      id: 19,
      name: "Phạm Quỳnh Anh", 
      image: banThan20,
      title: "KTS- Trung tâm quy hoạch đô thị",
      subtitle: "Board of Directors",
      role: "Landscape Architect"
    },
    { 
      id: 20,
      name: "Đinh Nguyệt Ánh", 
      image: banThan21,
      title: "Giám đốc trung tâm kiến trúc công trình",
      subtitle: "Principal",
      role: "Landscape Architect"
    },
    { 
      id: 21,
      name: "Nguyễn Xuân Khánh", 
      image: banThan22,
      title: "Phó giám đốc trung tâm kiến trúc công trình",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 22,
      name: "Nguyễn Ngọc Kiên", 
      image: banThan23,
      title: "KTS -  Chuyên viên trung tâm kiến trúc công trình",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 23,
      name: "Nguyễn Hồng Dương", 
      image: banThan24,
      title: "KTS -  Chuyên viên trung tâm kiến trúc công trình",
      subtitle: "Architect",
      role: ""
    },
    { 
      id: 24,
      name: "Trần Nhật Linh", 
      image: banThan25,
      title: "KTS - Chuyên viên Trung tâm kiến trúc công trình",
      subtitle: "Principal",
      role: "Architect"
    },
    { 
      id: 25,
      name: "Nguyễn Thị Thanh Hương", 
      image: banThan26,
      title: "KTS - chuyên viên trung tâm thiết kế đô thị",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 26,
      name: "Lê Tiến Đồng", 
      image: banThan27,
      title: "Chair At-Large",
      subtitle: "Board of Directors, Principal",
      role: "Civil Engineer"
    },
    { 
      id: 27,
      name: "Cao Kỳ Sơn", 
      image: banThan28,
      title: "President",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 28,
      name: "Từ Quang Huy", 
      image: banThan29,
      title: "Chair At-Large",
      subtitle: "Associate Principal",
      role: "Architect"
    },
    { 
      id: 29,
      name: "Diệp Sơn Tùng", 
      image: banThan30,
      title: "Chair of Planning & Urban Design",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 30,
      name: "Vũ Mạnh Huy Tuấn", 
      image: banThan31,
      title: "Chair of Design Integration",
      subtitle: "Board of Directors, Principal",
      role: "Designer"
    },
  ];

  const sectionMembers = {
    phongTongHop: charactersList.slice(0, 6),
    thietKeDoThi: charactersList.slice(6, 12),
    quyHoachDoThi: charactersList.slice(12, 18),
    thietKeCongTrinh: charactersList.slice(18, 24),
    haTangKyThuat: charactersList.slice(24),
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;
  const totalPages = Math.ceil(charactersList.length / itemsPerPage);

  const currentItems = charactersList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const [commentsColumn1, setCommentsColumn1] = useState([
    "Đắm chìm trong một thế giới sống động như thật!... ",
    "Đồ họa quá đỉnh! Thế giới trong game được thiết kế tỉ mỉ...",
    "Cảm giác chiến thắng sau mỗi thử thách thật sự thỏa mãn...Cảm giác chiến thắng sau mỗi thử thách thật sự thỏa mãn...",
    "Đắm chìm trong một thế giới sống động như thật! Đồ họa của game thực sự là một tác phẩm nghệ thuật. Từ những ngọn cỏ lay động trước gió, ánh nắng xuyên qua tán lá, cho đến kiến trúc tráng lệ của các thành phố cổ kính, mọi chi tiết đều được chăm chút tỉ mỉ đến kinh ngạc. Hiệu ứng ánh sáng và đổ bóng chân thực càng làm tăng thêm chiều sâu và sự cuốn hút cho thế giới ảo này, khiến người chơi hoàn toàn bị mê hoặc và quên đi ranh giới giữa thực và ảo.",
    "Cảm giác chiến thắng sau mỗi thử thách thật sự thỏa mãn..."
  ]);

  const commentsColumn2 = [
    "Gameplay sáng tạo và gây nghiện!...",
    "Trải nghiệm gameplay mượt mà và đầy thử thách!...",
    "Gameplay sáng tạo và gây nghiện! Cơ chế chiến đấu mượt mà, các nhiệm vụ đa dạng và luôn có điều gì đó mới mẻ để khám phá.",
    "Trải nghiệm gameplay mượt mà và đầy thử thách!...",
    "Trải nghiệm gameplay mượt mà và đầy thử thách!...",
    "Trải nghiệm gameplay mượt mà và đầy thử thách! Cơ chế chiến đấu của game được thiết kế tinh tế, đòi hỏi người chơi không chỉ có kỹ năng cá nhân mà còn phải có tư duy chiến thuật. Sự đa dạng trong cách xây dựng nhân vật, lựa chọn vũ khí và kỹ năng mở ra vô vàn chiến thuật khác nhau. Các nhiệm vụ được thiết kế thông minh, không lặp lại nhàm chán mà luôn mang đến những thử thách mới mẻ, đòi hỏi người chơi phải vận dụng tất cả những gì mình có để vượt qua.",

  ];

  const commentsColumn3 = [
    "Hiệu ứng ánh sáng và đổ bóng chân thực...",
    "Game mang lại những khoảnh khắc đáng nhớ...",
    "Đắm chìm trong một thế giới sống động như thật! Đồ họa của game thực sự là một tác phẩm nghệ thuật. Từ những ngọn cỏ lay động trước gió, ánh nắng xuyên qua tán lá, cho đến kiến trúc tráng lệ của các thành phố cổ kính, mọi chi tiết đều được chăm chút tỉ mỉ đến kinh ngạc. Hiệu ứng ánh sáng và đổ bóng chân thực càng làm tăng thêm chiều sâu và sự cuốn hút cho thế giới ảo này, khiến người chơi hoàn toàn bị mê hoặc và quên đi ranh giới giữa thực và ảo.",
    "Game mang lại những khoảnh khắc đáng nhớ...",
    "Game mang lại những khoảnh khắc đáng nhớ...",

  ];

  const [newComment, setNewComment] = useState("");
  const [featuredFilter, setFeaturedFilter] = useState("Tất cả");
  const [hoveredFeaturedId, setHoveredFeaturedId] = useState(null);
  const [isFeaturedCtaHovered, setIsFeaturedCtaHovered] = useState(false);

  const featuredTabs = [
    "Tất cả",
    "Quy hoạch",
    "Quy hoạch đô thị",
    "Thiết kế công trình",
    "Thiết kế đô thị",
    "Quy hoạch nông thôn",
  ];

  // Lấy 6 dự án gần nhất từ projects.json
  const allProjectsArr = Object.values(projectsData)
    .sort((a, b) => b.id - a.id); // id lớn nhất là mới nhất
  const featuredProjects = allProjectsArr.slice(0, 6).map((p) => ({
    id: p.id,
    title: p.title,
    location: p.location || "Việt Nam", // fallback nếu không có location
    year: p.year || "2026", // fallback nếu không có year
    category:
      p.category === "quy-hoach-do-thi"
        ? "Quy hoạch đô thị"
        : p.category === "thiet-ke-cong-trinh"
        ? "Thiết kế công trình"
        : p.category === "thiet-ke-canh-quan"
        ? "Thiết kế cảnh quan"
        : p.category === "ha-tang-ky-thuat"
        ? "Hạ tầng kỹ thuật"
        : p.category === "quy-hoach-nong-thon"
        ? "Quy hoạch nông thôn"
        : "Khác",
    image: Array.isArray(p.images) && p.images.length > 0 ? p.images[0] : p.avatar,
  }));

  const visibleFeaturedProjects =
    featuredFilter === "Tất cả"
      ? featuredProjects
      : featuredProjects.filter((project) => project.category === featuredFilter);

  // hàm render 1 cột
  const renderColumn = (comments) => (
    <div className="column">
      {comments.map((text, i) => (
        <div key={i} className="comment">
          @decaf
          <br />
          {text}
        </div>
      ))}
    </div>
  );

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setCommentsColumn1([...commentsColumn1, newComment]);
    setNewComment(""); // clear textarea
  };

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // ===== TAB MENU =====
    const buttons = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    const handleTabClick = (btn) => {
      if (!btn || !btn.dataset?.tab) return;
      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");

      const tabContent = document.getElementById(btn.dataset.tab);
      if (tabContent) tabContent.classList.add("active");
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => handleTabClick(btn));
    });

    // ===== CHARACTER CARD =====
    const cards = document.querySelectorAll(".character-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        if (!card.classList.contains("active")) {
          const hoverImg = card.querySelector("img.hover");
          if (hoverImg) {
            card.style.width = hoverImg.naturalWidth + "px";
            card.style.height = hoverImg.naturalHeight + "px";
          }
          card.classList.add("show-overlay");
        }
      });

      card.addEventListener("mouseleave", () => {
        if (!card.classList.contains("active")) {
          const defaultImg = card.querySelector("img.default");
          if (defaultImg) {
            card.style.width = defaultImg.naturalWidth + "px";
            card.style.height = defaultImg.naturalHeight + "px";
          }
          card.classList.remove("show-overlay");
        }
      });

      card.addEventListener("click", () => {
        const isActive = card.classList.contains("active");
        cards.forEach((c) => {
          c.classList.remove("active");
          c.classList.remove("show-overlay");
          const defaultImg = c.querySelector("img.default");
          if (defaultImg) {
            c.style.width = defaultImg.naturalWidth + "px";
            c.style.height = defaultImg.naturalHeight + "px";
          }
        });
        if (!isActive) {
          card.classList.add("active", "show-overlay");
          const hoverImg = card.querySelector("img.hover");
          if (hoverImg) {
            card.style.width = hoverImg.naturalWidth + "px";
            card.style.height = hoverImg.naturalHeight + "px";
          }
        }
      });
    });

    // ===== INIT CHARACTER SIZE =====
    const setDefaultSize = () => {
      document.querySelectorAll(".character-card").forEach((card) => {
        const defaultImg = card.querySelector("img.default");
        if (defaultImg) {
          card.style.width = defaultImg.naturalWidth + "px";
          card.style.height = defaultImg.naturalHeight + "px";
        }
      });
    };

    if (document.readyState === "complete") {
      setDefaultSize();
    } else {
      window.addEventListener("load", setDefaultSize);
    }

    // ===== COUNTDOWN =====
    const targetDate = new Date("Sep 15, 2025 20:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", setDefaultSize);
    };
  }, []);


  return (
    <Router>
      <div className="index-page">
        {showLogo && <LogoAnimation onFinish={() => setShowLogo(false)} />}
        <Header />
        <Routes>

          <Route
            path="/"
            element={
              <>
                <section id="hero" className="hero section udi-home-hero" style={{ margin: 0, padding: 0 }}>
                  <div
                    className="udi-home-hero-bg"
                    style={{
                      backgroundImage: `url(${sxdbg1})`,
                    }}
                  >
                    <div className="udi-home-hero-overlay" />
                    <div className="udi-home-hero-container">
                      <div className="udi-home-hero-content">
                        <h1>
                          Kiến trúc <span className="udi-home-hero-accent">Bền vững</span>
                          <br />
                          Quy hoạch <span className="udi-home-hero-accent">Tương lai</span>
                        </h1>
                        <p>
                          Đồng hành cùng sự phát triển của địa phương, tạo dựng không gian sống chất lượng cao
                          với tầm nhìn dài hạn và trách nhiệm xã hội.
                        </p>
                        <div className="udi-home-hero-actions">
                          <Link to="/Project" className="udi-hero-btn udi-hero-btn-primary">
                            Khám phá dự án
                          </Link>
                          <Link to="/About" className="udi-hero-btn udi-hero-btn-outline">
                            Xem năng lực
                          </Link>
                        </div>
                      </div>

                      <div className="udi-home-hero-stats" aria-label="Thong ke noi bat">
                        <div>
                          <strong>15+</strong>
                          <span>Năm kinh nghiệm</span>
                        </div>
                        <div>
                          <strong>200+</strong>
                          <span>Dự án</span>
                        </div>
                        <div>
                          <strong>50+</strong>
                          <span>Tỉnh thành</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  id="about"
                  className="about section"
                  style={{
                    width: "100%",
                    background: "#f3f3f3",
                    padding: "clamp(40px, 6vw, 72px) clamp(16px, 4vw, 44px)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "1220px",
                      margin: "0 auto",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        marginBottom: "clamp(8px, 1.3vw, 12px)",
                        textTransform: "uppercase",
                        letterSpacing: "1.4px",
                        fontSize: "clamp(11px, 1.1vw, 14px)",
                        fontWeight: 500,
                        color: "#667085",
                      }}
                    >
                      Lĩnh vực hoạt động
                    </p>

                    <h2
                      style={{
                        margin: 0,
                        color: "#0b203d",
                        fontFamily: "\"Times New Roman\", Times, serif",
                        fontWeight: 700,
                        fontSize: "clamp(32px, 5vw, 52px)",
                        lineHeight: 1.05,
                      }}
                    >
                      Ba trụ cột
                      <br />
                      Năng lực cốt lõi
                    </h2>

                    <div
                      style={{
                        marginTop: "clamp(24px, 4vw, 48px)",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "clamp(14px, 2vw, 24px)",
                      }}
                    >
                      {[
                        {
                          icon: "bi-compass",
                          title: "Quy hoạch vùng - đô thị",
                          desc: "Tư vấn lập quy hoạch vùng, quy hoạch tỉnh, quy hoạch phân khu và quy hoạch chi tiết các khu đô thị mới, khu dân cư, khu công nghiệp với tầm nhìn phát triển bền vững.",
                        },
                        {
                          icon: "bi-rulers",
                          title: "Thiết kế kiến trúc - công trình",
                          desc: "Thiết kế kiến trúc công trình công cộng, hạ tầng kỹ thuật, thiết kế đô thị, cảnh quan đô thị với phong cách hiện đại, thân thiện môi trường và bản sắc địa phương.",
                        },
                        {
                          icon: "bi-graph-up-arrow",
                          title: "Nghiên cứu - Tư vấn chiến lược",
                          desc: "Nghiên cứu phát triển kinh tế - xã hội, tư vấn chiến lược phát triển đô thị, đánh giá tác động môi trường, ứng dụng công nghệ số trong quy hoạch và quản lý đô thị.",
                        },
                      ].map((item) => (
                        <article
                          key={item.title}
                          style={{
                            flex: "1 1 300px",
                            minWidth: "280px",
                            background: "#fff",
                            border: "1px solid #d9dee7",
                            borderRadius: "14px",
                            padding: "clamp(20px, 2.6vw, 28px)",
                          }}
                        >
                          <i
                            className={`bi ${item.icon}`}
                            style={{
                              fontSize: "24px",
                              color: "#0b203d",
                              display: "inline-block",
                              marginBottom: "18px",
                            }}
                            aria-hidden="true"
                          />

                          <h3
                            style={{
                              margin: 0,
                              color: "#0b203d",
                              fontSize: "clamp(21px, 2.1vw, 30px)",
                              lineHeight: 1.2,
                              fontFamily: "\"Times New Roman\", Times, serif",
                              fontWeight: 700,
                            }}
                          >
                            {item.title}
                          </h3>

                          <p
                            style={{
                              marginTop: "14px",
                              marginBottom: "20px",
                              color: "#3d4b5f",
                              lineHeight: 1.7,
                              fontSize: "clamp(14px, 1.1vw, 16px)",
                            }}
                          >
                            {item.desc}
                          </p>

                          <a
                            href="#"
                            style={{
                              color: "#0a7d63",
                              textDecoration: "none",
                              fontWeight: 600,
                              fontSize: "clamp(15px, 1.1vw, 17px)",
                              letterSpacing: "0.2px",
                            }}
                          >
                            Tìm hiểu thêm {"->"}
                          </a>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>

                <section
                  style={{
                    width: "100%",
                    backgroundColor: "#f3f4f6",
                    padding: "clamp(36px, 6vw, 64px) clamp(16px, 4vw, 40px)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "1220px",
                      margin: "0 auto",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        marginBottom: "clamp(22px, 3.5vw, 34px)",
                      }}
                    >
                      <h2
                        style={{
                          margin: 0,
                          color: "#071a34",
                          fontFamily: "\"Times New Roman\", Times, serif",
                          fontSize: "clamp(36px, 5vw, 52px)",
                          lineHeight: 0.95,
                          fontWeight: 700,
                        }}
                      >
                        Dự án
                        <br />
                        Tiêu biểu
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "10px",
                          justifyContent: "flex-start",
                        }}
                      >
                        {featuredTabs.map((tab) => {
                          const isActive = featuredFilter === tab;

                          return (
                            <button
                              key={tab}
                              type="button"
                              onClick={() => setFeaturedFilter(tab)}
                              style={{
                                border: "none",
                                borderRadius: "999px",
                                padding: "9px 16px",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: 1,
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                                background: isActive ? "#12a39a" : "#eef0f3",
                                color: isActive ? "#ffffff" : "#243247",
                              }}
                            >
                              {tab}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "clamp(16px, 2vw, 24px)",
                      }}
                    >
                      {visibleFeaturedProjects.map((project) => {
                        const isHovered = hoveredFeaturedId === project.id;

                        return (
                        <article
                          key={project.id}
                          onMouseEnter={() => setHoveredFeaturedId(project.id)}
                          onMouseLeave={() => setHoveredFeaturedId(null)}
                          style={{
                            background: "#fff",
                            borderRadius: "14px",
                            border: "1px solid #e2e6ec",
                            overflow: "hidden",
                            boxShadow: isHovered
                              ? "0 16px 34px rgba(13, 28, 56, 0.16)"
                              : "0 2px 10px rgba(13, 28, 56, 0.04)",
                            transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                            transition: "transform .25s ease, box-shadow .25s ease",
                          }}
                        >
                          <div style={{ position: "relative" }}>
                            <img
                              src={project.image}
                              alt={project.title}
                              style={{
                                width: "100%",
                                height: "196px",
                                objectFit: "cover",
                                display: "block",
                                transform: isHovered ? "scale(1.05)" : "scale(1)",
                                transition: "transform .35s ease",
                              }}
                            />

                            <span
                              style={{
                                position: "absolute",
                                top: "12px",
                                left: "12px",
                                borderRadius: "999px",
                                padding: "5px 11px",
                                fontSize: "11px",
                                fontWeight: 700,
                                color: "#fff",
                                background: "#0ea5a0",
                                boxShadow: isHovered
                                  ? "0 8px 18px rgba(14, 165, 160, 0.34)"
                                  : "none",
                                transition: "box-shadow .25s ease",
                              }}
                            >
                              {project.category}
                            </span>
                          </div>

                          <div style={{ padding: "16px 18px 15px" }}>
                            <h3
                              style={{
                                margin: 0,
                                color: isHovered ? "#0d8f89" : "#0e1f38",
                                fontSize: "clamp(14px, 1.05vw, 22px)",
                                lineHeight: 1.32,
                                fontFamily: "system-ui, -apple-system, \"Segoe UI\", sans-serif",
                                fontWeight: 700,
                                transition: "color .25s ease",
                              }}
                            >
                              {project.title}
                            </h3>

                            <div
                              style={{
                                marginTop: "10px",
                                display: "flex",
                                gap: "12px",
                                flexWrap: "wrap",
                                alignItems: "center",
                                color: "#55657d",
                                fontSize: "13px",
                              }}
                            >
                              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                                <i className="bi bi-geo-alt" aria-hidden="true" />
                                {project.location}
                              </span>
                              <span>{project.year}</span>
                            </div>
                          </div>
                        </article>
                        );
                      })}
                    </div>

                    <div style={{ textAlign: "center", marginTop: "clamp(26px, 4vw, 38px)" }}>
                      <Link
                        to="/Project"
                        onMouseEnter={() => setIsFeaturedCtaHovered(true)}
                        onMouseLeave={() => setIsFeaturedCtaHovered(false)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "13px 28px",
                          borderRadius: "999px",
                          textDecoration: "none",
                          background: isFeaturedCtaHovered ? "#0d2a52" : "#091a36",
                          color: "#fff",
                          fontWeight: 700,
                          letterSpacing: "0.2px",
                          boxShadow: isFeaturedCtaHovered
                            ? "0 14px 28px rgba(9, 26, 54, 0.34)"
                            : "0 8px 20px rgba(9, 26, 54, 0.2)",
                          transform: isFeaturedCtaHovered ? "translateY(-2px)" : "translateY(0)",
                          transition: "all .22s ease",
                        }}
                      >
                        Xem tất cả dự án <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* ===== DẤU ẤN TOÀN QUỐC ===== */}
                <section
                  id="nationwide-footprint"
                  style={{
                    background: "#f1f1f1",
                    width: "100%",
                    padding: "clamp(40px, 6vw, 64px) clamp(16px, 3.2vw, 26px)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "1140px",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    <h2
                      style={{
                        margin: 0,
                        color: "#091d3a",
                        fontFamily: "\"Times New Roman\", Times, serif",
                        fontSize: "clamp(34px, 6vw, 62px)",
                        lineHeight: 0.96,
                        fontWeight: 700,
                        letterSpacing: "0.2px",
                      }}
                    >
                      Dấu ấn trên
                      <br />
                      Toàn quốc
                    </h2>

                    <p
                      style={{
                        margin: "clamp(14px, 2.5vw, 22px) auto 0",
                        color: "#263750",
                        maxWidth: "760px",
                        fontSize: "clamp(14px, 1.5vw, 30px)",
                        lineHeight: 1.6,
                      }}
                    >
                      Với hơn 200 dự án được triển khai tại 50+ tỉnh thành, chúng tôi tự hào đồng hành
                      cùng sự phát triển của các địa phương trên khắp cả nước.
                    </p>

                    <div
                      style={{
                        marginTop: "clamp(26px, 4vw, 40px)",
                        borderRadius: "22px",
                        background: "#dce7e6",
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5)",
                        minHeight: "clamp(420px, 62vw, 610px)",
                        position: "relative",
                        overflow: "hidden",
                        padding: "clamp(18px, 2vw, 24px)",
                      }}
                    >
                      <svg
                        viewBox={vietnamMapSvg.viewBox}
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: "52%",
                          top: "49%",
                          width: "clamp(260px, 36vw, 420px)",
                          height: "clamp(400px, 56vw, 560px)",
                          transform: "translate(-50%, -50%)",
                          opacity: 0.72,
                          filter: "blur(5px)",
                        }}
                      >
                        <path fill="#aebbbb" d={vietnamMapSvg.path} />
                      </svg>

                      {[
                        { top: "22%", left: "50.5%", value: "15", big: true },
                        { top: "18%", left: "57.5%", value: "8" },
                        { top: "20.5%", left: "63.5%", value: "12" },
                        { top: "21.2%", left: "48.2%", value: "45" },
                        { top: "26.2%", left: "58.5%", value: "18" },
                        { top: "34.5%", left: "45.5%", value: "22" },
                        { top: "41.5%", left: "43%", value: "16" },
                        { top: "58.5%", left: "51.5%", value: "14" },
                        { top: "56.5%", left: "55%", value: "28" },
                        { top: "67%", left: "54%", value: "10" },
                        { top: "74%", left: "56.5%", value: "19" },
                        { top: "88.5%", left: "49.5%", value: "52", big: true },
                        { top: "86%", left: "55%", value: "20" },
                        { top: "90.8%", left: "58%", value: "11" },
                        { top: "93%", left: "43%", value: "17" },
                      ].map((pin) => (
                        <div
                          key={`${pin.top}-${pin.left}-${pin.value}`}
                          style={{
                            position: "absolute",
                            top: pin.top,
                            left: pin.left,
                            transform: "translate(-50%, -50%)",
                            pointerEvents: "none",
                          }}
                        >
                          <div
                            style={{
                              width: pin.big ? "20px" : "16px",
                              height: pin.big ? "20px" : "16px",
                              borderRadius: "999px",
                              background: "#0d9a96",
                              border: "3px solid #e7ffff",
                              boxShadow: "0 0 0 2px rgba(13,154,150,0.35)",
                            }}
                          />
                          <span
                            style={{
                              position: "absolute",
                              left: "70%",
                              top: "-7px",
                              borderRadius: "999px",
                              background: "#ff7a18",
                              color: "#fff",
                              fontSize: "10px",
                              fontWeight: 700,
                              lineHeight: 1,
                              padding: "4px 5px",
                              boxShadow: "0 3px 8px rgba(255,122,24,0.35)",
                            }}
                          >
                            {pin.value}
                          </span>
                        </div>
                      ))}

                      <div
                        style={{
                          position: "absolute",
                          left: "clamp(20px, 2.6vw, 34px)",
                          bottom: "clamp(20px, 2.6vw, 30px)",
                          width: "clamp(185px, 24vw, 220px)",
                          background: "#ffffff",
                          borderRadius: "16px",
                          boxShadow: "0 12px 26px rgba(17, 33, 50, 0.12)",
                          padding: "18px 16px 14px",
                          textAlign: "left",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                            color: "#10243e",
                            fontWeight: 700,
                            fontSize: "clamp(14px, 1vw, 16px)",
                          }}
                        >
                          <i className="bi bi-geo-alt-fill" style={{ color: "#189b96", fontSize: "14px" }} aria-hidden="true" />
                          Dấu ấn toàn quốc
                        </div>

                        <div style={{ marginTop: "14px", display: "grid", gap: "10px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span
                              style={{
                                width: "34px",
                                height: "34px",
                                borderRadius: "999px",
                                background: "#0f9b95",
                                color: "#fff",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 700,
                              }}
                            >
                              15
                            </span>
                            <div>
                              <div style={{ fontWeight: 700, color: "#1a2f48", lineHeight: 1.05 }}>Tỉnh thành</div>
                              <div style={{ fontSize: "12px", color: "#77859a" }}>Đã triển khai</div>
                            </div>
                          </div>

                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span
                              style={{
                                width: "34px",
                                height: "34px",
                                borderRadius: "999px",
                                background: "#ff7a18",
                                color: "#fff",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 700,
                              }}
                            >
                              307
                            </span>
                            <div>
                              <div style={{ fontWeight: 700, color: "#1a2f48", lineHeight: 1.05 }}>Dự án</div>
                              <div style={{ fontSize: "12px", color: "#77859a" }}>Hoàn thành</div>
                            </div>
                          </div>
                        </div>

                        <div
                          style={{
                            marginTop: "10px",
                            borderTop: "1px solid #e8edf2",
                            paddingTop: "10px",
                            fontSize: "11px",
                            color: "#6f7f94",
                          }}
                        >
                          <div style={{ marginBottom: "7px" }}>Quy mô dự án:</div>
                          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                              <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#19a09a" }} />
                              {'<'}20
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                              <span style={{ width: "14px", height: "14px", borderRadius: "999px", background: "#14958f" }} />
                              20-40
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                              <span style={{ width: "18px", height: "18px", borderRadius: "999px", background: "#0d8f89" }} />
                              {'>'}40
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


                

                <section
                  style={{
                    width: "100%",
                    backgroundColor: "#0f1f45",
                    backgroundImage:
                      "radial-gradient(circle at 20% 18%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 32%), radial-gradient(circle at 82% 70%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 36%), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 24px), radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(180deg, #1b2f5d 0%, #0e1f45 100%)",
                    backgroundSize: "100% 100%, 100% 100%, 24px 24px, 24px 24px, 24px 24px, 24px 24px, 100% 100%",
                    backgroundPosition: "center, center, 0 0, 0 0, 0 0, 12px 12px, center",
                    minHeight: "clamp(250px, 30vw, 340px)",
                    padding: "clamp(42px, 7vw, 68px) clamp(14px, 3vw, 28px)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -18px 30px rgba(0,0,0,0.16)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "1220px",
                      margin: "0 auto",
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                      gap: "clamp(16px, 2.6vw, 34px)",
                      alignItems: "center",
                    }}
                  >
                    {[
                      { icon: "bi-clock", value: "15+", label: "Năm kinh nghiệm" },
                      { icon: "bi-building", value: "200+", label: "Dự án hoàn thành" },
                      { icon: "bi-geo-alt", value: "50+", label: "Tỉnh thành" },
                      { icon: "bi-people", value: "100+", label: "Chuyên gia" },
                    ].map((item) => (
                      <div key={item.label} style={{ textAlign: "center", color: "#fff" }}>
                        <i
                          className={`bi ${item.icon}`}
                          aria-hidden="true"
                          style={{
                            color: "#f2b321",
                            fontSize: "clamp(24px, 2.2vw, 30px)",
                            lineHeight: 1,
                            display: "inline-block",
                            marginBottom: "clamp(10px, 1.4vw, 14px)",
                          }}
                        />
                        <div
                          style={{
                            fontSize: "clamp(48px, 5.4vw, 64px)",
                            fontWeight: 700,
                            lineHeight: 1,
                            letterSpacing: "0.4px",
                            textShadow: "0 4px 10px rgba(0,0,0,0.22)",
                          }}
                        >
                          {item.value}
                        </div>
                        <div
                          style={{
                            marginTop: "8px",
                            fontSize: "clamp(14px, 1.2vw, 22px)",
                            color: "rgba(255,255,255,0.9)",
                          }}
                        >
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>


              </>
            }
          />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/projects/:id" element={<ProjectProfile />} />
          
          <Route path="/projects/gatton-park" element={<ProjectDetails />} />
          
          <Route path="/About" element={<About />} />
          <Route path="/ban-lanh-dao" element={<LeadershipPage />} />
          <Route path="/quy-hoach-do-thi" element={<ProjectCategory category="quy-hoach-do-thi" title="QUY HOẠCH ĐÔ THỊ" />} />
          <Route path="/thiet-ke-cong-trinh" element={<ProjectCategory category="thiet-ke-cong-trinh" title="THIẾT KẾ CÔNG TRÌNH" />} />
          <Route path="/ha-tang-ky-thuat" element={<ProjectCategory category="ha-tang-ky-thuat" title="HẠ TẦNG KỸ THUẬT" />} />
          <Route path="/thiet-ke-canh-quan" element={<ProjectCategory category="thiet-ke-canh-quan" title="THIẾT KẾ CẢNH QUAN" />} />
          <Route
            path="/phong-tong-hop"
            element={<ManageSectionPage title="Phòng tổng hợp" storageKey="phong-tong-hop" members={sectionMembers.phongTongHop} />}
          />
          <Route
            path="/trung-tam-thiet-ke-do-thi"
            element={<ManageSectionPage title="Trung tâm thiết kế đô thị" storageKey="trung-tam-thiet-ke-do-thi" members={sectionMembers.thietKeDoThi} />}
          />
          <Route
            path="/trung-tam-quy-hoach-do-thi"
            element={<ManageSectionPage title="Trung tâm quy hoạch đô thị" storageKey="trung-tam-quy-hoach-do-thi" members={sectionMembers.quyHoachDoThi} />}
          />
          <Route
            path="/trung-tam-thiet-ke-cong-trinh"
            element={<ManageSectionPage title="Trung tâm thiết kế công trình" storageKey="trung-tam-thiet-ke-cong-trinh" members={sectionMembers.thietKeCongTrinh} />}
          />
          <Route
            path="/trung-tam-ha-tang-ky-thuat"
            element={<ManageSectionPage title="Trung tâm hạ tầng kỹ thuật" storageKey="trung-tam-ha-tang-ky-thuat" members={sectionMembers.haTangKyThuat} />}
          />
          
          <Route path="/Achievement" element={<Achievement />} />
          <Route path="/achievement/:id" element={
            <Suspense fallback={<div>Loading...</div>}>
              <AwardDetail />
            </Suspense>
          } />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        
        {/* ===== FOOTER ===== */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
