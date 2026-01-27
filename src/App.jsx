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
import Details from "./components/Deatails";
import ProjectDetails from "./components/ProjectDetails";
import Login from "./signup-in/Login";
import Newsletter from "./components/Newsletter";
import Register from "./signup-in/Register";
import About from "./components/About";
import Profile from "./components/Profile";
import LeadershipPage from "./components/LeadershipPage";
import ManageSectionPage from "./components/ManageSectionPage";
import UrbanPlanningPage from "./components/UrbanPlanningPage";
import ProjectDesignPage from "./components/ProjectDesignPage";
import InfrastructurePage from "./components/InfrastructurePage";
import LandscapeDesignPage from "./components/LandscapeDesignPage";

import "./style/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flag-icons/css/flag-icons.min.css'

import heroBg from "./assets/img/sxd-bg.png";

import sxdbg1 from "./assets/img/sxd-ab1.png"
import sxdbg2 from "./assets/img/sxd-ab2.png"
import sxdbg3 from "./assets/img/sxd-ab3.png"
import sxdbg4 from "./assets/img/sxd-ab4.png"

import event1 from "./assets/img/lucarly-08.png";
import event2 from "./assets/img/lucarly-02.png";
import event3 from "./assets/img/lucarly-01.png";
import event4 from "./assets/img/kram-11.png";

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


const eventImages = [event1, event2, event3, event4];

