import React, { useState, useRef, useEffect } from "react";
import ProjectMap from "./ProjectMap";
import { Link } from "react-router-dom";
import '../style/ProjectNavResponsive.css';

// Import hình ảnh
import bgImage from "../assets/img/sxd-ab6.png";
import sxdbg9 from "../assets/img/sxd-ab9.png";

// Import dữ liệu project từ JSON
import projectsData from '../data/projects.json';
import { getProjectImageByFileName } from '../utils/projectImageLoader';
import projectTeamData from '../data/project_team.json';


function Project() {
  const [page, setPage] = useState(1);
  // Kéo ngang bằng chuột cho project card
  const scrollRef = useRef(null);
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]); // array of image urls
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    const onMouseDown = (e) => {
      isDown = true;
      slider.classList.add('active');
      slider.style.cursor = 'grabbing';
      slider.style.userSelect = 'none';
      startX = e.pageX - slider.getBoundingClientRect().left;
      scrollLeft = slider.scrollLeft;
    };
    const onMouseLeave = () => {
      isDown = false;
      slider.classList.remove('active');
      slider.style.cursor = 'grab';
      slider.style.userSelect = '';
    };
    const onMouseUp = () => {
      isDown = false;
      slider.classList.remove('active');
      slider.style.cursor = 'grab';
      slider.style.userSelect = '';
    };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.getBoundingClientRect().left;
      const walk = (x - startX) * 1.1; // tăng tốc độ kéo
      slider.scrollLeft = scrollLeft - walk;
    };
    // Touch events
    let touchStartX = 0;
    let touchScrollLeft = 0;
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = slider.scrollLeft;
    };
    const onTouchMove = (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - touchStartX) * 1.1;
      slider.scrollLeft = touchScrollLeft - walk;
    };
    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);
    slider.addEventListener('touchstart', onTouchStart);
    slider.addEventListener('touchmove', onTouchMove);
    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  // Tự động tạo danh sách project từ projects.json
  const projectCards = Object.keys(projectsData).map((id) => {
    const project = projectsData[id];
    // Lấy images đúng chuẩn (chỉ link hoặc file, ưu tiên link)
    let images = [];
    if (Array.isArray(project.images) && project.images.length > 0) {
      images = project.images.map(img => {
        if (typeof img === 'string' && (img.startsWith('http://') || img.startsWith('https://'))) {
          return img;
        } else {
          return getProjectImageByFileName(img);
        }
      });
    }
    return {
      id: parseInt(id),
      title: project.title,
      avatar: project.avatar,
      description: project.description,
      images,
      popupText: project.popupText,
    };
  });

  const rowsPerPage = 6; // 6 hàng, mỗi hàng 4 thẻ
  const itemsPerPage = rowsPerPage * 4;
  const totalPages = Math.max(1, Math.ceil(projectCards.length / itemsPerPage));
  // Chỉ lấy 10 project đầu tiên
  const paginatedCards = projectCards.slice(0, 10);

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
          padding: 0,
          textAlign: "center",
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
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "3.5rem",
              fontWeight: 500,
              letterSpacing: "2px",
              marginBottom: "20px",
              fontFamily: "serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            UDI's PROJECTS
          </h1>
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "#fff",
              margin: "0 auto 0",
              marginBottom: "10px",
              opacity: 0.7,
            }}
          ></div>
        </div>
      </section>

      {/* Tin tức gần đây */}
      <section
        style={{
          background: '#fff',
          padding: '48px 0',
          width: '100%',
        }}
        className="project-section"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '80px',
            maxWidth: 1400,
            margin: '0 auto',
            minHeight: 100,
            width: '100%',
          }}
        >
          {/* QUY HOẠCH */}
          <Link to="/quy-hoach-do-thi" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap', cursor: 'pointer' }}>
              <span
                style={{
                  backgroundImage: `url(${sxdbg9})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  display: 'inline-block',
                  fontWeight: 400,
                }}
              >
                QUY HOẠCH
              </span>
            </div>
          </Link>
          {/* THIẾT KẾ CÔNG TRÌNH */}
          <Link to="/thiet-ke-cong-trinh" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap', cursor: 'pointer' }}>
              <span
                style={{
                  backgroundImage: `url(${sxdbg9})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  display: 'inline-block',
                  fontWeight: 400,
                }}
              >
                THIẾT KẾ CÔNG TRÌNH
              </span>
            </div>
          </Link>
          {/* HẠ TẦNG KỸ THUẬT */}
          <Link to="/ha-tang-ky-thuat" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap', cursor: 'pointer' }}>
              <span
                style={{
                  backgroundImage: `url(${sxdbg9})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  display: 'inline-block',
                  fontWeight: 400,
                }}
              >
                HẠ TẦNG KỸ THUẬT
              </span>
            </div>
          </Link>
          {/* THIẾT KẾ CẢNH QUAN */}
          <Link to="/thiet-ke-canh-quan" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap', cursor: 'pointer' }}>
              <span
                style={{
                  backgroundImage: `url(${sxdbg9})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  display: 'inline-block',
                  fontWeight: 400,
                }}
              >
                THIẾT KẾ CẢNH QUAN
              </span>
            </div>
          </Link>
        </div>

        {/* Grid cards */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '80px 0',
            overflowY: 'auto',
            maxWidth: 1400,
            margin: '90px auto 0 auto',
            padding: '0 80px 48px 80px',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            cursor: 'default',
            userSelect: 'none',
            scrollBehavior: 'smooth',
          }}
          className="project-horizontal-scroll"
        >
          {paginatedCards.map((item) => (
            <div
              key={item.id}
              style={{
                width: '100%',
                maxWidth: 1400,
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                gap: 0,
                transition: 'box-shadow 0.3s',
                marginBottom: 28,
                overflow: 'hidden',
              }}
              className="project-card-container"
            >
              <div
                style={{
                  width: '100%',
                  height: 500,
                  overflow: 'hidden',
                  borderRadius: 0,
                  transition: 'transform 0.3s ease',
                  flexShrink: 0,
                  cursor: 'pointer',
                  position: 'relative',
                }}
                className="project-card-image"
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={() => openModal(item.images, 0)}
                title="Xem ảnh lớn"
              >
                <img
                  src={item.avatar}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{position:'absolute',bottom:18,right:18,background:'rgba(0,0,0,0.5)',color:'#fff',padding:'6px 16px',borderRadius:8,fontSize:16,opacity:0.8,letterSpacing:1}}>Xem ảnh</div>
              </div>
              {/* Info below image */}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  padding: '40px 0',
                }}
                className="project-card-info"
              >
                <div
                  style={{
                    fontFamily: 'serif',
                    fontSize: '3rem',
                    fontWeight: 600,
                    color: '#222',
                    lineHeight: 1.1,
                    marginBottom: 16,
                    background: 'none',
                    border: 'none',
                    display: 'inline',
                  }}
                  className="project-card-title"
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontFamily: 'serif',
                    fontSize: '1.5rem',
                    color: '#8a8a8a',
                    letterSpacing: '0.3px',
                    marginBottom: 28,
                    background: 'none',
                    border: 'none',
                    display: 'inline',
                  }}
                  className="project-card-location"
                >
                  {item.location}
                </div>
              </div>
            </div>
          ))}
                {/* Modal popup for image gallery */}
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
                        // borderRadius: 12, // bỏ bo góc
                        // boxShadow: '0 8px 48px rgba(0,0,0,0.25)', // bỏ shadow
                        padding: 0,
                        flexDirection: 'row',
                        gap: 0,
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      {/* Prev button */}
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
                      {/* Image + text */}
                      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:24}}>
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
                        {/* Text bên phải ảnh */}
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
                          {/* Hiển thị nhiều popupText nếu là array */}
                          {(() => {
                            const project = projectCards.find(p => p.images && p.images.includes(modalImages[currentImageIndex]));
                            if (!project) return null;
                            if (Array.isArray(project.popupText)) {
                              return project.popupText.map((txt, idx) => (
                                <div key={idx} style={{fontSize:17,color:'#fff',opacity:0.98,marginBottom:4}}>{txt}</div>
                              ));
                            } else if (typeof project.popupText === 'string') {
                              return <div style={{fontSize:17,color:'#fff',opacity:0.98}}>{project.popupText}</div>;
                            } else {
                              return <>
                                <div style={{fontSize:20,fontWeight:600,color:'#fff',marginBottom:4,opacity:0.98}}>{project.title}</div>
                                {project.location && <div style={{fontSize:15,color:'#e0e0e0',opacity:0.85}}>{project.location}</div>}
                              </>;
                            }
                          })()}
                        </div>
                      </div>
                      {/* Next button */}
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
                      {/* Close button */}
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
                      {/* Image index indicator */}
                      {modalImages.length > 1 && (
                        <div style={{position:'absolute',bottom:14,right:14,color:'#fff',background:'rgba(0,0,0,0.5)',padding:'4px 12px',borderRadius:8,fontSize:13,opacity:0.8,letterSpacing:1}}>
                          {currentImageIndex+1} / {modalImages.length}
                        </div>
                      )}
                    </div>
                  </div>
                )}
          {/* Map as last scrollable item */}
          <div style={{ width: '100%', maxWidth: 1400, flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', marginBottom: 28, gap: '40px' }} className="project-map-container">
            <div style={{ width: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} className="project-map-wrapper">
              <ProjectMap projects={projectCards} style={{ width: '100%', height: '100%', borderRadius: 16, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', margin: '0 auto' }} />
            </div>
            {/* Thông tin dự án bằng tiếng Việt, lấy từ JSON */}
            <div style={{ width: '100%', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0 }} className="project-team-section">
              <h2 style={{ fontFamily: 'serif', fontSize: 38, color: '#b6a484', fontWeight: 600, marginBottom: 24 }} className="project-team-title">Thành phần dự án</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '32px',
                fontSize: 15,
                color: '#222',
                width: '100%',
                marginBottom: 18
              }} className="project-team-grid">
                {(() => {
                  // Chia đều các mục vào 3 cột
                  const cols = [[], [], []];
                  projectTeamData.columns.forEach((col, idx) => {
                    cols[idx % 3].push(col);
                  });
                  return cols.map((group, colIdx) => (
                    <div key={colIdx}>
                      {group.map((section, secIdx) => (
                        <div key={secIdx} style={{ marginBottom: 18 }}>
                          <div style={{ color: '#aaa', fontSize: 12, fontWeight: 600, letterSpacing: 1, marginBottom: 6 }}>{section.title}</div>
                          <div>
                            {section.members.map((mem, mIdx) => (
                              <div key={mIdx}>
                                {mem.link && mem.link.startsWith('http') ? (
                                  <a href={mem.link} target="_blank" rel="noopener noreferrer" style={{ color: '#222', textDecoration: 'none', fontSize: 14, fontFamily: 'Times New Roman, Times, serif' }}>{mem.name}</a>
                                ) : (
                                  <Link to={mem.link} style={{ color: '#222', textDecoration: 'none', fontSize: 14, fontFamily: 'Times New Roman, Times, serif' }}>{mem.name}</Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 40 }}>
            <button
              onClick={() => goPage(page - 1)}
              disabled={page === 1}
              style={{
                padding: '10px 16px',
                border: '1px solid #ccc',
                background: page === 1 ? '#f5f5f5' : '#fff',
                cursor: page === 1 ? 'not-allowed' : 'pointer',
                borderRadius: 4,
                fontFamily: 'serif',
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
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    border: active ? '1px solid #222' : '1px solid #ccc',
                    background: active ? '#222' : '#fff',
                    color: active ? '#fff' : '#333',
                    cursor: 'pointer',
                    fontFamily: 'serif',
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
                padding: '10px 16px',
                border: '1px solid #ccc',
                background: page === totalPages ? '#f5f5f5' : '#fff',
                cursor: page === totalPages ? 'not-allowed' : 'pointer',
                borderRadius: 4,
                fontFamily: 'serif',
              }}
            >
              Next
            </button>
          </div>
        )}
      </section>

        <section style={{ background: '#fff', padding: '60px 0 80px 0', width: '100%' }}>
        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          maxWidth: 1400,
          margin: '0 auto 60px auto',
          alignItems: 'end',
        }}>
          {/* Stat 1 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2.7rem', color: '#222', fontWeight: 400, letterSpacing: 1, marginBottom: 8 }}>3450</div>
            <div style={{ fontSize: '1rem', color: '#444', letterSpacing: 1, marginBottom: 12 }}>SQUARE AREAS</div>
            <div style={{ height: 3, background: '#d2c6ad', width: '90%', margin: '0 auto', opacity: 0.7 }}></div>
          </div>
          {/* Stat 2 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2.7rem', color: '#222', fontWeight: 400, letterSpacing: 1, marginBottom: 8 }}>2422</div>
            <div style={{ fontSize: '1rem', color: '#444', letterSpacing: 1, marginBottom: 12 }}>CAR PARKING</div>
            <div style={{ height: 3, background: '#d2c6ad', width: '90%', margin: '0 auto', opacity: 0.7 }}></div>
          </div>
          {/* Stat 3 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2.7rem', color: '#222', fontWeight: 400, letterSpacing: 1, marginBottom: 8 }}>1890</div>
            <div style={{ fontSize: '1rem', color: '#444', letterSpacing: 1, marginBottom: 12 }}>APARTMENTS</div>
            <div style={{ height: 3, background: '#d2c6ad', width: '90%', margin: '0 auto', opacity: 0.7 }}></div>
          </div>
          {/* Stat 4 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2.7rem', color: '#222', fontWeight: 400, letterSpacing: 1, marginBottom: 8 }}>4125</div>
            <div style={{ fontSize: '1rem', color: '#444', letterSpacing: 1, marginBottom: 12 }}>ROOMS</div>
            <div style={{ height: 3, background: '#d2c6ad', width: '90%', margin: '0 auto', opacity: 0.7 }}></div>
          </div>
        </div>
        {/* Title & Button */}
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <div style={{
            fontFamily: 'serif',
            fontSize: '3.2rem',
            color: '#c3b393',
            fontWeight: 400,
            marginBottom: 18,
            letterSpacing: 1,
          }}>
            HOME IS WAITING FOR YOU HERE
          </div>
          <div style={{
            fontFamily: 'serif',
            fontSize: '2.7rem',
            color: '#333',
            fontWeight: 400,
            marginBottom: 32,
            letterSpacing: 1,
          }}>
            SCHEDULE A TOUR
          </div>
          <button
            style={{
              background: '#b6a484',
              color: '#fff',
              border: 'none',
              borderRadius: 2,
              padding: '12px 36px',
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '1px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#a08c6a')}
            onMouseOut={e => (e.currentTarget.style.background = '#b6a484')}
          >
            BOOK A VISIT
          </button>
        </div>
      </section>
      {/* Sự kiện */}

     
    </>
  );
}

export default Project;
