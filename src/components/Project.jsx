import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../style/ProjectNavResponsive.css';

// Import hình ảnh
import bgImage from "../assets/img/sxd-ab6.png";

// Import dữ liệu project từ JSON
import projectsData from '../data/projects.json';
import { getProjectImageByFileName } from '../utils/projectImageLoader';

const resolveProjectAsset = (asset) => {
  if (!asset || typeof asset !== 'string') {
    return '';
  }

  if (asset.startsWith('http://') || asset.startsWith('https://')) {
    return asset;
  }

  return getProjectImageByFileName(asset) || '';
};


function Project() {
  const [page, setPage] = useState(1);
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]); // array of image urls
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedScale, setSelectedScale] = useState('all');

  const handleCardImageError = (event, fallbackSrc) => {
    if (event.currentTarget.dataset.fallbackApplied === 'true') {
      event.currentTarget.src = bgImage;
      return;
    }

    event.currentTarget.dataset.fallbackApplied = 'true';
    event.currentTarget.src = fallbackSrc || bgImage;
  };

  // Tự động tạo danh sách project từ projects.json
  const projectCards = Object.keys(projectsData).map((id) => {
    const project = projectsData[id];
    const numericId = parseInt(id, 10);
    // Lấy images đúng chuẩn (chỉ link hoặc file, ưu tiên link)
    let images = [];
    if (Array.isArray(project.images) && project.images.length > 0) {
      images = project.images
        .map((img) => resolveProjectAsset(img))
        .filter(Boolean);
    }

    const avatar = resolveProjectAsset(project.avatar) || images[0] || bgImage;
    const typeKey = (() => {
      if (project.category === 'quy-hoach-do-thi') {
        return numericId % 4 === 0 ? 'quy-hoach-nong-thon' : 'quy-hoach-do-thi';
      }
      if (project.category === 'thiet-ke-cong-trinh') {
        return 'thiet-ke-cong-trinh';
      }
      if (project.category === 'thiet-ke-canh-quan' || project.category === 'ha-tang-ky-thuat') {
        return 'thiet-ke-do-thi';
      }
      return 'quy-hoach';
    })();

    const scaleKey = (() => {
      if (typeKey === 'quy-hoach-do-thi' || typeKey === 'quy-hoach-nong-thon' || typeKey === 'quy-hoach') {
        const planningScales = ['quy-hoach-tong-the', 'quy-hoach-phan-khu', 'quy-hoach-chi-tiet'];
        return planningScales[numericId % planningScales.length];
      }
      return numericId % 2 === 0 ? 'thiet-ke-kien-truc' : 'thiet-ke-do-thi';
    })();

    const locations = ['Ha Noi', 'Bac Giang', 'Da Nang', 'Hai Phong', 'Ninh Binh', 'Quang Ninh'];
    const years = [2023, 2022, 2024, 2025, 2021, 2026];
    const excerpt = project.description || (Array.isArray(project.popupText) ? project.popupText[0] : project.popupText) || '';

    return {
      id: numericId,
      title: project.title,
      category: project.category,
      avatar,
      description: excerpt,
      images,
      popupText: project.popupText,
      typeKey,
      scaleKey,
      location: locations[numericId % locations.length],
      year: years[numericId % years.length],
    };
  });

  const typeOptions = [
    { key: 'all', label: 'Tất cả' },
    { key: 'quy-hoach', label: 'Quy hoạch' },
    { key: 'quy-hoach-do-thi', label: 'Quy hoạch đô thị' },
    { key: 'thiet-ke-cong-trinh', label: 'Thiết kế công trình' },
    { key: 'thiet-ke-do-thi', label: 'Thiết kế đô thị' },
    { key: 'quy-hoach-nong-thon', label: 'Quy hoạch nông thôn' },
  ];

  const scaleOptions = [
    { key: 'all', label: 'Tất cả' },
    { key: 'quy-hoach-tong-the', label: 'Quy hoạch tổng thể' },
    { key: 'quy-hoach-phan-khu', label: 'Quy hoạch phân khu' },
    { key: 'quy-hoach-chi-tiet', label: 'Quy hoạch chi tiết' },
    { key: 'thiet-ke-kien-truc', label: 'Thiết kế kiến trúc' },
    { key: 'thiet-ke-do-thi', label: 'Thiết kế đô thị' },
  ];

  const badgeLabels = {
    'quy-hoach': 'Quy hoạch',
    'quy-hoach-do-thi': 'Quy hoạch đô thị',
    'thiet-ke-cong-trinh': 'Thiết kế công trình',
    'thiet-ke-do-thi': 'Thiết kế đô thị',
    'quy-hoach-nong-thon': 'Quy hoạch nông thôn',
  };

  const filteredProjects = projectCards.filter((project) => {
    const matchesType = selectedType === 'all'
      || project.typeKey === selectedType
      || (selectedType === 'quy-hoach' && project.category === 'quy-hoach-do-thi');
    const matchesScale = selectedScale === 'all' || project.scaleKey === selectedScale;
    return matchesType && matchesScale;
  });

  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage));
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedCards = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setPage(1);
  }, [selectedType, selectedScale]);

  const goPage = (p) => {
    const next = Math.min(Math.max(p, 1), totalPages);
    setPage(next);
  };

  // Modal handlers
  const openModal = (images, idx = 0) => {
    setModalImages(images);
    setCurrentImageIndex(idx);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // prevent scroll
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
    setCurrentImageIndex(0);
    document.body.style.overflow = '';
  };
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % modalImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  // Auto-slide images in modal
  useEffect(() => {
    if (!isModalOpen || modalImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % modalImages.length);
    }, 3000); // 3 giây chuyển ảnh
    return () => clearInterval(interval);
  }, [isModalOpen, modalImages]);

  return (
    <>
      {/* Portfolio Details Section */}
      <section
        id="portfolio-details"
        className="portfolio-details section"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "0 24px",
          textAlign: "left",
          position: "relative",
          minHeight: "60vh",
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
            backgroundColor: "rgba(0,0,0,0.5)",
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
            maxWidth: "1400px",
            margin: "0 auto",
            paddingTop: "56px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              color: "rgba(255,255,255,0.92)",
              fontSize: "0.95rem",
              fontWeight: 400,
              letterSpacing: "0.2px",
              marginBottom: "14px",
              textShadow: "0 2px 10px rgba(0,0,0,0.35)",
            }}
          >
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Trang chủ
            </Link>{" "}
            <span style={{ opacity: 0.75 }}>/</span>{" "}
            <span style={{ opacity: 0.95 }}>Dự án tiêu biểu</span>
          </div>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(3.2rem, 5vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "-1px",
              lineHeight: 0.92,
              marginBottom: 0,
              fontFamily: "serif",
              textShadow: "0 4px 18px rgba(0,0,0,0.42)",
              maxWidth: "360px",
              width: "100%",
            }}
          >
            Dự án
            <br />
            Tiêu biểu
          </h1>
        </div>
      </section>

      <section
        style={{
          background: '#f5f3ef',
          padding: '56px 0 72px',
          width: '100%',
        }}
        className="project-section"
      >
        <div
          className="project-grid-shell"
          style={{
            display: 'flex',
            gap: '24px',
            maxWidth: 1500,
            margin: '0 auto',
            padding: '0 20px',
            alignItems: 'flex-start',
          }}
        >
          <aside
            className="project-filter-sidebar"
            style={{
              width: 220,
              minWidth: 220,
              background: '#fbfaf8',
              borderRadius: 24,
              padding: '24px 18px',
              boxShadow: '0 18px 40px rgba(15, 23, 42, 0.05)',
              position: 'sticky',
              top: 24,
            }}
          >
            <div className="project-filter-title" style={{ fontSize: 34, fontWeight: 700, color: '#0f172a', marginBottom: 24, fontFamily: 'serif' }}>
              Bộ lọc
            </div>

            <div style={{ marginBottom: 28 }}>
              <div className="project-filter-group-title" style={{ fontSize: 16, fontWeight: 600, color: '#374151', marginBottom: 12 }}>
                Loại hình
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {typeOptions.map((option) => {
                  const active = selectedType === option.key;
                  return (
                    <button
                      className={`project-filter-button${active ? ' is-active' : ''}`}
                      key={option.key}
                      onClick={() => setSelectedType(option.key)}
                      style={{
                        border: 'none',
                        borderRadius: 8,
                        padding: '14px 16px',
                        textAlign: 'left',
                        fontSize: 16,
                        fontWeight: active ? 700 : 500,
                        color: active ? '#fff' : '#1f2937',
                        background: active ? '#149b90' : '#efefef',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="project-filter-group-title" style={{ fontSize: 16, fontWeight: 600, color: '#374151', marginBottom: 12 }}>
                Quy mô
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {scaleOptions.map((option) => {
                  const active = selectedScale === option.key;
                  return (
                    <button
                      className={`project-filter-button${active ? ' is-active' : ''}`}
                      key={option.key}
                      onClick={() => setSelectedScale(option.key)}
                      style={{
                        border: 'none',
                        borderRadius: 8,
                        padding: '14px 16px',
                        textAlign: 'left',
                        fontSize: 16,
                        fontWeight: active ? 700 : 500,
                        color: active ? '#fff' : '#1f2937',
                        background: active ? '#149b90' : '#efefef',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="project-grid-content" style={{ flex: 1, minWidth: 0 }}>
            <div className="project-grid-count" style={{ fontSize: 18, color: '#4b5563', marginBottom: 28 }}>
              Hiển thị {paginatedCards.length} dự án
            </div>

            <div
              className="project-card-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '28px',
              }}
            >
              {paginatedCards.map((item) => (
                <article
                  className="project-card"
                  key={item.id}
                  style={{
                    background: '#fff',
                    borderRadius: 24,
                    overflow: 'hidden',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                    boxShadow: '0 22px 50px rgba(15, 23, 42, 0.07)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    className="project-card-media"
                    style={{
                      position: 'relative',
                      height: 190,
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onClick={() => openModal(item.images, 0)}
                    title="Xem ảnh lớn"
                  >
                    <img
                      className="project-card-image"
                      src={item.avatar}
                      alt={item.title}
                      onError={(event) => handleCardImageError(event, item.images[0])}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        background: '#149b90',
                        color: '#fff',
                        padding: '8px 14px',
                        borderRadius: 999,
                        fontSize: 13,
                        fontWeight: 700,
                        lineHeight: 1,
                        boxShadow: '0 10px 24px rgba(20, 155, 144, 0.28)',
                      }}
                    >
                      {badgeLabels[item.typeKey] || 'Dự án'}
                    </div>
                  </div>

                  <div className="project-card-body" style={{ padding: '16px 18px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div
                      className="project-card-title"
                      style={{
                        color: '#1f2937',
                        fontSize: '1.06rem',
                        fontWeight: 700,
                        lineHeight: 1.32,
                        marginBottom: 10,
                        fontFamily: 'serif',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.title}
                    </div>

                    <div
                      className="project-card-description"
                      style={{
                        color: '#6b7280',
                        fontSize: 14,
                        lineHeight: 1.55,
                        marginBottom: 12,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.description}
                    </div>

                    <div className="project-card-meta" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#6b7280', fontSize: 14, marginTop: 'auto' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M12 21C15 17.4 18 14.7 18 10.5C18 6.91 15.31 4 12 4C8.69 4 6 6.91 6 10.5C6 14.7 9 17.4 12 21Z" stroke="#9ca3af" strokeWidth="1.8" />
                          <circle cx="12" cy="10" r="2.3" stroke="#9ca3af" strokeWidth="1.8" />
                        </svg>
                        {item.location}
                      </span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {paginatedCards.length === 0 && (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  padding: '40px 28px',
                  color: '#4b5563',
                  fontSize: 18,
                }}
              >
                Không có dự án phù hợp với bộ lọc hiện tại.
              </div>
            )}

            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 32 }}>
                <button
                  onClick={() => goPage(page - 1)}
                  disabled={page === 1}
                  style={{
                    padding: '12px 18px',
                    border: '1px solid #d1d5db',
                    background: page === 1 ? '#f3f4f6' : '#fff',
                    color: '#374151',
                    cursor: page === 1 ? 'not-allowed' : 'pointer',
                    borderRadius: 10,
                    fontWeight: 600,
                  }}
                >
                  Prev
                </button>
                {[...Array(totalPages)].map((_, i) => {
                  const p = i + 1;
                  const active = p === page;
                  return (
                    <button
                      key={p}
                      onClick={() => goPage(p)}
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        border: active ? '1px solid #149b90' : '1px solid #d1d5db',
                        background: active ? '#149b90' : '#fff',
                        color: active ? '#fff' : '#374151',
                        cursor: 'pointer',
                        fontWeight: 700,
                      }}
                    >
                      {p}
                    </button>
                  );
                })}
                <button
                  onClick={() => goPage(page + 1)}
                  disabled={page === totalPages}
                  style={{
                    padding: '12px 18px',
                    border: '1px solid #d1d5db',
                    background: page === totalPages ? '#f3f4f6' : '#fff',
                    color: '#374151',
                    cursor: page === totalPages ? 'not-allowed' : 'pointer',
                    borderRadius: 10,
                    fontWeight: 600,
                  }}
                >
                  Next
                </button>
              </div>
            )}

          </div>
        </div>

        {isModalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.85)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              transition: 'opacity 0.2s',
            }}
            onClick={closeModal}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                minWidth: 400,
                minHeight: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.01)',
                padding: 0,
                flexDirection: 'row',
                gap: 0,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {modalImages.length > 1 && (
                <button
                  onClick={prevImage}
                  style={{
                    position: 'absolute',
                    left: -40,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    fontSize: 20,
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                  title="Ảnh trước"
                >&#8592;</button>
              )}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
                <img
                  src={modalImages[currentImageIndex]}
                  alt="project large"
                  style={{
                    width: 1000,
                    height: 800,
                    maxWidth: 1000,
                    maxHeight: 800,
                    minWidth: 1000,
                    minHeight: 800,
                    objectFit: 'cover',
                    background: '#fff',
                    display: 'block',
                    margin: 0,
                  }}
                />
                <div style={{
                  minWidth: 180,
                  maxWidth: 320,
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 400,
                  opacity: 0.92,
                  fontFamily: 'serif',
                  lineHeight: 1.4,
                  padding: '12px 0 12px 18px',
                  borderLeft: '2px solid #b6a484',
                  background: 'rgba(0,0,0,0.10)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.18)',
                  wordBreak: 'break-word',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}>
                  {(() => {
                    const project = projectCards.find((p) => p.images && p.images.includes(modalImages[currentImageIndex]));
                    if (!project) return null;
                    if (Array.isArray(project.popupText)) {
                      return project.popupText.map((txt, idx) => (
                        <div key={idx} style={{ fontSize: 17, color: '#fff', opacity: 0.98, marginBottom: 4 }}>{txt}</div>
                      ));
                    }
                    if (typeof project.popupText === 'string') {
                      return <div style={{ fontSize: 17, color: '#fff', opacity: 0.98 }}>{project.popupText}</div>;
                    }
                    return <>
                      <div style={{ fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: 4, opacity: 0.98 }}>{project.title}</div>
                      {project.location && <div style={{ fontSize: 15, color: '#e0e0e0', opacity: 0.85 }}>{project.location}</div>}
                    </>;
                  })()}
                </div>
              </div>
              {modalImages.length > 1 && (
                <button
                  onClick={nextImage}
                  style={{
                    position: 'absolute',
                    right: -40,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    fontSize: 20,
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                  title="Ảnh tiếp theo"
                >&#8594;</button>
              )}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  background: 'rgba(0,0,0,0.7)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: 28,
                  height: 28,
                  fontSize: 16,
                  cursor: 'pointer',
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                }}
                title="Đóng"
              >&#10005;</button>
              {modalImages.length > 1 && (
                <div style={{ position: 'absolute', bottom: 14, right: 14, color: '#fff', background: 'rgba(0,0,0,0.5)', padding: '4px 12px', borderRadius: 8, fontSize: 13, opacity: 0.8, letterSpacing: 1 }}>
                  {currentImageIndex + 1} / {modalImages.length}
                </div>
              )}
            </div>
          </div>
        )}
      </section>


    </>
  );
}

export default Project;
