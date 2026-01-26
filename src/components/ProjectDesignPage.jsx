import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";

import bgImage from "../assets/img/sxd-ab6.png";
import sxdbg9 from "../assets/img/sxd-ab9.png";

// Import dữ liệu dự án từ JSON
import projectsData from '../data/projects.json';
import { getProjectImageByFileName } from '../utils/projectImageLoader';

function ProjectDesignPage() {
  // Horizontal scroll/drag logic
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

  // Filter projects by category: thiet-ke
  const projectCards = Object.values(projectsData)
    .filter(p => p.category === 'thiet-ke')
    .map((project) => ({
      id: project.id,
      title: project.title,
      location: project.location,
      image: getProjectImageByFileName(project.imageFile),
      year: project.year,
      client: project.client,
      status: project.status,
    }));
  // Only show first 10
  const paginatedCards = projectCards.slice(0, 10);

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
            THIẾT KẾ CÔNG TRÌNH
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
          <Link to="/quy-hoach-do-thi" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap', cursor: 'pointer' }}>
              <span style={{ backgroundImage: `url(${sxdbg9})`, backgroundSize: 'cover', backgroundPosition: 'center', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', MozBackgroundClip: 'text', MozTextFillColor: 'transparent', display: 'inline-block', fontWeight: 400 }}>QUY HOẠCH</span>
            </div>
          </Link>
          <Link to="/thiet-ke-cong-trinh" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap', cursor: 'pointer' }}>
              <span style={{ backgroundImage: `url(${sxdbg9})`, backgroundSize: 'cover', backgroundPosition: 'center', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', MozBackgroundClip: 'text', MozTextFillColor: 'transparent', display: 'inline-block', fontWeight: 400 }}>THIẾT KẾ CÔNG TRÌNH</span>
            </div>
          </Link>
          <Link to="/ha-tang-ky-thuat" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap', cursor: 'pointer' }}>
              <span style={{ backgroundImage: `url(${sxdbg9})`, backgroundSize: 'cover', backgroundPosition: 'center', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', MozBackgroundClip: 'text', MozTextFillColor: 'transparent', display: 'inline-block', fontWeight: 400 }}>HẠ TẦNG KỸ THUẬT</span>
            </div>
          </Link>
          <Link to="/thiet-ke-canh-quan" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'serif', fontSize: '2rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap', cursor: 'pointer' }}>
              <span style={{ backgroundImage: `url(${sxdbg9})`, backgroundSize: 'cover', backgroundPosition: 'center', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', MozBackgroundClip: 'text', MozTextFillColor: 'transparent', display: 'inline-block', fontWeight: 400 }}>THIẾT KẾ CẢNH QUAN</span>
            </div>
          </Link>
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
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
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
              <Link
                to={`/projects/${item.id}`}
                style={{
                  fontFamily: 'serif',
                  fontSize: '4.2rem',
                  fontWeight: 600,
                  color: '#222',
                  lineHeight: 1.1,
                  textDecoration: 'underline',
                  textDecorationColor: '#b3b3b3',
                  textDecorationThickness: '3px',
                  textUnderlineOffset: '18px',
                  marginBottom: 38,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline',
                }}
              >
                {item.title}
              </Link>
              <Link
                to={`/projects/${item.id}`}
                style={{
                  fontFamily: 'serif',
                  fontSize: '2.2rem',
                  color: '#8a8a8a',
                  letterSpacing: '0.3px',
                  marginBottom: 28,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline',
                }}
              >
                {item.location}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectDesignPage;
