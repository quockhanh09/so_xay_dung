import React from "react";

// Reuse existing images in the repo
import heroImg from "../assets/img/sxd-ab10.png";
import planImg from "../assets/img/sxd-ab11.png";
import related1 from "../assets/img/sxd-ab12.png";
import related2 from "../assets/img/sxd-ab13.png";
import related3 from "../assets/img/sxd-ab15.png";

function ProjectDetails() {
  return (
    <div style={{ background: "#fff" }}>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "64vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 80%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
            <h1
              style={{
                color: "#fff",
                fontFamily: "serif",
                fontWeight: 500,
                fontSize: "44px",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Gatton Park on the Town Branch
            </h1>
            <div style={{ color: "#e6e6e6", marginTop: 10 }}>Lexington, Kentucky</div>
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section style={{ padding: "56px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 40,
          }}
        >
          {/* Column 1 */}
          <div>
            <div style={{ color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>CLIENT</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8 }}>
              Gatton Park on the Town Branch
            </div>

            <div style={{ marginTop: 24, color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>LOCATION</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8 }}>Lexington, KY</div>

            <div style={{ marginTop: 24, color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>SIZE</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8 }}>11 acres</div>
          </div>

          {/* Column 2 */}
          <div>
            <div style={{ color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>SERVICES</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8, textDecoration: "underline" }}>
              Landscape Architecture
            </div>

            <div style={{ marginTop: 24, color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>ADDITIONAL SERVICES</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8 }}>Civil Engineering</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 4 }}>Resilience</div>

            <div style={{ marginTop: 24, color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>STATUS</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8 }}>Completed 2025</div>
          </div>

          {/* Column 3 */}
          <div>
            <div style={{ color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>AWARDS</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8 }}>
              American Council of Engineering Companies (ACEC) of Kentucky — Engineering Excellence Award
            </div>
          </div>
        </div>
      </section>

      {/* Plan image */}
      <section style={{ padding: "0 0 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <img src={planImg} alt="Master plan" style={{ width: "100%", display: "block" }} />
        </div>
      </section>

      {/* Body content */}
      <section style={{ padding: "24px 24px 80px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "serif", fontSize: 32, lineHeight: 1.2 }}>A Park Vision Shaped by Community Input</h2>
          <p style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>
            Sau một chuỗi hoạt động tương tác với cộng đồng kéo dài nhiều năm, dự án
            đã nhận được hàng chục nghìn ý kiến đóng góp. Từ khảo sát, sự kiện pop‑up
            đến các buổi thảo luận nhóm, nhóm thiết kế tổng hợp thành một tầm nhìn
            chung: công viên phải thân thiện, dễ tiếp cận và phản ánh bản sắc địa
            phương. Những ưu tiên như tính bao trùm, an toàn và tính linh hoạt được
            đưa vào định hướng thiết kế và chương trình hoạt động của công viên.
          </p>

          <h2 style={{ fontFamily: "serif", fontSize: 32, marginTop: 40, lineHeight: 1.2 }}>
            An Inclusive Community Destination
          </h2>
          <p style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>
            Gatton Park cung cấp mạng lưới không gian đa dạng kết nối cộng đồng: lối
            dạo đa phương thức, bãi cỏ sự kiện, sân khấu ngoài trời, khu vui chơi trẻ
            em, vườn bướm, khu dành cho thú cưng và các tiện ích công cộng. Bãi cỏ
            trung tâm có thể chứa tới 5.000 người cho các lễ hội, đồng thời chuyển đổi
            linh hoạt cho những hoạt động quy mô nhỏ hàng ngày.
          </p>

          {/* Extra sections based on reference */}
          <h2 style={{ fontFamily: "serif", fontSize: 32, marginTop: 40, lineHeight: 1.2 }}>
            Showcasing History, Art, and Culture
          </h2>
          <p style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>
            Lịch sử, nghệ thuật và văn hóa địa phương được lồng ghép vào thiết kế
            của công viên thông qua các tác phẩm nghệ thuật đặt hàng và những yếu tố
            gợi nhớ câu chuyện của Town Branch. Các điểm nhấn như lối vào, quảng
            trường và đường dạo trở thành không gian trưng bày, giao lưu cộng đồng,
            giúp du khách cảm nhận bản sắc đô thị theo cách gần gũi và đương đại.
          </p>

          <h2 style={{ fontFamily: "serif", fontSize: 32, marginTop: 40, lineHeight: 1.2 }}>
            Restoring Environmental Health
          </h2>
          <p style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>
            Dự án áp dụng các giải pháp phục hồi dòng suối và hệ sinh thái như loại
            bỏ loài xâm lấn, tăng cường hành lang cây xanh, trồng bản địa để ổn định
            bờ suối và tạo môi trường cho đa dạng sinh học. Bề mặt thấm và cảnh quan
            sinh thủy giúp làm chậm dòng chảy, lọc ô nhiễm trước khi vào nguồn nước,
            đồng thời giảm xói lở trong các trận mưa lớn—đem lại lợi ích môi trường
            bền vững cho toàn khu vực.
          </p>
        </div>
      </section>

      {/* Related projects */}
      <section style={{ padding: "24px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "serif", fontSize: 30, marginBottom: 24 }}>Related Projects</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {[
              { image: related1, title: "Bonnet Springs Park", location: "Lakeland, FL" },
              { image: related2, title: "Cincinnati John G. and Phyllis W. Smale Riverfront Park", location: "Cincinnati, OH" },
              { image: related3, title: "Boston City Hall Plaza Renovation", location: "Boston, MA" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: 6, boxShadow: "0 3px 18px rgba(0,0,0,0.12)" }}>
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ fontFamily: "serif", fontSize: 18, color: "#222", textDecoration: "underline", textDecorationColor: "#b3b3b3", textDecorationThickness: 1, textUnderlineOffset: 6 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 14, color: "#8a8a8a" }}>{item.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
