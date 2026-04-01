import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "./data/projects.json";


function ProjectProfile() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Nếu projectsData là object với key là id
    const found = projectsData[id] || null;
    setProject(found);
  }, [id]);

  if (!project) {
    return <div style={{ padding: 40, textAlign: "center" }}>Không tìm thấy dự án.</div>;
  }
  // DEBUG: log project data (sau khi đã chắc chắn project khác null)
  // eslint-disable-next-line no-console
  console.log('ProjectProfile project:', project);

  // Breadcrumbs
  const breadcrumbs = [
    { label: "Trang chủ", to: "/" },
    { label: "Dự án", to: "/Project" },
    { label: project.title },
  ];

  return (
    <div style={{ background: "#f7f8fa", minHeight: "100vh" }}>
      {/* Cover + Breadcrumb + Title + Info */}
      <div style={{
        width: "100%",
        minHeight: 380,
        background: `url(${project.coverImage || project.image}) center/cover no-repeat`,
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        color: "#fff",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        overflow: "hidden",
      }}>
        <div style={{
          background: "linear-gradient(180deg,rgba(0,0,0,0.32) 0%,rgba(0,0,0,0.62) 100%)",
          width: "100%",
          padding: "clamp(32px, 7vw, 64px) clamp(16px, 4vw, 44px) 38px",
        }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Breadcrumb */}
            <nav style={{ marginBottom: 18, fontSize: 15, color: "#e0e6ef", opacity: 0.92 }} aria-label="breadcrumb">
              {breadcrumbs.map((bc, idx) => (
                <span key={bc.label}>
                  {bc.to ? <Link to={bc.to} style={{ color: "#e0e6ef", textDecoration: "none" }}>{bc.label}</Link> : <span style={{ color: "#fff", fontWeight: 600 }}>{bc.label}</span>}
                  {idx < breadcrumbs.length - 1 && <span style={{ margin: "0 8px" }}>/</span>}
                </span>
              ))}
            </nav>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-end" }}>
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                  {project.category && (
                    <span style={{
                      background: "#0ea5a0",
                      color: "#fff",
                      borderRadius: 999,
                      padding: "6px 18px",
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: 0.2,
                      boxShadow: "0 2px 8px rgba(14,165,160,0.18)",
                      marginRight: 8,
                    }}>{project.category}</span>
                  )}
                  <span style={{ fontSize: 15, color: "#e0e6ef" }}>{project.year}</span>
                </div>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 800, margin: 0, lineHeight: 1.08 }}>{project.title}</h1>
                <div style={{ marginTop: 18, display: "flex", gap: 22, flexWrap: "wrap", fontSize: 17, fontWeight: 500 }}>
                  <span><i className="bi bi-geo-alt" /> {project.location}</span>
                  {project.area && <span><i className="bi bi-pencil-ruler" /> {project.area}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bối cảnh & Mục tiêu */}
      <section style={{ background: "#fff", padding: "clamp(44px, 7vw, 72px) 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 44, alignItems: "center", padding: "0 24px" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 18, color: "#0f1f45" }}>Bối cảnh & Mục tiêu</h2>
            <div style={{ color: "#3d4b5f", fontSize: 18, lineHeight: 1.7 }}>
              {project.context || "(Mô tả bối cảnh & mục tiêu dự án sẽ hiển thị ở đây)"}
            </div>
          </div>
          {project.contextImage && (
            <div style={{ flex: 1, minWidth: 260, textAlign: "center" }}>
              <img src={project.contextImage} alt="Bản đồ/ảnh minh họa" style={{ width: "100%", maxWidth: 440, borderRadius: 18, boxShadow: "0 4px 18px rgba(0,0,0,0.10)" }} />
            </div>
          )}
        </div>
      </section>

      {/* Giải pháp chính */}
      <section style={{ background: "#f8fafc", padding: "clamp(44px, 7vw, 72px) 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: 30, fontWeight: 700, marginBottom: 18, color: "#0f1f45" }}>Giải pháp chính</h2>
          <p style={{ textAlign: "center", color: "#5a6a7a", fontSize: 17, marginBottom: 32 }}>
            Các giải pháp quy hoạch và thiết kế được đề xuất nhằm tối ưu hóa không gian, hạ tầng và môi trường sống.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
            {(project.solutions || [
              { icon: "bi-grid-3x3-gap", title: "Tổ chức không gian", desc: "Quy hoạch không gian hợp lý, tối ưu hóa mật độ xây dựng và tạo hệ thống không gian công cộng liên kết." },
              { icon: "bi-map", title: "Hạ tầng kỹ thuật", desc: "Thiết kế hệ thống hạ tầng đồng bộ, hiện đại, đáp ứng nhu cầu phát triển dài hạn." },
              { icon: "bi-building", title: "Kiến trúc cảnh quan", desc: "Thiết kế kiến trúc hài hòa với cảnh quan, thể hiện bản sắc văn hóa địa phương." },
              { icon: "bi-leaf", title: "Môi trường xanh", desc: "Tích hợp không gian xanh, giải pháp bền vững và thân thiện với môi trường." },
            ]).map((item, idx) => (
              <div key={idx} style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(13,28,56,0.06)", padding: 32, minHeight: 160, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
                <i className={`bi ${item.icon || "bi-grid-3x3-gap"}`} style={{ fontSize: 32, color: "#0ea5a0", marginBottom: 12 }} />
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "10px 0 8px", color: "#0f1f45" }}>{item.title}</h3>
                <div style={{ color: "#4a5a6a", fontSize: 16 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hình ảnh dự án */}
      <section style={{ background: "#fff", padding: "clamp(44px, 7vw, 72px) 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: 30, fontWeight: 700, marginBottom: 18, color: "#0f1f45" }}>Hình ảnh dự án</h2>
          <p style={{ textAlign: "center", color: "#5a6a7a", fontSize: 17, marginBottom: 32 }}>
            Bản đồ, sơ đồ, mặt bằng và phối cảnh minh họa
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
            {(project.gallery || [project.image, project.coverImage].filter(Boolean)).slice(0, 4).map((img, idx) => (
              <div key={idx} style={{ background: "#f8fafc", borderRadius: 18, minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px rgba(13,28,56,0.04)" }}>
                {img ? (
                  <img src={img} alt={`Hình ảnh ${idx + 1}`} style={{ width: "100%", maxHeight: 320, objectFit: "cover", borderRadius: 14 }} />
                ) : (
                  <span style={{ color: "#b0b8c2" }}>Không có ảnh</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Giá trị mang lại */}
      {/* DEBUG: log valueList */}
      // eslint-disable-next-line no-console
      console.log('valueList:', project.valueList);
      {(project.valueList || project.valueTitle || project.valueDesc) && (
        <section style={{ background: '#099', padding: '56px 0 72px', width: '100%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ textAlign: 'center', fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: 0.2 }}>
              {project.valueTitle || 'Giá trị mang lại'}
            </h2>
            <p style={{ textAlign: 'center', color: '#e0f7f7', fontSize: 18, marginBottom: 38 }}>
              {project.valueDesc || 'Dự án tạo ra những giá trị tích cực cho sự phát triển kinh tế, xã hội và môi trường'}
            </p>
            {Array.isArray(project.valueList) && project.valueList.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
                {project.valueList.map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid #6fdad1', borderRadius: 18, padding: '32px 28px', minWidth: 280, flex: '1 1 320px', color: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                    <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>{item.title}</div>
                    <div style={{ fontSize: 16, color: '#e0f7f7' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: '#e0f7f7', fontSize: 18, marginTop: 32 }}>
                Chưa có dữ liệu giá trị cụ thể cho dự án này.
              </div>
            )}
          </div>
        </section>
      )}
      {/* Dự án liên quan */}
      <section style={{ background: '#fff', padding: '56px 0 72px', width: '100%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#181c32', margin: 0 }}>Dự án liên quan</h2>
            <Link to="/Project" style={{ color: '#0ea5a0', fontWeight: 600, fontSize: 17, textDecoration: 'none' }}>Xem tất cả &rarr;</Link>
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            {Object.values(projectsData)
              .filter(p => String(p.id) !== String(id))
              .slice(0, 3)
              .map((p, idx) => (
                <Link
                  to={`/projects/${p.id}`}
                  key={p.id}
                  style={{
                    flex: '1 1 320px',
                    maxWidth: 370,
                    background: '#fff',
                    borderRadius: 18,
                    boxShadow: '0 2px 16px rgba(13,28,56,0.08)',
                    textDecoration: 'none',
                    color: '#181c32',
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 280,
                    overflow: 'hidden',
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  <div style={{ width: '100%', height: 180, overflow: 'hidden', background: '#f7f8fa' }}>
                    <img
                      src={p.avatar || (Array.isArray(p.images) && p.images[0]) || ''}
                      alt={p.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '18px 18px 22px' }}>
                    <div style={{ marginBottom: 10 }}>
                      {p.category && (
                        <span style={{
                          background: p.category.includes('quy-hoach') ? '#0ea5a0' : p.category.includes('thiet-ke') ? '#3bb0ff' : '#f7b731',
                          color: '#fff',
                          borderRadius: 8,
                          padding: '4px 14px',
                          fontWeight: 700,
                          fontSize: 13,
                          letterSpacing: 0.2,
                          marginRight: 8,
                        }}>
                          {p.category === 'quy-hoach-do-thi' ? 'Quy hoạch đô thị'
                            : p.category === 'quy-hoach' ? 'Quy hoạch'
                            : p.category === 'thiet-ke-cong-trinh' ? 'Thiết kế công trình'
                            : p.category === 'thiet-ke-canh-quan' ? 'Thiết kế cảnh quan'
                            : 'Khác'}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, minHeight: 48 }}>{p.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#6b7280', fontSize: 15 }}>
                      <span><i className="bi bi-geo-alt" /> {p.location || 'Hà Nội'}</span>
                      <span>{p.year || '2023'}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectProfile;
