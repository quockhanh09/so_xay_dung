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
              {/* Left: Text */}
              <div style={{ flex: 1, minWidth: 350, maxWidth: 700, padding: '0 24px' }}>
                <h2 style={{
                  fontFamily: 'serif',
                  fontSize: '2.2rem',
                  color: '#2d3436',
                  fontWeight: 400,
                  marginBottom: 16,
                  lineHeight: 1.2,
                  textAlign: 'left',
                }}>
                  ABOUT MAISONCO TEAM
                </h2>
                <div style={{ color: '#555', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: 28, textAlign: 'left' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </div>
                
              </div>
              {/* Right: Image */}
              <div style={{ flex: 1, minWidth: 350, maxWidth: 700, display: 'flex', justifyContent: 'center' }}>
                <img src={sxdbg17} alt="team" style={{ width: '100%', maxWidth: 700, height: 'auto',  boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }} />
              </div>
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
