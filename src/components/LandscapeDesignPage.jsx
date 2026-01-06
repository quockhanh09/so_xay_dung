import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";

import bgImage from "../assets/img/sxd-ab6.png";
import sxdbg9 from "../assets/img/sxd-ab9.png";

// Import dữ liệu dự án từ JSON
import projectsData from '../data/projects.json';
import { getProjectImageByFileName } from '../utils/projectImageLoader';

function LandscapeDesignPage() {
  const [page, setPage] = useState(1);

  // Filter projects by category: canh-quan
  const projectCards = Object.values(projectsData)
    .filter(p => p.category === 'canh-quan')
    .map((project) => ({
      id: project.id,
      title: project.title,
      location: project.location,
      image: getProjectImageByFileName(project.imageFile),
      year: project.year,
      client: project.client,
      status: project.status,
    }));

  const rowsPerPage = 6;
  const itemsPerPage = rowsPerPage * 4;
  const totalPages = Math.max(1, Math.ceil(projectCards.length / itemsPerPage));
  const paginatedCards = projectCards.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const goPage = (p) => {
    const next = Math.min(Math.max(p, 1), totalPages);
    setPage(next);
  };

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
            THIẾT KẾ CẢNH QUAN
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

      {/* Grid cards */}
      <section style={{ background: '#fff', padding: '48px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(320px, 1fr))',
            gap: '80px 64px',
            maxWidth: 1800,
            margin: '90px auto 0 auto',
            padding: '0 28px',
          }}
        >
          {paginatedCards.map((item) => (
            <Link key={item.id} to={`/projects/${item.id}`} style={{ display: 'flex', flexDirection: 'column', gap: 14, textDecoration: 'none', cursor: 'pointer' }}>
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 6, boxShadow: '0 3px 18px rgba(0,0,0,0.12)', transition: 'transform 0.3s ease' }}
                   onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                   onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ fontFamily: 'serif', fontSize: '1.5rem', fontWeight: 400, color: '#222', lineHeight: 1.35, textDecoration: 'underline', textDecorationColor: '#b3b3b3', textDecorationThickness: '1px', textUnderlineOffset: '6px' }}>
                {item.title}
              </div>
              <div style={{ fontFamily: 'serif', fontSize: '1.2rem', color: '#8a8a8a', letterSpacing: '0.3px' }}>
                {item.location}
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 40, paddingBottom: 48 }}>
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
    </>
  );
}

export default LandscapeDesignPage;
