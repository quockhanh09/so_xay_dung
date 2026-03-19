import "../style/App.css";

function Footer() {
  return (
    <footer className="footer-get-in-touch">
      <div className="fgi-container">
        <div className="fgi-top">
          <div className="fgi-brand-col">
            <a className="fgi-brand" href="#" aria-label="Kiến trúc và quy hoạch">
              <span className="fgi-brand-mark" aria-hidden="true" />
              <span>
                <strong>KIẾN TRUC &amp; QUY HOACH</strong>
                <em>ARCHITECTURE &amp; PLANNING</em>
              </span>
            </a>

            <p className="fgi-brand-desc">
              Dong hanh cung su phat trien ben vung cua do thi va cong dong,
              tao dung khong gian song chat luong cao voi ban sac van hoa dia phuong.
            </p>

            <div className="fgi-socials" aria-label="Mang xa hoi">
              <a href="#" className="sbtn" aria-label="Facebook">
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a href="#" className="sbtn" aria-label="LinkedIn">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
              <a href="#" className="sbtn" aria-label="YouTube">
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
              <a href="#" className="sbtn" aria-label="Email">
                <i className="bi bi-envelope-fill" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="fgi-nav-col" aria-label="Ve chung toi">
            <h3>Ve chung toi</h3>
            <a href="#">Gioi thieu</a>
            <a href="#">Doi ngu</a>
            <a href="#">Lich su</a>
          </nav>

          <nav className="fgi-nav-col" aria-label="Dich vu">
            <h3>Dich vu</h3>
            <a href="#">Quy hoach</a>
            <a href="#">Thiet ke</a>
            <a href="#">Tu van</a>
          </nav>

          <nav className="fgi-nav-col" aria-label="Du an">
            <h3>Du an</h3>
            <a href="#">Du an tieu bieu</a>
            <a href="#">Quy hoach</a>
            <a href="#">Thiet ke</a>
            <a href="#">Nghien cuu</a>
          </nav>

          <nav className="fgi-nav-col" aria-label="Lien he">
            <h3>Lien he</h3>
            <a href="#">Lien he</a>
            <a href="#">Hotline</a>
            <a href="#">Email</a>
          </nav>
        </div>

        <div className="fgi-divider" />

        <div className="fgi-bottom">
          <p className="fgi-copy">© 2024 Cong Ty Tu Van Kien Truc &amp; Quy Hoach. Bao luu moi quyen.</p>
          <p className="fgi-links">
            <a href="#">Chinh sach bao mat</a>
            <a href="#">Dieu khoan su dung</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
