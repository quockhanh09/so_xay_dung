
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo-sxd.png";
import "../style/App.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        .udi-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1100;
          padding: 12px 24px;
          box-sizing: border-box;
          color: #f4f7fa;
          background: linear-gradient(180deg, rgba(12, 30, 49, 0.88), rgba(12, 30, 49, 0.46));
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
        }

        .udi-header-inner {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .udi-logo-wrap {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          text-decoration: none;
        }

        .udi-header-logo {
          height: 42px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35));
        }

        .udi-brand {
          display: flex;
          flex-direction: column;
          color: #ffffff;
          line-height: 1.1;
        }

        .udi-brand-main {
          font-size: 19px;
          font-weight: 700;
          white-space: nowrap;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .udi-brand-sub {
          font-size: 12px;
          font-weight: 500;
          opacity: 0.9;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: 0;
          color: #f4f7fa;
          font-size: 30px;
          line-height: 1;
          cursor: pointer;
          padding: 0;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
        }

        .udi-nav {
          margin-left: auto;
        }

        .udi-nav-list {
          display: flex;
          align-items: center;
          gap: 34px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .udi-nav-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .udi-nav-link {
          color: #f4f7fa;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          line-height: 1;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
          transition: opacity 0.2s ease;
          white-space: nowrap;
        }

        .udi-nav-link:hover {
          color: #ffffff;
          opacity: 0.85;
        }

        .udi-nav-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 0;
          background: transparent;
          color: #f4f7fa;
          font-size: 20px;
          padding: 0;
          cursor: pointer;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
          opacity: 0.92;
        }

        .udi-nav-icon:hover {
          opacity: 1;
        }

        .drop-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: 0;
          background: transparent;
          color: #f4f7fa;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
        }

        .udi-dropdown {
          position: absolute;
          top: calc(100% + 16px);
          left: 0;
          min-width: 290px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 14px 28px rgba(8, 24, 36, 0.2);
          display: none;
          flex-direction: column;
          padding: 14px;
          z-index: 1200;
        }

        .udi-dropdown.show {
          display: flex;
        }

        .udi-dropdown-link {
          color: #203243;
          text-decoration: none;
          font-size: 14px;
          line-height: 1.45;
          padding: 8px 10px;
          border-radius: 8px;
        }

        .udi-dropdown-link:hover {
          background: #eef4f8;
          color: #0d2232;
        }

        .udi-mobile-search,
        .udi-mobile-cta {
          display: none;
        }

        @media (max-width: 1200px) {
          .udi-brand-main {
            font-size: 15px;
          }

          .udi-brand-sub {
            font-size: 11px;
          }

          .udi-nav-list {
            gap: 18px;
          }

          .udi-nav-link {
            font-size: 14px;
          }

          .udi-nav-icon {
            font-size: 18px;
          }
        }

        @media (max-width: 992px) {
          .udi-header {
            position: fixed;
            padding: 12px 14px;
            background: #ffffff;
            border-bottom: 1px solid #d7dde3;
            color: #1f2734;
            backdrop-filter: none;
          }

          .udi-header-logo {
            height: 38px;
            filter: none;
          }

          .udi-brand {
            display: flex;
            color: #222b38;
          }

          .udi-brand-main {
            font-size: 15px;
            letter-spacing: 0.2px;
            white-space: normal;
          }

          .udi-brand-sub {
            font-size: 11px;
            color: #616c7a;
            opacity: 1;
          }

          .mobile-menu-btn {
            display: inline-flex;
            margin-left: auto;
            color: #1f2734;
            text-shadow: none;
            width: 38px;
            height: 38px;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
          }

          .udi-nav {
            position: fixed;
            top: 81px;
            left: 0;
            right: 0;
            bottom: 0;
            background: #ffffff;
            padding: 16px 22px 24px;
            transform: translateY(-10px);
            opacity: 0;
            transition: transform 0.25s ease, opacity 0.25s ease;
            pointer-events: none;
            overflow-y: auto;
          }

          .udi-nav.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .udi-mobile-search {
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid #d8dde4;
            border-radius: 8px;
            padding: 0 10px;
            height: 44px;
            margin-bottom: 18px;
          }

          .udi-mobile-search i {
            color: #9aa4b2;
            font-size: 15px;
          }

          .udi-mobile-search input {
            width: 100%;
            border: 0;
            outline: none;
            font-size: 16px;
            color: #344050;
            background: transparent;
          }

          .udi-mobile-search input::placeholder {
            color: #9aa4b2;
          }

          .udi-nav-list {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .udi-nav-item {
            width: 100%;
            flex-wrap: wrap;
          }

          .udi-nav-link {
            display: block;
            width: 100%;
            color: #2b3644;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.2;
            text-shadow: none;
            padding: 8px 0;
          }

          .udi-nav-icon {
            font-size: 20px;
            color: #445062;
            text-shadow: none;
            margin-top: 12px;
          }

          .udi-nav-link.active {
            color: #0f988c;
          }

          .udi-mobile-cta {
            display: inline-flex;
            margin-top: 18px;
            height: 50px;
            border-radius: 999px;
            align-items: center;
            justify-content: center;
            width: 100%;
            text-decoration: none;
            background: #0f988c;
            color: #ffffff;
            font-size: 17px;
            font-weight: 700;
            box-shadow: 0 12px 20px rgba(15, 152, 140, 0.24);
          }

          .search-nav-item {
            display: none;
          }

          .udi-mobile-cta:hover {
            color: #ffffff;
            background: #10877d;
          }

          .drop-toggle {
            display: inline-flex;
            font-size: 18px;
            margin-top: 4px;
          }

          .udi-dropdown {
            position: static;
            margin-top: 6px;
            width: 100%;
            min-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .udi-brand-main {
            font-size: 14px;
          }

          .udi-brand-sub {
            font-size: 10px;
          }

          .udi-nav {
            top: 77px;
            padding: 16px 16px 24px;
          }

          .udi-nav-link {
            font-size: 16px;
          }

          .udi-mobile-cta {
            font-size: 16px;
          }
        }
      `}</style>

      <header className="udi-header">
        <div className="udi-header-inner">
          <Link to="/" className="udi-logo-wrap">
            <img src={logo} alt="Logo" className="udi-header-logo" />
            <span className="udi-brand">
              <span className="udi-brand-main">VIỆN NGHIÊN CỨU THIẾT KẾ ĐÔ THỊ</span>
              <span className="udi-brand-sub">URBAN DESIGN INSTITUTE</span>
            </span>
          </Link>

          <button
            className="mobile-menu-btn"
            aria-label="Mo menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? "\u00D7" : "\u2630"}
          </button>

          <nav className={`udi-nav ${menuOpen ? "open" : ""}`}>
            <label className="udi-mobile-search" htmlFor="udi-mobile-search-input">
              <i className="bi bi-search"></i>
              <input id="udi-mobile-search-input" type="text" placeholder="Tìm kiếm bài viết..." />
            </label>

            <ul className="udi-nav-list">
              <li className="udi-nav-item">
                <Link to="/" className={`udi-nav-link ${isActive("/") ? "active" : ""}`}>
                  Trang chủ
                </Link>
              </li>

              <li className="udi-nav-item">
                <Link to="/Project" className={`udi-nav-link ${isActive("/Project") ? "active" : ""}`}>
                  Dự án
                </Link>
              </li>

              <li className="udi-nav-item">
                <Link to="/Achievement" className={`udi-nav-link ${isActive("/Achievement") ? "active" : ""}`}>
                  Nghiên cứu
                </Link>
              </li>

              <li className="udi-nav-item">
                <Link to="/About" className={`udi-nav-link ${isActive("/About") ? "active" : ""}`}>
                  Giới thiệu
                </Link>
              </li>

              <li className="udi-nav-item">
                <Link to="/Contact" className={`udi-nav-link ${isActive("/Contact") ? "active" : ""}`}>
                  Liên hệ
                </Link>
              </li>

              <li className="udi-nav-item search-nav-item">
                <button type="button" className="udi-nav-icon" aria-label="Tìm kiếm">
                  <i className="bi bi-search"></i>
                </button>
              </li>
            </ul>

            <Link to="/Contact" className="udi-mobile-cta">
              Tư vấn ngay
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;