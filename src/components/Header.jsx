
import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo-sxd.png";
import iconGlobal from "../assets/img/Icon.svg";
import { Link, useLocation } from "react-router-dom";
import "../style/App.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);
  // const isLoginPage = location.pathname === "/Login";

  return (
    <>
      <style>{`
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
      <header className="udi-header">
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
      {/* LOGO TRÊN */}
      <div style={{ marginBottom: "20px" }}>
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
            onMouseEnter={(e) =>
              (e.currentTarget.children[2].style.display = "flex")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.children[2].style.display = "none")
            }
          >
            <a
              href="/About"
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              ABOUT US
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
                minWidth: "280px",
                zIndex: 999,
              }}
            >
              {[
                "BAN LÃNH ĐẠO",
                "PHÒNG TỔNG HỢP",
                "TRUNG TÂM THIẾT KẾ ĐÔ THỊ",
                "TRUNG TÂM QUY HOẠCH ĐÔ THỊ",
                "TRUNG TÂM THIẾT KẾ CÔNG TRÌNH",
                "TRUNG TÂM HẠ TẦNG KỸ THUẬT",
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
                    whiteSpace: "nowrap",
                  }}
                >
                  {v}
                </a>
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