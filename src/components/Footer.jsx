import logobg from "../assets/img/sxd-ab5.png";
import "../style/App.css";
import chinhSach from "../assets/img/Chính sách bảo mật.pdf";
import dieuKhoan from "../assets/img/The Guardians_Điều khoản sử dụng.pdf";
import facebookIcon from "../assets/img/Facebook.svg";
import youtubeIcon from "../assets/img/Icon-youtube.svg";
import instagramIcon from "../assets/img/Icon-insta.svg";

function Footer() {
  return (
    <footer
      className="footer-get-in-touch"
      style={{
        backgroundImage: `url(${logobg})`,
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <div className="fgi-container">
        <h2 className="fgi-title">GET IN TOUCH</h2>
        <p className="fgi-sub">
          LIÊN HỆ VỚI CHÚNG TÔI VÀ ĐỂ CHÚNG TÔI HIỆN THỰC ĐIỀU BẠN MUỐN!
        </p>

        <div className="fgi-contacts">
          <div className="fgi-row">
            <span className="fgi-icon" aria-hidden="true">
              <svg
                className="fgi-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path
                  d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 01.96-.26c1.05.27 2.18.41 3.34.41a1 1 0 011 1v3.06a1 1 0 01-1 1C10.07 20.39 3.61 13.93 3.61 5.29a1 1 0 011-1H7.7a1 1 0 011 1c0 1.16.14 2.29.41 3.34a1 1 0 01-.26.96l-2.2 2.2z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="fgi-text">012.3344.566</span>
          </div>

          <div className="fgi-row">
            <span className="fgi-icon" aria-hidden="true">
              <svg
                className="fgi-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path
                  d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.236V6H4v2.236l8 5.333 8-5.333zM4 18V9.764l7.385 4.915a1 1 0 001.23 0L20 9.764V18H4z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="fgi-text">support@tempi.vn</span>
          </div>
        </div>

        <div className="fgi-socials">
          <a href="#" className="sbtn fb" aria-label="Facebook">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="#" className="sbtn yt" aria-label="YouTube">
            <img src={youtubeIcon} alt="" />
          </a>
          <a href="#" className="sbtn tk" aria-label="TikTok">
            <svg className="sbtn-svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path fill="#ffffff" d="M20 8.5a6.5 6.5 0 01-4.2-1.6l-.1-.1a7.9 7.9 0 01-1-1.2h-.1v6.7a4.9 4.9 0 11-3.7-4.8v2.3a2.6 2.6 0 102.1 2.5V2h3a6.5 6.5 0 004 3v3.5z"/>
            </svg>
          </a>
          <a href="#" className="sbtn ig" aria-label="Instagram">
            <img src={instagramIcon} alt="" />
          </a>
          <a href="#" className="sbtn zalo" aria-label="Zalo">
            <svg className="sbtn-svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path fill="#ffffff" d="M7.2 16.8h4.6v-1.6H9.6l3.2-5.1V7.2H8v1.6h2.2L7.2 13v3.8zm7.3 0h1.8V7.2h-1.8v9.6z"/>
            </svg>
          </a>
        </div>

        <div className="fgi-divider" />

        <div className="fgi-bottom">
          <div className="fgi-copy">Bản quyền thuộc về @VKENTERTAINMENTJSC.</div>
          <div className="fgi-links">
            <a href={chinhSach}>CHÍNH SÁCH QUYỀN RIÊNG TƯ</a> |
            <a href={dieuKhoan}> ĐIỀU KHOẢN SỬ DỤNG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
