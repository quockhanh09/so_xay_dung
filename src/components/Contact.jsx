import { useState, useRef } from "react";

import bgImage from "../assets/img/sxd-ab6.png";
function Contact() {
  
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
                CONTACT US
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

          
          <section style={{ background: '#fff', padding: '56px 0 0 0', width: '100%' }}>
            {/* 3 columns: phone, address, mail */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '120px',
              maxWidth: 1200,
              margin: '0 auto',
              padding: '0 24px',
              flexWrap: 'wrap',
            }}>
              {/* Phone */}
              <div style={{ textAlign: 'center', flex: 1, minWidth: 220 }}>
                <div style={{ fontSize: 54, color: '#c3b393', marginBottom: 8 }}>
                  <svg width="48" height="48" fill="none" stroke="#c3b393" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div style={{ color: '#888', fontWeight: 500, letterSpacing: 1, fontSize: 16, marginBottom: 2 }}>PHONE:</div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#222', letterSpacing: 1 }}>012.3344.566</div>
              </div>
              {/* Address */}
              <div style={{ textAlign: 'center', flex: 1, minWidth: 220 }}>
                <div style={{ fontSize: 54, color: '#c3b393', marginBottom: 8 }}>
                  <svg width="48" height="48" fill="none" stroke="#c3b393" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div style={{ color: '#888', fontWeight: 500, letterSpacing: 1, fontSize: 16, marginBottom: 2 }}>ADDRESS:</div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#222', letterSpacing: 1 }}>36 Hoang Cau, Dong Da, Hanoi</div>
              </div>
              {/* Mail */}
              <div style={{ textAlign: 'center', flex: 1, minWidth: 220 }}>
                <div style={{ fontSize: 54, color: '#c3b393', marginBottom: 8 }}>
                  <svg width="48" height="48" fill="none" stroke="#c3b393" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
                </div>
                <div style={{ color: '#888', fontWeight: 500, letterSpacing: 1, fontSize: 16, marginBottom: 2 }}>MAIL:</div>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#222', letterSpacing: 1 }}>support@tempi.vn</div>
              </div>
            </div>
            {/* Google Map */}
            <div style={{ width: '100%', margin: '100px 0 0 0', minHeight: 420, height: 480, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.427006876153!2d105.8194543154026!3d21.01430739355545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6b2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2zMzYgSG_DoG5nIENhbywgxJDhu5FuZyBZw6AsIEjDoG5vaQ!5e0!3m2!1svi!2s!4v1700480000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 8 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

           <section style={{ background: '#fff', padding: '60px 0 80px 0', width: '100%' }}>
       
      
          
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

export default Contact;
