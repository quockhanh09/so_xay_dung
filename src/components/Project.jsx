import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import hình ảnh
import bgImage from "../assets/img/sxd-ab6.png";
import sxdbg9 from "../assets/img/sxd-ab9.png";
import sxdbg10 from "../assets/img/sxd-ab10.png";
import sxdbg11 from "../assets/img/sxd-ab11.png";
import sxdbg12 from "../assets/img/sxd-ab12.png";
import sxdbg13 from "../assets/img/sxd-ab13.png";
import sxdbg14 from "../assets/img/sxd-ab14.png";
import sxdbg15 from "../assets/img/sxd-ab15.png";

function Project() {
  const [page, setPage] = useState(1);
  const projectCards = [
    { image: sxdbg10, title: "City of Dublin Metro Area Strategic Plan", location: "Dublin, OH" },
    { image: sxdbg11, title: "The Frederick Gunn School Tisch Center for Innovation and Active Citizenship", location: "Washington, CT" },
    { image: sxdbg12, title: "Princeton University Racquet and Recreation Fieldhouse", location: "West Windsor Township, NJ" },
    { image: sxdbg13, title: "Wilmington Waterfront Promenade", location: "Los Angeles, CA" },
    { image: sxdbg14, title: "Tecnológico de Monterrey Expedition Building", location: "Monterrey, Mexico" },
    { image: sxdbg15, title: "Boston City Hall Plaza Renovation", location: "Boston, MA" },
    { image: sxdbg10, title: "The Lawrenceville School Tsai Commons and Field House", location: "Lawrenceville, NJ" },
    { image: sxdbg11, title: "University of California, Berkeley Accessible Paths and Places Master Plan", location: "Berkeley, CA" },
    { image: sxdbg10, title: "City of Dublin Metro Area Strategic Plan", location: "Dublin, OH" },
    { image: sxdbg11, title: "The Frederick Gunn School Tisch Center for Innovation and Active Citizenship", location: "Washington, CT" },
    { image: sxdbg12, title: "Princeton University Racquet and Recreation Fieldhouse", location: "West Windsor Township, NJ" },
    { image: sxdbg13, title: "Wilmington Waterfront Promenade", location: "Los Angeles, CA" },
    { image: sxdbg14, title: "Tecnológico de Monterrey Expedition Building", location: "Monterrey, Mexico" },
    { image: sxdbg15, title: "Boston City Hall Plaza Renovation", location: "Boston, MA" },
    { image: sxdbg10, title: "The Lawrenceville School Tsai Commons and Field House", location: "Lawrenceville, NJ" },
    { image: sxdbg11, title: "University of California, Berkeley Accessible Paths and Places Master Plan", location: "Berkeley, CA" },
    { image: sxdbg10, title: "City of Dublin Metro Area Strategic Plan", location: "Dublin, OH" },
    { image: sxdbg11, title: "The Frederick Gunn School Tisch Center for Innovation and Active Citizenship", location: "Washington, CT" },
    { image: sxdbg12, title: "Princeton University Racquet and Recreation Fieldhouse", location: "West Windsor Township, NJ" },
    { image: sxdbg13, title: "Wilmington Waterfront Promenade", location: "Los Angeles, CA" },
    { image: sxdbg14, title: "Tecnológico de Monterrey Expedition Building", location: "Monterrey, Mexico" },
    { image: sxdbg15, title: "Boston City Hall Plaza Renovation", location: "Boston, MA" },
    { image: sxdbg10, title: "The Lawrenceville School Tsai Commons and Field House", location: "Lawrenceville, NJ" },
    { image: sxdbg11, title: "University of California, Berkeley Accessible Paths and Places Master Plan", location: "Berkeley, CA" },
    
  ];

  const rowsPerPage = 6; // 6 hàng, mỗi hàng 4 thẻ
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
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '120px',
            maxWidth: 1200,
            margin: '0 auto',
            minHeight: 100,
            width: '100%',
          }}
        >
          {/* QUY HOẠCH */}
          <div style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
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
          {/* THIẾT KẾ */}
          <div style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
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
              THIẾT KẾ
            </span>
          </div>
          {/* HẠ TẦNG KỸ THUẬT */}
          <div style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 400, letterSpacing: 2, background: 'none', textAlign: 'center', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
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
        </div>

        {/* Grid cards */}
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
          {paginatedCards.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 6, boxShadow: '0 3px 18px rgba(0,0,0,0.12)' }}>
                {index === 0 ? (
                  <Link to="/projects/gatton-park" style={{ display: 'block' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </Link>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                )}
              </div>
              {index === 0 ? (
                <Link to="/projects/gatton-park" style={{ textDecoration: 'none' }}>
                  <div style={{ fontFamily: 'serif', fontSize: '1.5rem', fontWeight: 400, color: '#222', lineHeight: 1.35, textDecoration: 'underline', textDecorationColor: '#b3b3b3', textDecorationThickness: '1px', textUnderlineOffset: '6px' }}>
                    {item.title}
                  </div>
                </Link>
              ) : (
                <div style={{ fontFamily: 'serif', fontSize: '1.5rem', fontWeight: 400, color: '#222', lineHeight: 1.35, textDecoration: 'underline', textDecorationColor: '#b3b3b3', textDecorationThickness: '1px', textUnderlineOffset: '6px' }}>
                  {item.title}
                </div>
              )}
              <div style={{ fontFamily: 'serif', fontSize: '1.2rem', color: '#8a8a8a', letterSpacing: '0.3px' }}>
                {item.location}
              </div>
            </div>
          ))}
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
