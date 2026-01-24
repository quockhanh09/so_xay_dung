import { useState, useEffect } from "react";

import bgImage from "../assets/img/sxd-ab16.png";
import sxdbg7 from "../assets/img/sxd-ab7.png";
import sxdbg17 from "../assets/img/sxd-ab17.png";
function Achievement() {
  return (
    <><section
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

          {/* ABOUT MAISONCO TEAM - TOP ROW (image on the right: sxdbg17) */}
          {/* Lưới giải thưởng nhỏ */}
          <section style={{ background: 'white', padding: '60px 0' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              maxWidth: '1400px',
              margin: '0 auto',
            }}>
              {/* Giả lập dữ liệu giải thưởng, bạn nên fetch từ JSON thực tế */}
              {[{
                id: 1,
                title: 'Giải thưởng Kiến trúc Quốc gia 2020',
                shortDesc: 'Dự án quy hoạch đô thị xuất sắc toàn quốc.',
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
              }, {
                id: 2,
                title: 'Giải nhất cuộc thi Quy hoạch Đô thị xanh 2019',
                shortDesc: 'Dự án phát triển đô thị xanh bền vững.',
                image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80'
              }, {
                id: 3,
                title: 'Bằng khen của Bộ Xây dựng',
                shortDesc: 'Ghi nhận đóng góp xuất sắc trong lĩnh vực xây dựng.',
                image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
              }].map((award) => (
                <div
                  key={award.id}
                  style={{
                    background: "#faf9f6",
                    borderRadius: 14,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "box-shadow 0.2s",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 420
                  }}
                  onClick={() => window.location.href = `/achievement/${award.id}`}
                >
                  <div style={{ width: "100%", height: 220, overflow: "hidden" }}>
                    <img
                      src={award.image}
                      alt={award.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                    <div style={{ fontFamily: 'serif', fontSize: 22, color: '#2d3436', fontWeight: 500, marginBottom: 10 }}>{award.title}</div>
                    <div style={{ color: '#555', fontSize: 16, marginBottom: 8 }}>{award.shortDesc}</div>
                    <span style={{ color: "#b6a484", fontWeight: 500, fontSize: 16, marginTop: 'auto', textDecoration: 'underline', alignSelf: 'flex-start', cursor: 'pointer' }}>Xem chi tiết &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

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
                        style={{ width: '100%', height: 'auto',  boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
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

export default Achievement;
