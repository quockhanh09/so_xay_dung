import React from "react";
import "../style/App.css";

// Import ảnh
import bgImage from "../assets/img/sxd-ab6.png";
import sxdbg7 from "../assets/img/sxd-ab7.png";
import sxdbg8 from "../assets/img/sxd-ab8.png";
import logoFull from "../assets/img/Logo-full.png";
// Example characters list — replace image URLs with project assets if available
const charactersList = [
  { name: "Nguyễn Văn A", image: "https://yourlink.com/a.jpg", description: "Giám đốc nghiên cứu" },
  { name: "Trần Thị B", image: "https://yourlink.com/b.jpg", description: "Trưởng phòng thiết kế" },
  { name: "Lê Văn C", image: "https://yourlink.com/c.jpg", description: "Kỹ sư đô thị" },
  { name: "Phạm Thị D", image: "https://yourlink.com/d.jpg", description: "Chuyên viên quy hoạch" },
  { name: "Vũ Văn E", image: "https://yourlink.com/e.jpg", description: "Kiến trúc sư cấp cao" },
  { name: "Đỗ Thị F", image: "https://yourlink.com/f.jpg", description: "Quản lý dự án" },
  { name: "Hồ Văn G", image: "https://yourlink.com/g.jpg", description: "Chuyên gia cảnh quan" },
  { name: "Ngô Thị H", image: "https://yourlink.com/h.jpg", description: "Phân tích dữ liệu" },
];



function About() {
  return (
    <>
      {/* PHẦN HERO */}
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
            ABOUT US
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

     

      {/* TIN LIÊN QUAN */}
      <section style={{ backgroundColor: "white", padding: "40px 0" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1800px",
          margin: "0 auto",
          gap: "40px",
          minHeight: '70vh'
        }}>
          {/* Left side */}
          <div style={{ flex: 1, minWidth: 350, maxWidth: 600, paddingLeft: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{
              fontFamily: 'serif',
              fontSize: '2.2rem',
              textDecoration: 'underline',
              color: '#2d3436',
              fontWeight: 400,
              marginBottom: 16,
              lineHeight: 1.2,
              textAlign: 'center',
              width: '100%'
            }}>
              BAN LÃNH ĐẠO VIỆN NGHIÊN CỨU THIẾT KẾ ĐÔ THỊ <span style={{fontWeight: 300}}>(UDI)</span>.
            </h2>
          
          </div>
          {/* Right side: grid of cards */}
          <div style={{
            flex: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
            minWidth: 0
          }}>
            {charactersList.map((person, idx) => (
              <div key={idx} style={{ textAlign: 'left' }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  background: '#f5f6fb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 12,
                  overflow: 'hidden',
                  borderRadius: 8,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}>
                  <img
                    src={person.image}
                    alt={person.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{fontWeight: 700, fontSize: '1.05rem', marginBottom: 4}}>{person.name}</div>
                <div style={{fontSize: '0.98rem', color: '#222', fontFamily: 'sans-serif'}}>
                  {person.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section style={{ background: 'white', padding: '60px 0' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1600px',
          margin: '0 auto',
          gap: '60px',
          flexWrap: 'wrap',
        }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: 350, maxWidth: 700 }}>
            <img
              src={sxdbg7}
              alt="Our Story"
              style={{ width: '100%', height: 'auto', borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
            />
          </div>
          {/* Right: Text */}
          <div style={{ flex: 1, minWidth: 350, maxWidth: 700, padding: '0 24px' }}>
            <h2 style={{
              fontFamily: 'serif',
              fontSize: '2.2rem',
              color: '#2d3436',
              fontWeight: 400,
              marginBottom: 24,
              letterSpacing: '1px',
              textAlign: 'left',
            }}>
              OUR STORY
            </h2>
            <div style={{
              color: '#555',
              fontSize: '1.08rem',
              lineHeight: 1.7,
              marginBottom: 32,
              textAlign: 'left',
              maxWidth: 600,
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            
          </div>
        </div>
      </section>
      {/* AVAILABLE FOR IMMEDIATE OCCUPANCY SECTION */}
      <section
        style={{
          width: '100%',
          minHeight: '320px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          margin: 0,
          background: `url(${sxdbg7}) center/cover no-repeat`,
          overflow: 'hidden',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1,
          }}
        ></div>
        {/* Centered Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 0',
          }}
        >
          <h2
            style={{
              color: '#fff',
              fontSize: '3.2rem',
              fontWeight: 400,
              letterSpacing: '2px',
              textAlign: 'center',
              margin: 0,
              fontFamily: 'serif',
              lineHeight: 1.1,
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            AVAILABLE FOR<br />IMMEDIATE OCCUPANCY!
          </h2>
          <button
            style={{
              marginTop: 32,
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
            VIEW AVAILABILITY
          </button>
        </div>
      </section>
      
      {/* STATS + SCHEDULE A TOUR SECTION */}
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
    </>
  );
}

export default About;
