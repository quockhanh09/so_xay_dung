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
                <strong>KIẾN TRÚC &amp; QUY HOẠCH</strong>
                <em>ARCHITECTURE &amp; PLANNING</em>
              </span>
            </a>

            <p className="fgi-brand-desc">
              Đồng hành cùng sự phát triển bền vững của đô thị và cộng đồng, tạo dựng không gian sống chất lượng cao với bản sắc văn hóa địa phương.
            </p>

            <div className="fgi-socials" aria-label="Mạng xã hội">
              <a href="https://facebook.com" className="sbtn" aria-label="Facebook" title="Facebook" accessKey="1">
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a href="https://linkedin.com" className="sbtn" aria-label="LinkedIn" title="LinkedIn" accessKey="2">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
              <a href="https://youtube.com" className="sbtn" aria-label="YouTube" title="YouTube" accessKey="3">
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
              <a href="mailto:info@company.com" className="sbtn" aria-label="Email" title="Email" accessKey="4">
                <i className="bi bi-envelope-fill" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="fgi-nav-col" aria-label="Về chúng tôi">
            <h3>Về chúng tôi</h3>
            <a href="/about" accessKey="q">Giới thiệu</a>
            <a href="/about#chuyen-gia" accessKey="w">Đội ngũ</a>
            <a href="/about#lich-su" accessKey="e">Lịch sử</a>
          </nav>

          <nav className="fgi-nav-col" aria-label="Dịch vụ">
            <h3>Dịch vụ</h3>
            <a href="/projects#quy-hoach" accessKey="a">Quy hoạch</a>
            <a href="/projects#thiet-ke" accessKey="s">Thiết kế</a>
            <a href="/projects#tu-van" accessKey="d">Tư vấn</a>
          </nav>

          <nav className="fgi-nav-col" aria-label="Dự án">
            <h3>Dự án</h3>
            <a href="/projects#du-an-tieu-bieu" accessKey="z">Dự án tiêu biểu</a>
            <a href="/projects#du-an-quy-hoach" accessKey="x">Quy hoạch</a>
            <a href="/projects#du-an-thiet-ke" accessKey="c">Thiết kế</a>
            <a href="/projects#nghien-cuu" accessKey="v">Nghiên cứu</a>
          </nav>

          <nav className="fgi-nav-col" aria-label="Liên hệ">
            <h3>Liên hệ</h3>
            <a href="/contact" accessKey="m">Liên hệ</a>
            <a href="tel:+842412345678" accessKey="n">Hotline</a>
            <a href="mailto:info@architecture-planning.vn" accessKey="b">Email</a>
          </nav>
        </div>

        <div className="fgi-divider" />

        <div className="fgi-bottom">
          <p className="fgi-copy">© 2024 Công Ty Tư Vấn Kiến Trúc &amp; Quy Hoạch. Bảo lưu mọi quyền.</p>
          <p className="fgi-links">
            <a href="#chinh-sach" accessKey="l">Chính sách bảo mật</a>
            <a href="#dieu-khoan" accessKey="k">Điều khoản sử dụng</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
