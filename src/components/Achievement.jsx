import { useState, useEffect, useRef } from "react";

import bgImage from "../assets/img/sxd-ab16.png";
import sxdbg7 from "../assets/img/sxd-ab7.png";
import sxdbg17 from "../assets/img/sxd-ab17.png";

import ProjectMap from "./ProjectMap";
import projectsData from '../data/projects.json';
import achievementTeam from '../data/achievement_team.json';

import achievementData from '../data/achievement.json';

function Achievement() {
  const scrollRef = useRef(null);
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
  // State and modal logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalAward, setModalAward] = useState(null);

  // Load achievement data
  // achievementData is imported at the top
  const awards = achievementData.awards || [];

  // Modal handlers
  const openModal = (award, imgIdx = 0) => {
    setModalAward(award);
    setModalImages(award.images || []);
    setCurrentImageIndex(imgIdx);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
    setCurrentImageIndex(0);
    setModalAward(null);
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

  return (
    <>
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
            ACHIEVEMENTS
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

      {/* Horizontal scrollable awards */}
      <section style={{ background: '#fff', padding: '60px 0', width: '100%' }}>
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '0 80px',
            overflowX: 'auto',
            maxWidth: 3200,
            margin: '0 auto',
            padding: '0 80px 48px 80px',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            cursor: 'grab',
            userSelect: 'none',
            scrollBehavior: 'smooth',
          }}
          className="achievement-horizontal-scroll"
        >
          {awards.map((award) => (
            <div
              key={award.id}
              style={{
                minWidth: 1200,
                maxWidth: 1400,
                flex: '0 0 1200px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                overflow: "hidden",
                cursor: "pointer",
                transition: "box-shadow 0.2s",
                marginBottom: 48,
              }}
              onClick={() => openModal(award, 0)}
              title="Xem ảnh lớn"
            >
              <div style={{ width: 600, minWidth: 600, height: 600, overflow: "hidden", flexShrink: 0 }}>
                <img
                  src={award.images && award.images.length > 0 ? award.images[0] : award.image}
                  alt={award.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 64, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }}>
                <div
                  style={{ fontFamily: 'serif', fontSize: 52, color: '#2d3436', fontWeight: 700, marginBottom: 32 }}
                >
                  {award.title}
                </div>
                <div style={{ color: '#555', fontSize: 28, marginBottom: 28 }}>{award.shortDesc}</div>
              </div>
            </div>
          ))}
          {/* Modal popup for image gallery */}
          {isModalOpen && modalAward && (
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
                    alt="award large"
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
                    {modalAward.popupText ? (
                      <div style={{fontSize:17,color:'#fff',opacity:0.98}}>{modalAward.popupText}</div>
                    ) : (
                      <>
                        <div style={{fontSize:20,fontWeight:600,color:'#fff',marginBottom:4,opacity:0.98}}>{modalAward.title}</div>
                        {modalAward.shortDesc && <div style={{fontSize:15,color:'#e0e0e0',opacity:0.85}}>{modalAward.shortDesc}</div>}
                      </>
                    )}
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
      </section>
    </>
  );
}

export default Achievement;
