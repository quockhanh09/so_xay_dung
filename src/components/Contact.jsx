import { useEffect, useState } from "react";

function Contact() {
  const heroBgImage =
    "https://readdy.ai/api/search-image?query=modern%20office%20building%20exterior%20with%20glass%20facade%20professional%20business%20architecture%20contact%20us%20concept&width=1920&height=800&seq=contacthero&orientation=landscape";
  const [message, setMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)");
    const updateLayout = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);
  
  return (
    <>
    <section
            id="portfolio-details"
            className="portfolio-details section"
            style={{
              backgroundImage: `url(${heroBgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: 0,
              textAlign: "center",
              position: "relative",
              minHeight: "62vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(8, 24, 56, 0.58)",
                zIndex: 1,
              }}
            ></div>
            {/* Centered Content */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "90px 24px 70px",
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  marginBottom: "20px",
                  letterSpacing: "0.3px",
                }}
              >
                Trang chủ&nbsp;&nbsp;/&nbsp;&nbsp;Liên hệ
              </div>
              <h1
                style={{
                  color: "#fff",
                  fontSize: "clamp(2.4rem, 5vw, 4.7rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "0.3px",
                  margin: 0,
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "0 3px 14px rgba(0,0,0,0.35)",
                }}
              >
                Liên hệ
                <br />
                &amp; Hợp tác
              </h1>
            </div>
          </section>

          
          <section style={{ background: "#f5f6f8", padding: "0", width: "100%" }}>
            <div
              style={{
                maxWidth: "1180px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "minmax(0, 1fr)"
                  : "minmax(320px, 44%) minmax(320px, 56%)",
                gap: "0",
                minHeight: isMobile ? "auto" : "720px",
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  background: "#f3f4f6",
                  padding: isMobile ? "42px 20px 36px" : "56px 46px 44px",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 14px",
                    color: "#0f2543",
                    fontSize: "2.05rem",
                    lineHeight: 1.1,
                    fontWeight: 700,
                  }}
                >
                  Gửi yêu cầu tư vấn
                </h2>
                <p
                  style={{
                    margin: "0 0 28px",
                    color: "#5f6d80",
                    fontSize: "0.96rem",
                    lineHeight: 1.65,
                  }}
                >
                  Vui lòng điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong thời
                  gian sớm nhất.
                </p>

                <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <label style={{ color: "#32465f", fontWeight: 600, fontSize: "0.9rem" }}>
                    Họ và tên <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    style={{
                      height: "50px",
                      border: "1px solid #d6dce4",
                      borderRadius: "10px",
                      padding: "0 12px",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  />

                  <label style={{ color: "#32465f", fontWeight: 600, fontSize: "0.9rem" }}>
                    Email <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    style={{
                      height: "50px",
                      border: "1px solid #d6dce4",
                      borderRadius: "10px",
                      padding: "0 12px",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  />

                  <label style={{ color: "#32465f", fontWeight: 600, fontSize: "0.9rem" }}>
                    Số điện thoại <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="0123 456 789"
                    style={{
                      height: "50px",
                      border: "1px solid #d6dce4",
                      borderRadius: "10px",
                      padding: "0 12px",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  />

                  <label style={{ color: "#32465f", fontWeight: 600, fontSize: "0.9rem" }}>
                    Loại dự án <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <select
                    defaultValue=""
                    style={{
                      height: "50px",
                      border: "1px solid #d6dce4",
                      borderRadius: "10px",
                      padding: "0 12px",
                      fontSize: "0.92rem",
                      color: "#18263a",
                      outline: "none",
                      background: "#fff",
                    }}
                  >
                    <option value="" disabled>
                      Chọn loại dự án
                    </option>
                    <option value="quy-hoach">Quy hoạch đô thị</option>
                    <option value="kien-truc">Thiết kế kiến trúc</option>
                    <option value="ha-tang">Thiết kế hạ tầng</option>
                  </select>

                  <label style={{ color: "#32465f", fontWeight: 600, fontSize: "0.9rem" }}>
                    Nội dung <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div>
                    <textarea
                      maxLength={500}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mô tả chi tiết về dự án và yêu cầu tư vấn của bạn..."
                      style={{
                        width: "100%",
                        minHeight: "122px",
                        resize: "none",
                        border: "1px solid #d6dce4",
                        borderRadius: "10px",
                        padding: "10px 12px",
                        fontSize: "0.92rem",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    ></textarea>
                    <div
                      style={{
                        textAlign: "right",
                        marginTop: "8px",
                        color: "#7b8aa0",
                        fontSize: "0.86rem",
                      }}
                    >
                      {message.length}/500 ky tu
                    </div>
                  </div>

                  <button
                    type="button"
                    style={{
                      height: "48px",
                      marginTop: "8px",
                      border: "none",
                      borderRadius: "999px",
                      background: "#0f9f98",
                      color: "#fff",
                      fontSize: "1.12rem",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Gửi yêu cầu
                  </button>
                </form>
              </div>

              <div
                style={{
                  height: isMobile ? "440px" : "100%",
                  background: "#dfe5ed",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=%C4%90%C6%B0%E1%BB%9Dng+L%C3%A1ng,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>

          <section style={{ background: "#f3f4f6", padding: "78px 0 92px", width: "100%" }}>
            <div
              style={{
                maxWidth: "1180px",
                margin: "0 auto",
                padding: "0 24px",
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "minmax(0, 1fr)"
                  : "repeat(3, minmax(220px, 1fr))",
                columnGap: "46px",
                rowGap: "34px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "66px",
                    height: "66px",
                    margin: "0 auto 24px",
                    borderRadius: "16px",
                    background: "#d8f2eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="30" height="30" fill="none" stroke="#0f8f90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: "2rem", color: "#0e1f3b", fontWeight: 700 }}>
                  Địa chỉ
                </h3>
                <p style={{ margin: 0, color: "#33475f", fontSize: "1.05rem", lineHeight: 1.45 }}>
                  Tầng 5, Tòa nhà ABC, Số 123 Đường Láng, Đống Đa, Hà Nội
                </p>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "66px",
                    height: "66px",
                    margin: "0 auto 24px",
                    borderRadius: "16px",
                    background: "#d8f2eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="30" height="30" fill="none" stroke="#0f8f90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v2a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h2a2 2 0 0 1 2 1.72c.12.73.32 1.45.6 2.12a2 2 0 0 1-.45 2.18l-.9.9a16 16 0 0 0 6.8 6.8l.9-.9a2 2 0 0 1 2.18-.45c.67.28 1.39.48 2.12.6A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: "2rem", color: "#0e1f3b", fontWeight: 700 }}>
                  Điện thoại
                </h3>
                <p style={{ margin: 0, color: "#33475f", fontSize: "1.05rem", lineHeight: 1.45 }}>
                  +84 24 1234 5678
                </p>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "66px",
                    height: "66px",
                    margin: "0 auto 24px",
                    borderRadius: "16px",
                    background: "#d8f2eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="30" height="30" fill="none" stroke="#0f8f90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: "2rem", color: "#0e1f3b", fontWeight: 700 }}>
                  Email
                </h3>
                <p style={{ margin: 0, color: "#33475f", fontSize: "1.05rem", lineHeight: 1.45 }}>
                  info@architecture-planning.vn
                </p>
              </div>
            </div>
          </section>
        </>
     
  );
}

export default Contact;