function App({ characters }) {
  const [showLogo, setShowLogo] = useState(true);
  const charactersList = [
    { 
      id: 1,
      name: "Anna Cawrse", 
      image: banThan2,
      title: "Chair of Landscape Architecture, Civil Engineering, & Ecology",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 2,
      name: "Zachary Chrisco", 
      image: banThan3,
      title: "Chair At-Large",
      subtitle: "Board of Directors, Principal",
      role: "Civil Engineer"
    },
    { 
      id: 3,
      name: "Caitlyn Clauson", 
      image: banThan4,
      title: "President",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 4,
      name: "Meredith McCarthy", 
      image: banThan5,
      title: "Chair At-Large",
      subtitle: "Associate Principal, Board of Directors",
      role: "Architect"
    },
    { 
      id: 5,
      name: "Tyler Patrick", 
      image: banThan6,
      title: "Chair of Planning & Urban Design",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 6,
      name: "Pablo Savid-Buteler", 
      image: banThan7,
      title: "Chair of Design Integration",
      subtitle: "Board of Directors, Principal",
      role: "Designer"
    },
    { 
      id: 7,
      name: "Victor Vizgaitis", 
      image: banThan8,
      title: "Managing Principal",
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
      name: "Carla Ceruzzi", 
      image: banThan10,
      title: "Associate Principal",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 10,
      name: "Fiske Crowell", 
      image: banThan11,
      title: "Principal",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 11,
      name: "Ian Dickenson", 
      image: banThan12,
      title: "Associate Principal",
      subtitle: "Architect",
      role: ""
    },
    { 
      id: 12,
      name: "Philip Dugdale", 
      image: banThan13,
      title: "New York Office Director",
      subtitle: "Principal",
      role: "Architect"
    },
    { 
      id: 13,
      name: "Anna Cawrse", 
      image: banThan14,
      title: "Chair of Landscape Architecture",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 14,
      name: "Zachary Chrisco", 
      image: banThan15,
      title: "Chair At-Large",
      subtitle: "Board of Directors, Principal",
      role: "Civil Engineer"
    },
    { 
      id: 15,
      name: "Caitlyn Clauson", 
      image: banThan16,
      title: "President",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 16,
      name: "Meredith McCarthy", 
      image: banThan17,
      title: "Chair At-Large",
      subtitle: "Associate Principal",
      role: "Architect"
    },
    { 
      id: 17,
      name: "Tyler Patrick", 
      image: banThan18,
      title: "Chair of Planning & Urban Design",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 18,
      name: "Pablo Savid-Buteler", 
      image: banThan19,
      title: "Chair of Design Integration",
      subtitle: "Board of Directors, Principal",
      role: "Designer"
    },
    { 
      id: 19,
      name: "Victor Vizgaitis", 
      image: banThan20,
      title: "Managing Principal",
      subtitle: "Board of Directors",
      role: "Landscape Architect"
    },
    { 
      id: 20,
      name: "Joshua Brooks", 
      image: banThan21,
      title: "Denver Office Director",
      subtitle: "Principal",
      role: "Landscape Architect"
    },
    { 
      id: 21,
      name: "Carla Ceruzzi", 
      image: banThan22,
      title: "Associate Principal",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 22,
      name: "Fiske Crowell", 
      image: banThan23,
      title: "Principal",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 23,
      name: "Ian Dickenson", 
      image: banThan24,
      title: "Associate Principal",
      subtitle: "Architect",
      role: ""
    },
    { 
      id: 24,
      name: "Philip Dugdale", 
      image: banThan25,
      title: "New York Office Director",
      subtitle: "Principal",
      role: "Architect"
    },
    { 
      id: 25,
      name: "Anna Cawrse", 
      image: banThan26,
      title: "Chair of Landscape Architecture",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 26,
      name: "Zachary Chrisco", 
      image: banThan27,
      title: "Chair At-Large",
      subtitle: "Board of Directors, Principal",
      role: "Civil Engineer"
    },
    { 
      id: 27,
      name: "Caitlyn Clauson", 
      image: banThan28,
      title: "President",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 28,
      name: "Meredith McCarthy", 
      image: banThan29,
      title: "Chair At-Large",
      subtitle: "Associate Principal",
      role: "Architect"
    },
    { 
      id: 29,
      name: "Tyler Patrick", 
      image: banThan30,
      title: "Chair of Planning & Urban Design",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 30,
      name: "Pablo Savid-Buteler", 
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
                <section id="hero" className="hero section" style={{ margin: 0, padding: 0 }}>
                  <div
                    className="parallax-window fullscreen hero-flex"
                    style={{
                      width: "100%",
                      height: "420px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      backgroundImage: `url(${heroBg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* dark overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.45)",
                        zIndex: 1,
                      }}
                    />

                    <div className="container hero-container" style={{ zIndex: 2 }}>
                      <div className="hero-main" style={{ textAlign: "center" }}>

                        {/* WRAPPER — QUAN TRỌNG */}
                        <div style={{ display: "inline-block", textAlign: "center" }}>

                          <h1
                            style={{
                              color: "#fff",
                              fontFamily: "'Times New Roman', Times, serif",
                              fontSize: "64px",
                              margin: 0,
                              marginBottom: "4px",
                              letterSpacing: "6px",
                              fontWeight: 400,
                              lineHeight: "1.1",
                              whiteSpace: "nowrap",
                            }}
                          >
                            ABOUT US!
                          </h1>

                          {/* GẠCH THẲNG NGAY DƯỚI CHỮ */}
                          <span
                            style={{
                              display: "block",
                              width: "300px",
                              height: "6px",
                              margin: "0 auto",        // luôn nằm giữa
                              background: "#fff",
                              opacity: 0.95,
                              marginBottom: "25px",
                            }}
                          />

                          <div style={{
                            color: "#fff",
                            fontFamily: "'Times New Roman', Times, serif",
                          }}>
                            <div style={{ fontSize: 18 }}>VIỆN NGHIÊN CỨU THIẾT KẾ ĐÔ THỊ ( URBAN DESIGN INSTITUTE - UDI)</div>
                            <div>Viện nghiên cứu thiết kế đô thị (UDI) là tổ chức Nhà nước có chức năng nghiên cứu, thiết kế đô thị, biên soạn tài liệu pháp lý, cung cấp tư vấn quy hoạch, hợp tác quốc tế, thực hiện dự án khoa học và đào tạo nhân lực cho VIUP. Với hơn 50 chuyên gia giàu kinh nghiệm, UDI cam kết mang lại giá trị thực sự cho khách hàng.

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </section>

                <section
                  id="about"
                  className="about section"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "80vh",
                    padding: "0",
                    background: "#f9f9f9",
                  }}
                >
                  {/* Trái: Hình ảnh */}
                  <div style={{ flex: 1 }}>
                    <img
                      src={sxdbg2}
                      alt="Urban development"
                      style={{
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Giữa: Nội dung */}
                  <div
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "0 40px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        marginBottom: "16px",
                        letterSpacing: "1px",
                        color: "#333",
                      }}
                    >
                      PROJECTS CỦA CHÚNG TÔI
                    </h2>

                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.6",
                        color: "#5555558c",
                      }}
                    >
                      Projects của chúng tôi mang đến cho khách hàng những trải nghiệm
                      hài lòng nhất với sự tự tin về chất lượng nhân sự hoạt động trong
                      lĩnh vực.
                    </p>
                  </div>

                  {/* Phải: Hình ảnh */}
                  <div style={{ flex: 1 }}>
                    <img
                      src={sxdbg1}
                      alt="Interior view"
                      style={{
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </section>

                <section
                  style={{
                    width: "100%",
                    padding: "40px 0",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "40px",
                      width: "100%",
                    }}
                  >
                    {[
                      "QUY HOẠCH",
                      "THIẾT KẾ",
                      "HẠ TẦNG KỸ THUẬT",
                    ].map((text, i) => (
                      <div
                        key={i}
                        style={{
                          width: "30%",
                          height: "160px",
                          backgroundColor: "#fff",
                          border: "1px solid #e5e5e5",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontFamily: "'Times New Roman', Times, serif",
                          fontSize: "20px",
                          letterSpacing: "1px",
                          color: "#2c2c2c",
                        }}
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </section>

                {/* ===== STATS ===== */}
                <section
                  id="stats"
                  className="stats"
                  style={{
                    backgroundImage: `url(${sxdbg3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "70vh",                 // chiều cao giống ảnh
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",       // canh giữa theo chiều dọc
                    alignItems: "center",           // canh giữa theo chiều ngang
                    color: "#fff",
                    textAlign: "center",
                    padding: "0 20px",
                  }}
                >
                  {/* TIÊU ĐỀ LỚN */}
                  <h2
                    style={{
                      fontFamily: "'Times New Roman', serif",
                      fontSize: "60px",
                      fontWeight: "600",
                      marginBottom: "15px",
                      borderBottom: "3px solid #fff", // gạch dưới như ảnh
                      paddingBottom: "5px",
                      display: "inline-block",
                    }}
                  >
                    ACHIEVEMENT AWARDS!
                  </h2>

                  {/* TIÊU ĐỀ NHỎ */}
                  <p
                    style={{
                      fontFamily: "'Times New Roman', serif",
                      fontSize: "18px",
                      marginTop: "10px",
                      letterSpacing: "2px",
                    }}
                  >
                    THE VIEWS
                  </p>
                </section>

                <section
                  id="stats"
                  style={{
                    background: "#f7f7f7",
                    padding: "60px 0",
                    width: "100%",
                  }}
                >
                  <div className="container">
                    <div className="row" style={{ margin: 0, padding: 0 }}>

                      {/* CARD 1 */}
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div
                          style={{
                            background: "#fff",
                            padding: "35px 30px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                            minHeight: "320px",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "'Times New Roman', serif",
                              fontSize: "20px",
                              lineHeight: "1.5",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              textDecoration: "underline",
                              textUnderlineOffset: "3px",
                            }}
                          >
                            Các giải thưởng của hội quy hoạch và phát triển đô thị Việt Nam
                          </h3>
                          <p style={{ marginTop: "20px", color: "#555", lineHeight: "1.7", fontSize: "15px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                          </p>
                        </div>
                      </div>

                      {/* CARD 2 */}
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div
                          style={{
                            background: "#fff",
                            padding: "35px 30px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                            minHeight: "320px",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "'Times New Roman', serif",
                              fontSize: "20px",
                              lineHeight: "1.5",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              textDecoration: "underline",
                              textUnderlineOffset: "3px",
                            }}
                          >
                            Các giải thưởng của hội kiến trúc sư Việt Nam
                          </h3>
                          <p style={{ marginTop: "20px", color: "#555", lineHeight: "1.7", fontSize: "15px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                          </p>
                        </div>
                      </div>

                      {/* CARD 3 */}
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div
                          style={{
                            background: "#fff",
                            padding: "35px 30px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                            minHeight: "320px",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "'Times New Roman', serif",
                              fontSize: "20px",
                              lineHeight: "1.5",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              textDecoration: "underline",
                              textUnderlineOffset: "3px",
                            }}
                          >
                            Các giải thưởng trong các cuộc thi quốc tế về thiết kế ý tưởng
                          </h3>
                          <p style={{ marginTop: "20px", color: "#555", lineHeight: "1.7", fontSize: "15px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                          </p>
                        </div>
                      </div>

                      {/* CARD 4 */}
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <div
                          style={{
                            background: "#fff",
                            padding: "35px 30px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                            minHeight: "320px",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "'Times New Roman', serif",
                              fontSize: "20px",
                              lineHeight: "1.5",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              textDecoration: "underline",
                              textUnderlineOffset: "3px",
                            }}
                          >
                            Các ấn phẩm đã được xuất bản của viện thiết kế (Publications)
                          </h3>
                          <p style={{ marginTop: "20px", color: "#555", lineHeight: "1.7", fontSize: "15px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>


                {/* SƠ ĐỒ CẤU TỔ CHỨC */}
                <section
                  id="organization-chart"
                  className="organization-chart section"
                  style={{
                    background: "#fff",
                    padding: "60px 0",
                  }}
                >
                  <div className="container">
                    <h2
                      style={{
                        fontFamily: "'Times New Roman', serif",
                        fontSize: "34px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      SƠ ĐỒ CẤU TỔ CHỨC VIỆN
                    </h2>

                    <h4
                      style={{
                        fontFamily: "'Times New Roman', serif",
                        fontSize: "16px",
                        marginBottom: "40px",
                        textAlign: "center",
                        color: "#666",
                      }}
                    >
                      COMPANY'S ORGANIZATION STRUCTURE CHART
                    </h4>

                    {/* Sơ đồ tổ chức */}
                    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px 20px" }}>
                      {/* BỘ XÂY DỰNG */}
                      <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <div style={{
                          display: "inline-block",
                          padding: "12px 30px",
                          border: "1px solid #333",
                          background: "#fff",
                        }}>
                          <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.5px" }}>BỘ XÂY DỰNG</div>
                          <div style={{ fontSize: "10px", color: "#666", marginTop: "3px" }}>MINISTRY OF CONSTRUCTION</div>
                        </div>
                        {/* Đường thẳng xuống */}
                        <div style={{ width: "1px", height: "40px", background: "#333", margin: "0 auto" }}></div>
                      </div>

                      {/* VIUP */}
                      <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <div style={{
                          display: "inline-block",
                          padding: "20px 40px",
                          border: "2px solid #333",
                          background: "#fff",
                        }}>
                          <div style={{ fontSize: "38px", fontWeight: "700", letterSpacing: "2px", marginBottom: "8px" }}>VIUP</div>
                          <div style={{ fontSize: "12px", fontWeight: "600", lineHeight: "1.4" }}>VIỆN QUY HOẠCH ĐÔ THỊ VÀ NÔNG THÔN QUỐC GIA</div>
                          <div style={{ fontSize: "10px", color: "#666", marginTop: "3px" }}>VIETNAM INSTITUTE FOR URBAN AND RURAL PLANNING</div>
                        </div>
                        {/* Đường thẳng xuống */}
                        <div style={{ width: "1px", height: "40px", background: "#333", margin: "0 auto" }}></div>
                      </div>

                      {/* UDI */}
                      <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <div style={{
                          display: "inline-block",
                          padding: "25px 50px",
                          border: "2px solid #333",
                          background: "#333",
                          color: "#fff",
                        }}>
                          <div style={{ fontSize: "42px", fontWeight: "700", letterSpacing: "3px", marginBottom: "8px" }}>UDI</div>
                          <div style={{ fontSize: "12px", fontWeight: "600", lineHeight: "1.4" }}>VIỆN NGHIÊN CỨU THIẾT KẾ ĐÔ THỊ</div>
                          <div style={{ fontSize: "10px", color: "#ddd", marginTop: "3px" }}>URBAN DESIGN INSTITUTE</div>
                        </div>
                        {/* Đường thẳng xuống */}
                        <div style={{ width: "1px", height: "40px", background: "#333", margin: "0 auto" }}></div>
                      </div>

                      {/* GIÁM ĐỐC VIỆN và HỘI ĐỒNG TƯ VẤN */}
                      <div style={{ position: "relative", marginBottom: "40px", minHeight: "110px", maxWidth: "900px", margin: "0 auto 40px auto" }}>
                        {/* Hội đồng tư vấn - bên trái */}
                        <div style={{ position: "absolute", left: "80px", top: "0" }}>
                          <div style={{
                            padding: "14px 20px",
                            border: "1px solid #333",
                            background: "#fff",
                            textAlign: "center",
                            width: "220px",
                          }}>
                            <div style={{ fontSize: "12px", fontWeight: "600" }}>HỘI ĐỒNG TƯ VẤN</div>
                            <div style={{ fontSize: "10px", color: "#666", marginTop: "3px" }}>ADVISORY COUNCIL</div>
                          </div>
                        </div>

                        {/* Đường kẻ ngang từ Hội đồng tư vấn đến Giám đốc */}
                        <div style={{
                          position: "absolute",
                          left: "300px",
                          top: "27px",
                          width: "calc(50% - 425px)",
                          height: "1px",
                          background: "#333",
                        }}></div>

                        {/* Giám đốc - ở giữa */}
                        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: "0" }}>
                          <div style={{
                            padding: "16px 25px",
                            border: "1px solid #333",
                            background: "#fff",
                            textAlign: "center",
                            width: "250px",
                          }}>
                            <div style={{ fontSize: "13px", fontWeight: "600" }}>GIÁM ĐỐC VIỆN</div>
                            <div style={{ fontSize: "11px", color: "#666", marginTop: "3px" }}>DIRECTOR</div>
                          </div>
                          {/* Đường thẳng xuống */}
                          <div style={{ width: "1px", height: "40px", background: "#333", margin: "0 auto" }}></div>
                        </div>
                      </div>

                      {/* CÁC PHÓ GIÁM ĐỐC */}
                      <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <div style={{
                          display: "inline-block",
                          padding: "14px 25px",
                          border: "1px solid #333",
                          background: "#fff",
                        }}>
                          <div style={{ fontSize: "12px", fontWeight: "600" }}>CÁC PHÓ GIÁM ĐỐC VIỆN</div>
                          <div style={{ fontSize: "10px", color: "#666", marginTop: "3px" }}>VICE DIRECTORS</div>
                        </div>
                        {/* Đường thẳng xuống */}
                        <div style={{ width: "1px", height: "25px", background: "#333", margin: "0 auto" }}></div>
                        {/* Đường ngang */}
                        <div style={{ width: "100%", height: "1px", background: "#333", margin: "0 auto", maxWidth: "900px" }}></div>
                        {/* 4 đường thẳng xuống */}
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 50px", maxWidth: "900px", margin: "0 auto" }}>
                          <div style={{ width: "1px", height: "25px", background: "#333" }}></div>
                          <div style={{ width: "1px", height: "25px", background: "#333" }}></div>
                          <div style={{ width: "1px", height: "25px", background: "#333" }}></div>
                          <div style={{ width: "1px", height: "25px", background: "#333" }}></div>
                        </div>
                      </div>

                      {/* CÁC TRUNG TÂM - HÀNG ĐẦU */}
                      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginBottom: "35px", position: "relative" }}>
                        {/* Phòng tổng hợp */}
                        <div style={{ flex: 1 }}>
                          <div style={{
                            padding: "16px 12px",
                            border: "1px solid #333",
                            background: "#fff",
                            textAlign: "center",
                            minHeight: "90px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}>
                            <div style={{ fontSize: "11px", fontWeight: "600", lineHeight: "1.4" }}>PHÒNG TỔNG HỢP</div>
                            <div style={{ fontSize: "9px", color: "#666", marginTop: "4px" }}>GENERAL OFFICE</div>
                          </div>
                        </div>

                        {/* Trung tâm quy hoạch */}
                        <div style={{ flex: 1 }}>
                          <div style={{
                            padding: "16px 12px",
                            border: "1px solid #333",
                            background: "#fff",
                            textAlign: "center",
                            minHeight: "90px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}>
                            <div style={{ fontSize: "11px", fontWeight: "600", lineHeight: "1.4" }}>TRUNG TÂM QUY HOẠCH XÂY DỰNG</div>
                            <div style={{ fontSize: "9px", color: "#666", marginTop: "4px" }}>CONSTRUCTION PLANNING CENTER</div>
                          </div>
                          {/* Đường thẳng xuống từ box này */}
                          <div style={{ width: "1px", height: "35px", background: "#333", margin: "0 auto" }}></div>
                        </div>

                        {/* Trung tâm thiết kế */}
                        <div style={{ flex: 1 }}>
                          <div style={{
                            padding: "16px 12px",
                            border: "1px solid #333",
                            background: "#fff",
                            textAlign: "center",
                            minHeight: "90px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}>
                            <div style={{ fontSize: "11px", fontWeight: "600", lineHeight: "1.4" }}>TRUNG TÂM THIẾT KẾ ĐÔ THỊ</div>
                            <div style={{ fontSize: "9px", color: "#666", marginTop: "4px" }}>URBAN DESIGN CENTER</div>
                          </div>
                        </div>
                      </div>

                      {/* CÁC TRUNG TÂM - HÀNG DƯỚI */}
                      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                        {/* Trung tâm kiến trúc cảnh quan */}
                        <div style={{ width: "31%" }}>
                          <div style={{
                            padding: "16px 12px",
                            border: "1px solid #333",
                            background: "#fff",
                            textAlign: "center",
                            minHeight: "90px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}>
                            <div style={{ fontSize: "11px", fontWeight: "600", lineHeight: "1.4" }}>TRUNG TÂM KIẾN TRÚC CẢNH</div>
                            <div style={{ fontSize: "11px", fontWeight: "600", lineHeight: "1.4" }}>QUAN VÀ MÔI TRƯỜNG ĐÔ THỊ</div>
                            <div style={{ fontSize: "9px", color: "#666", marginTop: "3px" }}>ARCHITECTURE DESIGN AND</div>
                            <div style={{ fontSize: "9px", color: "#666" }}>URBAN ENVIRONMENT CENTER</div>
                          </div>
                        </div>

                        {/* Trung tâm kỹ thuật hạ tầng */}
                        <div style={{ width: "31%" }}>
                          <div style={{
                            padding: "16px 12px",
                            border: "1px solid #333",
                            background: "#fff",
                            textAlign: "center",
                            minHeight: "90px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}>
                            <div style={{ fontSize: "11px", fontWeight: "600", lineHeight: "1.4" }}>TRUNG TÂM KỸ THUẬT HẠ TẦNG</div>
                            <div style={{ fontSize: "11px", fontWeight: "600", lineHeight: "1.4" }}>VÀ THUỶ LỢI ĐÔ THỊ</div>
                            <div style={{ fontSize: "9px", color: "#666", marginTop: "3px" }}>URBAN INFRASTRUCTURE AND</div>
                            <div style={{ fontSize: "9px", color: "#666" }}>ENGINEERING CENTER</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section style={{ width: "100%", textAlign: "center", padding: "60px 0 80px" }}>
                  {/* ======= 4 BLOCK STATS ======= */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      maxWidth: "1200px",
                      margin: "0 auto",
                      gap: "40px",
                      padding: "0 20px",
                    }}
                  >
                    {/* BLOCK 1 */}
                    <div>
                      <h2
                        style={{
                          fontSize: "32px",
                          fontWeight: 600,
                          marginBottom: "8px",
                          color: "#1b1b1b",
                          fontFamily: "serif",
                        }}
                      >
                        12+ years
                      </h2>
                      <p style={{ fontSize: "12px", letterSpacing: "2px", marginBottom: "12px", color: "#444" }}>
                        EXPERIENCE OF WORK
                      </p>
                      <div style={{ width: "80px", height: "2px", backgroundColor: "#C9B97E", margin: "0 auto" }} />
                    </div>

                    {/* BLOCK 2 */}
                    <div>
                      <h2
                        style={{
                          fontSize: "32px",
                          fontWeight: 600,
                          marginBottom: "8px",
                          color: "#1b1b1b",
                          fontFamily: "serif",
                        }}
                      >
                        50+
                      </h2>
                      <p style={{ fontSize: "12px", letterSpacing: "2px", marginBottom: "12px", color: "#444" }}>
                        EMPLOYEES
                      </p>
                      <div style={{ width: "80px", height: "2px", backgroundColor: "#C9B97E", margin: "0 auto" }} />
                    </div>

                    {/* BLOCK 3 */}
                    <div>
                      <h2
                        style={{
                          fontSize: "32px",
                          fontWeight: 600,
                          marginBottom: "8px",
                          color: "#1b1b1b",
                          fontFamily: "serif",
                        }}
                      >
                        20+
                      </h2>
                      <p style={{ fontSize: "12px", letterSpacing: "1px", marginBottom: "4px", color: "#444" }}>
                        Key Partners & Clients
                      </p>
                      <p style={{ fontSize: "12px", letterSpacing: "1px", marginBottom: "12px", color: "#444" }}>
                        UDI Partners & Friends
                      </p>
                      <div style={{ width: "80px", height: "2px", backgroundColor: "#C9B97E", margin: "0 auto" }} />
                    </div>

                    {/* BLOCK 4 */}
                    <div>
                      <h2
                        style={{
                          fontSize: "32px",
                          fontWeight: 600,
                          marginBottom: "8px",
                          color: "#1b1b1b",
                          fontFamily: "serif",
                        }}
                      >
                        1000+
                      </h2>
                      <p style={{ fontSize: "12px", letterSpacing: "2px", marginBottom: "12px", color: "#444" }}>
                        PROJECTS AND IDEAS AWARDS
                      </p>
                      <div style={{ width: "80px", height: "2px", backgroundColor: "#C9B97E", margin: "0 auto" }} />
                    </div>
                  </div>

                  {/* ======= LIGHT GREY DIVIDER (mũi đỏ trên cùng) ======= */}
                  <div
                    style={{
                      height: 18,
                      width: "100%",
                      background: "#f3f3f3",
                      marginTop: 34,
                      boxSizing: "border-box",
                    }}
                  />

                  {/* ======= BIG IMAGE BELOW ======= */}
                  <div style={{ width: "100%", marginTop: 40 }}>
                    <img
                      src={sxdbg4}
                      alt="udi sketch"
                      style={{
                        width: "100%",
                        maxWidth: "1200px",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </div>

                  {/* ======= LARGE GOLD HEADING (mũi đỏ thứ 2) ======= */}
                  <h2
                    style={{
                      marginTop: 30,
                      fontFamily: "serif",
                      fontSize: 40,
                      color: "#C9B97E",
                      letterSpacing: 2,
                      lineHeight: 1.1,
                      maxWidth: "1100px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    UDI MONG RẰNG ĐƯỢC ĐỒNG HÀNH CÙNG BẠN
                  </h2>

                  {/* ======= CTA BUTTON (mũi đỏ thứ 3) ======= */}
                  <div style={{ marginTop: 22 }}>
                    <a
                      href="#contact"
                      style={{
                        display: "inline-block",
                        padding: "10px 26px",
                        borderRadius: 24,
                        background: "linear-gradient(180deg,#4da6ff,#2188ff)",
                        color: "#fff",
                        textDecoration: "none",
                        fontWeight: 600,
                        boxShadow: "0 6px 18px rgba(33,136,255,0.18)",
                        transition: "transform .18s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                      LIÊN HỆ TRỰC TIẾP
                    </a>
                  </div>
                </section>


              </>
            }
          />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/projects/:id" element={<ProjectProfile />} />
          <Route path="/Deatails" element={<Details />} />
          <Route path="/projects/gatton-park" element={<ProjectDetails />} />
          <Route path="/Newsletter" element={<Newsletter />} />
          <Route path="/About" element={<About />} />
          <Route path="/ban-lanh-dao" element={<LeadershipPage />} />
          <Route path="/quy-hoach-do-thi" element={<UrbanPlanningPage />} />
          <Route path="/thiet-ke-cong-trinh" element={<ProjectDesignPage />} />
          <Route path="/ha-tang-ky-thuat" element={<InfrastructurePage />} />
          <Route path="/thiet-ke-canh-quan" element={<LandscapeDesignPage />} />
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
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
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
