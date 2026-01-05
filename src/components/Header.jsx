
import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/img/logo-sxd.png";
import iconGlobal from "../assets/img/Icon.svg";
import { Link, useLocation } from "react-router-dom";
import "../style/App.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [animationDone, setAnimationDone] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutCloseTimer = useRef(null);
  const location = useLocation();
  
  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);

  const handleAboutEnter = () => {
    if (aboutCloseTimer.current) {
      clearTimeout(aboutCloseTimer.current);
      aboutCloseTimer.current = null;
    }
    setAboutOpen(true);
  };

  const handleAboutLeave = () => {
    if (aboutCloseTimer.current) clearTimeout(aboutCloseTimer.current);
    aboutCloseTimer.current = setTimeout(() => setAboutOpen(false), 180);
  };
  
  useEffect(() => {
    // Tạm thời luôn chạy animation để test
    setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    setTimeout(() => {
      setAnimationDone(true);
    }, 3000);
  }, []);
  // const isLoginPage = location.pathname === "/Login";

  return (
    <>
      <style>{`
        .logo-intro-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          animation: fadeOut 0.5s ease-in-out 2.5s forwards;
        }
        
        .udi-letters-container {
          position: relative;
          width: 700px;
          height: 320px;
        }
        
        .piece {
          position: absolute;
          border-radius: 4px;
          opacity: 0;
          box-shadow: 0 3px 10px rgba(0,0,0,0.15);
        }
        
        /* Chữ U - kiểu ảnh 2: hai thanh dọc + thanh ngang ngắn */
        .u1 { 
          width: 40px; 
          height: 180px; 
          background: #ff002bff;
          left: -150px; 
          top: -100px; 
          border-radius: 12px;
          animation: moveU1 0.9s ease-out 0.1s forwards;
        }
        .u2 { 
          width: 40px; 
          height: 180px; 
          background: #ff002bff;
          left: 900px; 
          top: -80px; 
          border-radius: 12px;
          animation: moveU2 0.9s ease-out 0.15s forwards;
        }
        .u3 { 
          width: 110px; 
          height: 40px; 
          background: #ff002bff;
          left: -120px; 
          top: 450px; 
          border-radius: 12px;
          animation: moveU3 0.9s ease-out 0.2s forwards;
        }
        
        /* Chữ D - kiểu ảnh 2: giống chữ C + hai khối nhỏ bên phải */
        .d1 { 
          width: 40px; 
          height: 180px; 
          background: #ff002bff;
          left: -200px; 
          top: 100px; 
          border-radius: 12px;
          animation: moveD1 0.9s ease-out 0.3s forwards;
        }
        .d2 { 
          width: 110px; 
          height: 40px; 
          background: #ff002bff;
          left: 950px; 
          top: -120px; 
          border-radius: 12px;
          animation: moveD2 0.9s ease-out 0.35s forwards;
        }
        .d3 { 
          width: 110px; 
          height: 40px; 
          background: #ff002bff;
          left: -150px; 
          top: 480px; 
          border-radius: 12px;
          animation: moveD3 0.9s ease-out 0.4s forwards;
        }
        .d4 { 
          width: 40px; 
          height: 50px; 
          background: #ff002bff;
          left: 980px; 
          top: 180px; 
          border-radius: 12px;
          animation: moveD4 0.9s ease-out 0.45s forwards;
        }
        .d5 { 
          width: 40px; 
          height: 50px; 
          background: #ff002bff;
          left: -220px; 
          top: -150px; 
          border-radius: 12px;
          animation: moveD5 0.9s ease-out 0.32s forwards;
        }
        
        /* Chữ I - 3 mảnh tạo hình I đơn giản */
        .i1 { 
          width: 100px; 
          height: 35px; 
          background: linear-gradient(135deg, #2F2F2F, #1A1A1A);
          left: 1000px; 
          top: -100px; 
          border-radius: 12px 12px 12px 12px;
          animation: moveI1 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
        }
        .i2 { 
          width: 35px; 
          height: 160px; 
          background: linear-gradient(135deg, #1A1A1A, #000000);
          left: -250px; 
          top: -130px; 
          border-radius: 12px;
          animation: moveI2 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s forwards;
        }
        .i3 { 
          width: 100px; 
          height: 35px; 
          background: linear-gradient(135deg, #2F2F2F, #1A1A1A);
          left: 1020px; 
          top: 500px; 
          border-radius: 12px 12px 12px 12px;
          animation: moveI3 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
        }
        
        /* Animations cho chữ U (single-phase theo bố cục ảnh 2) */
        @keyframes moveU1 { 
          to { 
            left: 80px; 
            top: 60px; 
            opacity: 1; 
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes moveU2 { 
          to { 
            left: 235px; 
            top: 60px; 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes moveU3 { 
          to { 
            left: 120px; 
            top: 200px; 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        /* Animations cho chữ D (single-phase theo bố cục ảnh 2) */
        @keyframes moveD1 { 
          to { 
            left: 330px; 
            top: 60px; 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes moveD2 { 
          to { 
            left: 370px; /* sát mép phải của d1 */
            top: 60px; 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes moveD3 { 
          to { 
            left: 370px; /* thẳng hàng với d2 */
            top: 200px; 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes moveD4 { 
          to { 
            left: 475px; 
            top: 90px; 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes moveD5 { 
          to { 
            left: 475px; 
            top: 150px; 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        /* Animations cho chữ I */
        @keyframes moveI1 { 
          to { 
            left: 565px; 
            top: 60px; 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          from {
            transform: scale(0.5) rotate(180deg);
          }
        }
        @keyframes moveI2 { 
          to { 
            left: 600px; 
            top: 60px; 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          from {
            transform: scale(0.5) rotate(-180deg);
          }
        }
        @keyframes moveI3 { 
          to { 
            left: 565px; 
            top: 185px; 
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          from {
            transform: scale(0.5) rotate(90deg);
          }
        }
        
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
        .udi-header {
          width: 100%;
          background: #f5f5f5;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
          position: relative;
          box-sizing: border-box;
          padding-left: 24px;
          padding-right: 24px;
        }
        .udi-header-logo {
          height: 150px;
          object-fit: contain;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 28px;
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 1200;
        }
        @media (max-width: 900px) {
          .mobile-menu-btn {
            display: block;
          }
        }
        @media (max-width: 768px) {
          .udi-header {
            padding-top: 8px !important;
            padding-bottom: 4px !important;
          }
          .udi-header-logo {
            height: 60px !important;
          }
          .udi-nav {
            position: fixed !important;
            top: 0;
            left: 0;
            width: 100vw !important;
            height: 70vh !important;
            max-height: 420px !important;
            background: rgba(255,255,255,0.98) !important;
            z-index: 1100;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
            align-items: flex-start !important;
            padding-top: 80px !important;
            transition: all 0.2s;
            margin: 0 auto;
           
            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          }
          .udi-nav.closed {
            display: none !important;
          }
          .udi-nav ul {
            flex-direction: column !important;
            gap: 8px !important;
            align-items: flex-start !important;
            width: 100% !important;
          }
          .udi-nav ul li {
            width: 100% !important;
            margin-left: 0 !important;
          }
          .udi-nav ul li a {
            font-size: 18px !important;
            padding: 12px 0 !important;
            display: block !important;
          }
          .udi-nav ul li > div[style*='position: absolute'] {
            position: static !important;
            min-width: 100% !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            padding: 8px 0 !important;
            margin-top: 2px !important;
          }
          .udi-nav ul li > div[style*='position: absolute'] a {
            font-size: 16px !important;
            padding: 10px 16px !important;
          }
          .udi-nav ul li i {
            margin-left: 8px !important;
          }
        }
        @media (max-width: 400px) {
          .udi-header-logo {
            height: 36px !important;
            margin-left: 8px;
            margin-right: 8px;
          }
          .udi-nav ul {
            gap: 4px !important;
            padding-left: 8px;
            padding-right: 8px;
          }
          .udi-nav ul li a {
            font-size: 14px !important;
            padding: 7px 0 !important;
          }
          .udi-nav ul li > div[style*='position: absolute'] a {
            font-size: 12px !important;
            padding: 6px 10px !important;
          }
          .mobile-menu-btn {
            font-size: 22px;
            top: 8px;
            right: 8px;
          }
        }
      `}</style>
      {showIntro && (
        <div className="logo-intro-overlay">
          <div className="udi-letters-container">
            {/* Chữ U - 3 mảnh chính */}
            <div className="piece u1"></div>
            <div className="piece u2"></div>
            <div className="piece u3"></div>
            
            {/* Chữ D - 5 mảnh chính */}
            <div className="piece d1"></div>
            <div className="piece d2"></div>
            <div className="piece d3"></div>
            <div className="piece d4"></div>
            <div className="piece d5"></div>
            
            {/* Chữ I - 3 mảnh chính */}
            <div className="piece i1"></div>
            <div className="piece i2"></div>
            <div className="piece i3"></div>
          </div>
        </div>
      )}
      <header className="udi-header" style={{ opacity: animationDone ? 1 : 0, transition: 'opacity 0.5s' }}>
        {/* Hamburger button for mobile */}
        <button
          className="mobile-menu-btn"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <span>&#10005;</span>
          ) : (
            <span>&#9776;</span>
          )}
        </button>
      {/* LOGO TRÁI */}
      <div style={{ marginBottom: "20px",marginRight:"800px" }}>
        <a href="/">
          <img
            src={logo}
            alt="UDI Logo"
            className="udi-header-logo"
          />
        </a>
      </div>

      {/* MENU DƯỚI */}
      <nav className={`udi-nav${menuOpen ? '' : ' closed'}`}>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            gap: "40px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              HOME
            </a>
          </li>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <Link
              to="/About"
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              ABOUT US
            </Link>

            <button
              type="button"
              onClick={() => setAboutOpen((prev) => !prev)}
              style={{
                marginLeft: 5,
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: 0,
              }}
            >
              <i className="bi bi-chevron-down"></i>
            </button>

            <div
              style={{
                position: "absolute",
                top: "32px",
                left: 0,
                background: "#fff",
                borderRadius: "6px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
                padding: "18px 22px",
                display: aboutOpen ? "flex" : "none",
                flexDirection: "column",
                minWidth: "280px",
                zIndex: 1200,
              }}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={handleAboutLeave}
            >
              {[
                { label: "BAN LÃNH ĐẠO", to: "/ban-lanh-dao" },
                { label: "PHÒNG TỔNG HỢP", to: "/phong-tong-hop" },
                { label: "TRUNG TÂM THIẾT KẾ ĐÔ THỊ", to: "/trung-tam-thiet-ke-do-thi" },
                { label: "TRUNG TÂM QUY HOẠCH ĐÔ THỊ", to: "/trung-tam-quy-hoach-do-thi" },
                { label: "TRUNG TÂM THIẾT KẾ CÔNG TRÌNH", to: "/trung-tam-thiet-ke-cong-trinh" },
                { label: "TRUNG TÂM HẠ TẦNG KỸ THUẬT", to: "/trung-tam-ha-tang-ky-thuat" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    padding: "10px 0",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: "#333",
                    letterSpacing: "0.3px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </li>


          <li
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.children[2].style.display = "flex")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.children[2].style.display = "none")
            }
          >
            <a
              href="/Project"
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              PROJECTS
            </a>

            <i className="bi bi-chevron-down" style={{ marginLeft: 5 }}></i>

            <div
              style={{
                position: "absolute",
                top: "32px",
                left: 0,
                background: "#fff",
                borderRadius: "6px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
                padding: "18px 22px",
                display: "none",
                flexDirection: "column",
                minWidth: "260px",
                zIndex: 999,
              }}
            >
              {[
                "QUY HOẠCH ĐÔ THỊ",
                "THIẾT KẾ CÔNG TRÌNH",
                "HẠ TẦNG KỸ THUẬT",
                "THIẾT KẾ CẢNH QUAN",
              ].map((v) => (
                <a
                  key={v}
                  href="#"
                  style={{
                    padding: "10px 0",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: "#333",
                    letterSpacing: "0.3px",
                  }}
                >
                  {v}
                </a>
              ))}
            </div>
          </li>


          <li>
            <a
              href="/Contact"
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              CONTACT US
            </a>
          </li>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.children[2].style.display = "flex")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.children[2].style.display = "none")
            }
          >
            <a
              href="/Achievement"
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              ACHIEVEMENT AWARDS
            </a>

            <i className="bi bi-chevron-down" style={{ marginLeft: 5 }}></i>

            <div
              style={{
                position: "absolute",
                top: "32px",
                left: 0,
                background: "#fff",
                borderRadius: "6px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
                padding: "18px 22px",
                display: "none",
                flexDirection: "column",
                minWidth: "500px",
                zIndex: 999,
              }}
            >
              {[
                "CÁC GIẢI THƯỞNG CỦA HỘI QUY HOẠCH & PHÁT TRIỂN ĐÔ THỊ VIỆT NAM",
                "CÁC GIẢI THƯỞNG CỦA HỘI KIẾN TRÚC SƯ VIỆT NAM",
                "CÁC GIẢI THƯỞNG TRONG CÁC CUỘC THI QUỐC TẾ VỀ THIẾT KẾ Ý TƯỞNG",
                "CÁC ẤN PHẨM ĐÃ ĐƯỢC XUẤT BẢN",
              ].map((v) => (
                <a
                  key={v}
                  href="#"
                  style={{
                    padding: "10px 0",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: "#333",
                    letterSpacing: "0.3px",
                    lineHeight: "20px",
                  }}
                >
                  {v}
                </a>
              ))}
            </div>
          </li>


          <li>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              UDI NEWS
            </a>
          </li>

          <li style={{ marginLeft: "60px" }}>
            <i
              className="bi bi-search"
              style={{
                fontSize: "18px",
                cursor: "pointer",
              }}
            ></i>
          </li>
        </ul>
      </nav>
      </header>
    </>
  );
}

export default Header;