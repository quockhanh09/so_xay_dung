import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Layout from "./Layout.jsx";
import Header from "./components/Header";
import Achievement from "./components/Achievement";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Details from "./components/Deatails";
import Login from "./signup-in/Login";
import Newsletter from "./components/Newsletter";
import Register from "./signup-in/Register";
import About from "./components/About";

import "./style/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flag-icons/css/flag-icons.min.css'

//
import logo from "./assets/img/Logo-name.png";
// import iconGlobal from "./assets/img/Icon.svg";
import heroBg from "./assets/img/sxd-bg.png";
import iconYoutube from "./assets/img/Icon-youtube.svg";
import iconInsta from "./assets/img/Icon-insta.svg";
import iconFace from "./assets/img/Facebook.svg";
import iconQr from "./assets/img/qr1-1.svg";
import appStore from "./assets/img/testimonials/appstore.svg";
import ggplay from "./assets/img/testimonials/gg play.svg";
import logoFull from "./assets/img/Logo-full.png";
import tabDot from "./assets/img/tab-dot.png";
import ttImg from "./assets/img/fortress-1.png"
import no1 from "./assets/img/no1.png";
import no2 from "./assets/img/no2.png";
import no3 from "./assets/img/no3.png";
import statusBg from "./assets/img/elrodika-05.png";
import nv12 from "./assets/img/nv-12.png";
import bgTime from "./assets/img/br-season.jpeg";
import seasonImg from "./assets/img/season 2025.png";
import logosword from "./assets/img/TheGuardian_Logo_VIE 3.png"
import chinhSach from "./assets/img/Chính sách bảo mật.pdf"
import dieuKhoan from "./assets/img/The Guardians_Điều khoản sử dụng.pdf"

import sxdbg1 from "./assets/img/sxd-ab1.png"
import sxdbg2 from "./assets/img/sxd-ab2.png"
import sxdbg3 from "./assets/img/sxd-ab3.png"
import sxdbg4 from "./assets/img/sxd-ab4.png"
import canonDefault from "./assets/img/character=canon, state=default.png";
import canonZoom from "./assets/img/character=canon, state=zoom.png";
import holyDefault from "./assets/img/character=holy, state=default.png";
import holyZoom from "./assets/img/character=holy, state=zoom.png";
import assasinDefault from "./assets/img/character=assasin, state=default.png";
import assasinZoom from "./assets/img/character=assasin, state=zoom.png";
import warriorDefault from "./assets/img/character=warrior, state=default.png";
import warriorZoom from "./assets/img/character=warrior, state=zoom.png";
import mageDefault from "./assets/img/character=mage, state=default.png";
import mageZoom from "./assets/img/character=mage, state=zoom.png";
import archerDefault from "./assets/img/character=archer, state=default.png";
import archerZoom from "./assets/img/character=archer, state=zoom.png";
// danh sách nhân vật


import event1 from "./assets/img/lucarly-08.png";
import event2 from "./assets/img/lucarly-02.png";
import event3 from "./assets/img/lucarly-01.png";
import event4 from "./assets/img/kram-11.png";


const eventImages = [event1, event2, event3, event4];

function App({ characters }) {
  const charactersList = [
    { name: "Nguyễn Văn A", image: "https://yourlink.com/a.jpg" },
    { name: "Trần Thị B", image: "https://yourlink.com/b.jpg" },
    { name: "Lê Văn C", image: "https://yourlink.com/c.jpg" },
    { name: "Phạm Thị D", image: "https://yourlink.com/d.jpg" },
    { name: "Vũ Văn E", image: "https://yourlink.com/e.jpg" },
    { name: "Đỗ Thị F", image: "https://yourlink.com/f.jpg" },
    { name: "Hồ Văn G", image: "https://yourlink.com/g.jpg" },
    { name: "Ngô Thị H", image: "https://yourlink.com/h.jpg" },
    { name: "Phan Văn I", image: "https://yourlink.com/i.jpg" },
    { name: "Trịnh Thị K", image: "https://yourlink.com/k.jpg" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
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


                {/* ===== CHARACTERS ===== */}
                <section
                  id="services"
                  className="services section"
                  style={{
                    background: "#fff",
                    padding: "40px 0",
                  }}
                >
                  {/* TITLE */}
                  <div className="container">
                    <h2
                      style={{
                        fontFamily: "'Times New Roman', serif",
                        fontSize: "34px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      BAN LÃNH ĐẠO (VIUP)
                    </h2>

                    <h4
                      style={{
                        fontFamily: "'Times New Roman', serif",
                        fontSize: "16px",
                        marginBottom: "25px",
                      }}
                    >
                      BAN LÃNH ĐẠO VÀ GIÁM ĐỐC TRUNG TÂM
                    </h4>
                  </div>

                  {/* LIST CARD */}
                  <div className="container">
                    <div
                      className="row"
                      style={{
                        rowGap: "30px",
                      }}
                    >
                      {currentItems.map((char, i) => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                          <div
                            style={{
                              width: "100%",
                              height: "350px",
                              border: "1px solid #ddd",
                              borderRadius: "10px",
                              overflow: "hidden",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              background: "#fafafa",
                            }}
                          >
                            <img
                              src={char.image}
                              alt={char.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                          {/* NAME */}
                          <p
                            style={{
                              textAlign: "center",
                              marginTop: "12px",
                              fontFamily: "'Times New Roman', serif",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#000",
                              textTransform: "uppercase",
                            }}
                          >
                            {char.name}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* PAGINATION */}
                    <div
                      style={{
                        marginTop: "35px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        style={{
                          padding: "6px 14px",
                          border: "1px solid #ccc",
                          background: currentPage === 1 ? "#eee" : "#fff",
                          cursor: currentPage === 1 ? "not-allowed" : "pointer",
                        }}
                      >
                        ←
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          style={{
                            padding: "6px 14px",
                            border: "1px solid #ccc",
                            background: currentPage === i + 1 ? "#000" : "#fff",
                            color: currentPage === i + 1 ? "#fff" : "#000",
                            cursor: "pointer",
                          }}
                        >
                          {i + 1}
                        </button>
                      ))}

                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        style={{
                          padding: "6px 14px",
                          border: "1px solid #ccc",
                          background: currentPage === totalPages ? "#eee" : "#fff",
                          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                        }}
                      >
                        →
                      </button>
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
          <Route path="/Deatails" element={<Details />} />
          <Route path="/Newsletter" element={<Newsletter />} />
          <Route path="/About" element={<About />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Achievement" element={<Achievement />} />
        </Routes>
        
        {/* ===== FOOTER ===== */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
