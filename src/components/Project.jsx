import React from "react";

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

        {/* Grid 6 images with overlay text */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
            maxWidth: 1700,
            margin: '60px auto 0 auto',
            padding: '0 24px',
          }}
        >
          {/* 1 */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.10)' }}>
            <img src={sxdbg10} alt="CHEF APARTMENTS" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.18)' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: '#fff', fontFamily: 'serif', fontSize: '2.1rem', fontWeight: 400, textAlign: 'center', letterSpacing: 1, zIndex: 2, textShadow: '0 2px 8px rgba(0,0,0,0.18)', whiteSpace: 'nowrap' }}>CHEF APARTMENTS</div>
          </div>
          {/* 2 */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.10)' }}>
            <img src={sxdbg11} alt="STUDIO APARTMENTS" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.18)' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: '#fff', fontFamily: 'serif', fontSize: '2.1rem', fontWeight: 400, textAlign: 'center', letterSpacing: 1, zIndex: 2, textShadow: '0 2px 8px rgba(0,0,0,0.18)', whiteSpace: 'nowrap' }}>STUDIO APARTMENTS</div>
          </div>
          {/* 3 */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.10)' }}>
            <img src={sxdbg12} alt="LUXURY APARTMENTS" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.18)' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: '#fff', fontFamily: 'serif', fontSize: '2.1rem', fontWeight: 400, textAlign: 'center', letterSpacing: 1, zIndex: 2, textShadow: '0 2px 8px rgba(0,0,0,0.18)', whiteSpace: 'nowrap' }}>LUXURY APARTMENTS</div>
          </div>
          {/* 4 */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.10)' }}>
            <img src={sxdbg13} alt="PREMIUM OFFICE SUITE" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.18)' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: '#fff', fontFamily: 'serif', fontSize: '2.1rem', fontWeight: 400, textAlign: 'center', letterSpacing: 1, zIndex: 2, textShadow: '0 2px 8px rgba(0,0,0,0.18)', whiteSpace: 'nowrap' }}>PREMIUM OFFICE SUITE</div>
          </div>
          {/* 5 */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.10)' }}>
            <img src={sxdbg14} alt="SENIOR APARTMENTS" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.18)' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: '#fff', fontFamily: 'serif', fontSize: '2.1rem', fontWeight: 400, textAlign: 'center', letterSpacing: 1, zIndex: 2, textShadow: '0 2px 8px rgba(0,0,0,0.18)', whiteSpace: 'nowrap' }}>SENIOR APARTMENTS</div>
          </div>
          {/* 6 */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.10)' }}>
            <img src={sxdbg15} alt="MODERN OFFICE" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.18)' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: '#fff', fontFamily: 'serif', fontSize: '2.1rem', fontWeight: 400, textAlign: 'center', letterSpacing: 1, zIndex: 2, textShadow: '0 2px 8px rgba(0,0,0,0.18)', whiteSpace: 'nowrap' }}>MODERN OFFICE</div>
          </div>
        </div>
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
