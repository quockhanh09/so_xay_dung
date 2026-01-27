import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";
import bgImage from "../assets/img/sxd-ab6.png";
import sxdbg9 from "../assets/img/sxd-ab9.png";
import projectsData from '../data/projects.json';
import { getProjectImageByFileName } from '../utils/projectImageLoader';

function ProjectCategory({ category, title }) {
  // Horizontal scroll/drag logic
  const scrollRef = useRef(null);
  // Modal state
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalImages, setModalImages] = React.useState([]);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

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
      const walk = (x - startX) * 1.1;
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

  // Filter projects by correct category
  const projectCards = Object.keys(projectsData)
    .map((id) => {
      const project = projectsData[id];
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
        category: project.category,
      };
    })
    .filter(p => p.category === category);
  // Only show first 10
  const paginatedCards = projectCards.slice(0, 10);

  // Modal handlers
  const openModal = (images, idx = 0) => {
    setModalImages(images);
    setCurrentImageIndex(idx);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
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
    }, 3000);
    return () => clearInterval(interval);
  }, [isModalOpen, modalImages]);

  // Title mapping for navigation highlight
  const navTitles = [
    { path: "/quy-hoach-do-thi", label: "QUY HOẠCH", cat: "quy-hoach-do-thi" },
    { path: "/thiet-ke-cong-trinh", label: "THIẾT KẾ CÔNG TRÌNH", cat: "thiet-ke-cong-trinh" },
    { path: "/ha-tang-ky-thuat", label: "HẠ TẦNG KỸ THUẬT", cat: "ha-tang-ky-thuat" },
    { path: "/thiet-ke-canh-quan", label: "THIẾT KẾ CẢNH QUAN", cat: "thiet-ke-canh-quan" },
  ];

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
            {title}
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

      {/* Category Navigation */}
      <section
        style={{
          background: '#fff',
          padding: '48px 0',
          width: '100%',
        }}
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
          {navTitles.map(nav => (
            <Link key={nav.path} to={nav.path} style={{ textDecoration: 'none' }}>
              <div style={{ fontFamily: 'serif', fontSize: '2rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap', cursor: 'pointer', opacity: nav.cat === category ? 1 : 0.5 }}>
                <span style={{ backgroundImage: `url(${sxdbg9})`, backgroundSize: 'cover', backgroundPosition: 'center', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', MozBackgroundClip: 'text', MozTextFillColor: 'transparent', display: 'inline-block', fontWeight: 400 }}>{nav.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Grid cards - horizontal scroll */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0 80px',
          overflowX: 'auto',
          maxWidth: 3200,
          margin: '90px auto 0 auto',
          padding: '0 80px 48px 80px',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          cursor: 'grab',
          userSelect: 'none',
          scrollBehavior: 'smooth',
        }}
        className="project-horizontal-scroll"
      >
        {paginatedCards.map((item) => (
          <div
            key={item.id}
            style={{
              minWidth: 1700,
              maxWidth: 2000,
              flex: '0 0 1700px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              gap: 0,
              transition: 'box-shadow 0.3s',
              marginBottom: 28,
              overflow: 'hidden',
            }}
          >
            {/* Image left */}
            <div
              style={{
                width: 1100,
                minWidth: 1100,
                height: 700,
                overflow: 'hidden',
                borderRadius: 0,
                transition: 'transform 0.3s ease',
                flexShrink: 0,
                cursor: 'pointer',
                position: 'relative',
              }}
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
            {/* Info right */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '80px 80px 80px 60px',
              }}
            >
              <div
                style={{
                  fontFamily: 'serif',
                  fontSize: '4.2rem',
                  fontWeight: 600,
                  color: '#222',
                  lineHeight: 1.1,
                  marginBottom: 38,
                  background: 'none',
                  border: 'none',
                  display: 'inline',
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: 'serif',
                  fontSize: '2.2rem',
                  color: '#8a8a8a',
                  letterSpacing: '0.3px',
                  marginBottom: 28,
                  background: 'none',
                  border: 'none',
                  display: 'inline',
                }}
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
                    maxWidth: '60vw',
                    maxHeight: '80vh',
                    minWidth: 400,
                    minHeight: 300,
                    objectFit: 'contain',
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
      </div>
    </>
  );
}

export default ProjectCategory;