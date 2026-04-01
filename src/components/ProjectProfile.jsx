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

  // Lấy danh sách ảnh động (nhiều ảnh, nhiều mục)
  let galleryImages = [];
  if (project.images && Array.isArray(project.images) && project.images.length > 0) {
    galleryImages = project.images.map(img => getProjectImageByFileName(img) || img);
  } else if (project.largeImages && Array.isArray(project.largeImages) && project.largeImages.length > 0) {
    galleryImages = project.largeImages.map(img => getProjectImageByFileName(img) || img);
  } else {
    galleryImages = [displayImage];
  }

  // Lấy các mục động (sections)
  const sections = Array.isArray(project.sections) ? project.sections : [];

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

      {/* Body content động */}
      <section style={{ padding: "24px 24px 40px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "serif", fontSize: 32, lineHeight: 1.2 }}>Dự án {project.title}</h2>
          <p style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>{project.description}</p>
          {/* Render các mục động nếu có */}
          {sections.map((sec, idx) => (
            <div key={idx} style={{ marginTop: 40 }}>
              {sec.title && (
                <h2 style={{ fontFamily: "serif", fontSize: 32, lineHeight: 1.2 }}>{sec.title}</h2>
              )}
              {Array.isArray(sec.texts)
                ? sec.texts.map((txt, i) => (
                    <p key={i} style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>{txt}</p>
                  ))
                : sec.text && (
                    <p style={{ color: "#333", fontSize: 18, lineHeight: 1.8 }}>{sec.text}</p>
                  )}
              {/* Render ảnh trong mục nếu có */}
              {Array.isArray(sec.images) && sec.images.length > 0 && (
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap", margin: "24px 0" }}>
                  {sec.images.map((img, j) => (
                    <img
                      key={j}
                      src={getProjectImageByFileName(img) || img}
                      alt={sec.title || `section-img-${j}`}
                      style={{ width: "48%", borderRadius: 10, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 12 }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery nhiều ảnh cuối bài */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 32,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}>
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx+1}`}
              style={{ width: galleryImages.length > 1 ? "48%" : "80%", height: "auto", borderRadius: 12, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", marginBottom: 16 }}
            />
          ))}
        </div>
      </section>

      {/* Giá trị mang lại */}
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
            <a href="/Project" style={{ color: '#0ea5a0', fontWeight: 600, fontSize: 17, textDecoration: 'none' }}>Xem tất cả &rarr;</a>
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            {Object.values(projectsData)
              .filter(p => String(p.id) !== String(id))
              .slice(0, 3)
              .map((p, idx) => (
                <a
                  href={`/projects/${p.id}`}
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
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectProfile;
