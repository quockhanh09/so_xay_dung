import React from "react";
import { useParams } from "react-router-dom";

// Reuse existing images in the repo
import planImg from "../assets/img/sxd-ab11.png";

import projectsData from '../data/projects.json';
import { getProjectImageByFileName } from '../utils/projectImageLoader';

function ProjectProfile() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <div style={{ background: "#fff", padding: "100px 24px", textAlign: "center" }}>
        <h2>Dự án không tìm thấy</h2>
      </div>
    );
  }

  // Prefer the local mapped image (same as listing) to keep images consistent.
  const projectImage = getProjectImageByFileName(project.imageFile);
  const displayImage = projectImage || project.imageUrl;

  return (
    <div style={{ background: "#fff" }}>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "64vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: `url(${displayImage})`,
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
              {project.title}
            </h1>
            <div style={{ color: "#e6e6e6", marginTop: 10 }}>{project.location}</div>
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
              {project.client}
            </div>

            <div style={{ marginTop: 24, color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>LOCATION</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8 }}>{project.location}</div>

            <div style={{ marginTop: 24, color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>YEAR</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8 }}>{project.year}</div>
          </div>

          {/* Column 2 */}
          <div>
            <div style={{ color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>CATEGORY</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8, textDecoration: "underline" }}>
              {project.category && project.category.toUpperCase().replace(/-/g, ' ')}
            </div>

            <div style={{ marginTop: 24, color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>DESCRIPTION</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8 }}>{project.description}</div>

            <div style={{ marginTop: 24, color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>STATUS</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8, textTransform: "capitalize" }}>
              {project.status && project.status.replace(/-/g, ' ')}
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <div style={{ color: "#8e8e8e", fontSize: 12, letterSpacing: 1 }}>PROJECT ID</div>
            <div style={{ fontFamily: "serif", fontSize: 20, marginTop: 8 }}>
              Project #{project.id}
            </div>
          </div>
        </div>
      </section>

      {/* Plan image */}
      <section style={{ padding: "0 0 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <img src={displayImage} alt="Project" style={{ width: "100%", display: "block" }} />
        </div>
      </section>

      {/* Body content */}
      <section style={{ padding: "24px 24px 80px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "serif", fontSize: 32, lineHeight: 1.2 }}>Dự án {project.title}</h2>
          <p style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>
            {project.description}
          </p>

          <h2 style={{ fontFamily: "serif", fontSize: 32, marginTop: 40, lineHeight: 1.2 }}>
            Chi tiết Dự án
          </h2>
          <p style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>
            Dự án này là một phần của các hoạt động phát triển và thiết kế của chúng tôi.
            Với sự tập trung vào chất lượng và sự bền vững, dự án được thực hiện nhằm
            mang lại giải pháp tốt nhất cho khách hàng và cộng đồng. Nội dung chi tiết
            sẽ được cập nhật trong tệp projects.json.
          </p>

          <h2 style={{ fontFamily: "serif", fontSize: 32, marginTop: 40, lineHeight: 1.2 }}>
            Phạm vi và Tác động
          </h2>
          <p style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>
            Dự án này được thiết kế với mục đích tạo ra tác động tích cực lâu dài.
            Chúng tôi cam kết đem lại giải pháp sáng tạo, hiệu quả và phù hợp với
            nhu cầu của khách hàng. Thông tin chi tiết về phạm vi dự án và các tác
            động cụ thể sẽ được bổ sung thêm vào projects.json.
          </p>

          <h2 style={{ fontFamily: "serif", fontSize: 32, marginTop: 40, lineHeight: 1.2 }}>
            Nội dung Chi tiết
          </h2>
          <p style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>
            Các thông tin chi tiết bổ sung về dự án này, bao gồm các mục tiêu, phương
            pháp tiếp cận, các bước thực hiện, và kết quả dự kiến sẽ được cập nhật
            trực tiếp từ tệp projects.json. Vui lòng kiểm tra lại sau đó để xem thông
            tin đầy đủ nhất.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProjectProfile;
