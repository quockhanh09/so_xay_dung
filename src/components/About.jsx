import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";

import bgImage from "../assets/img/sxd-ab6.png";
import sxdbg7 from "../assets/img/sxd-ab7.png";

// Import dữ liệu thành viên từ JSON
import membersData from '../data/members.json';
import { getImageByFileName } from '../utils/imageLoader';

export const leadership = {
  director: {
    label: "VIUP",
    name: "PGS.TS.KTS HOÀNG VĨNH HƯNG",
    title: "VIỆN TRƯỞNG",
    subtitle: "VIUP Director",
    description: "VIỆN QUY HOẠCH ĐÔ THỊ VÀ NÔNG THÔN QUỐC GIA",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    initials: "HVH",
  },
  udiDirector: {
    label: "UDI",
    name: "ĐỖ KIM DUNG",
    title: "GIÁM ĐỐC VIỆN",
    subtitle: "UDI Director",
    description: "VIỆN NGHIÊN CỨU THIẾT KẾ ĐÔ THỊ",
    contact: {
      phone: "+84 903 255 628",
      email: "dzung.kimdodo@udi.com.vn",
    },
    photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
    initials: "DKD",
  },
  deputies: [
    {
      area: "QUY HOẠCH",
      areaEn: "Planning",
      name: "SẤM MINH TUẤN",
      title: "PHÓ GIÁM ĐỐC VIỆN",
      subtitle: "Vice Director",
      contact: {
        phone: "+84 969 556 688",
        email: "tuan.sam@udi.com.vn",
      },
      photo: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
      initials: "SMT",
    },
    {
      area: "KIẾN TRÚC",
      areaEn: "Architecture",
      name: "KHÚC THẾ TÂM",
      title: "PHÓ GIÁM ĐỐC VIỆN",
      subtitle: "Vice Director",
      contact: {
        phone: "+84 986 868 449",
        email: "tam.khuc@udi.com.vn",
      },
      photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
      initials: "KTT",
    },
  ],
};



function About() {
  // Tự động tạo danh sách thành viên từ members.json
  const charactersList = Object.keys(membersData).map((id) => {
    const member = membersData[id];
    return {
      id: parseInt(id),
      name: member.name,
      image: getImageByFileName(member.imageFile),
      title: member.title,
      subtitle: member.subtitle,
      role: member.role,
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;
  const totalPages = Math.ceil(charactersList.length / itemsPerPage);

  const currentItems = charactersList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

      {/* BAN LÃNH ĐẠO - ORGANIZATIONAL TREE CHART */}
      <section className="org-tree-section">
        <div className="org-tree-container">
          <h2 className="org-tree-title">BAN LÃNH ĐẠO VÀ GIÁM ĐỐC</h2>
          
          {/* LEVEL 1: VIUP DIRECTOR */}
          <div className="org-tree-level level-1">
            <div className="org-tree-node node-lg">
              <div className="org-node-header">VIUP</div>
              <div className="org-node-body">
                <div className="org-node-photo">
                  {leadership.director.photo ? (
                    <img src={leadership.director.photo} alt={leadership.director.name} />
                  ) : (
                    <span>{leadership.director.initials}</span>
                  )}
                </div>
                <div className="org-node-info">
                  <p className="org-node-org">{leadership.director.description}</p>
                  <h3 className="org-node-name">{leadership.director.name}</h3>
                  <p className="org-node-title">{leadership.director.title}</p>
                  <p className="org-node-subtitle">{leadership.director.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONNECTING LINE */}
          <div className="org-tree-connector line-vertical"></div>

          {/* LEVEL 2: UDI DIRECTOR */}
          <div className="org-tree-level level-2">
            <div className="org-tree-node node-lg">
              <div className="org-node-header">UDI</div>
              <div className="org-node-body">
                <div className="org-node-photo">
                  {leadership.udiDirector.photo ? (
                    <img src={leadership.udiDirector.photo} alt={leadership.udiDirector.name} />
                  ) : (
                    <span>{leadership.udiDirector.initials}</span>
                  )}
                </div>
                <div className="org-node-info">
                  <p className="org-node-org">{leadership.udiDirector.description}</p>
                  <h3 className="org-node-name">{leadership.udiDirector.name}</h3>
                  <p className="org-node-title">{leadership.udiDirector.title}</p>
                  <p className="org-node-subtitle">{leadership.udiDirector.subtitle}</p>
                  <div className="org-node-contact">
                    <p>Tel: {leadership.udiDirector.contact.phone}</p>
                    <p>Email: {leadership.udiDirector.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LEVEL 3: DEPUTIES - WITH CONNECTOR */}
          <div className="org-tree-level level-3">
            <div className="org-tree-connector line-horizontal"></div>
            <div className="org-tree-deputies">
              {leadership.deputies.map((person, idx) => (
                <div key={person.name} className="org-tree-deputy-wrapper">
                  <div className="org-tree-connector line-vertical-short"></div>
                  <div className="org-tree-node node-md">
                    <div className="org-node-header deputy-header">{person.area}</div>
                    <div className="org-node-body">
                      <div className="org-node-photo deputy-photo">
                        {person.photo ? (
                          <img src={person.photo} alt={person.name} />
                        ) : (
                          <span>{person.initials}</span>
                        )}
                      </div>
                      <div className="org-node-info">
                        <h4 className="org-node-name">{person.name}</h4>
                        <p className="org-node-title">{person.title}</p>
                        <p className="org-node-subtitle">{person.subtitle}</p>
                        <div className="org-node-contact">
                          <p>{person.contact.phone}</p>
                          <p>{person.contact.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BAN LÃNH ĐẠO VÀ GIÁM ĐỐC TRUNG TÂM */}
      <section
        id="team-members"
        className="team-members section"
        style={{
          background: "#fff",
          padding: "60px 0",
        }}
      >
        {/* TITLE */}
        <div className="container">
          <h2
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "34px",
              fontWeight: "bold",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            BAN LÃNH ĐẠO VÀ GIÁM ĐỐC TRUNG TÂM
          </h2>

          <h4
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "16px",
              marginBottom: "40px",
              textAlign: "center",
              color: "#666",
            }}
          >
            LEADERSHIP AND CENTER DIRECTORS
          </h4>
        </div>

        {/* LIST CARD */}
        <div className="container" style={{ maxWidth: "1600px" }}>
          <div className="member-card-grid">
            {currentItems.map((char) => (
              <Link
                key={char.id}
                to={`/profile/${char.id}`}
                className="member-card__link"
              >
                <div className="member-card">
                  <div className="member-card__photo">
                    <img src={char.image} alt={char.name} />
                  </div>
                  <div className="member-card__body">
                    <h3 className="member-card__name">{char.name}</h3>
                    {char.title && <p className="member-card__line">{char.title}</p>}
                    {char.subtitle && <p className="member-card__line">{char.subtitle}</p>}
                    {char.role && <p className="member-card__line">{char.role}</p>}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              style={{
                padding: "8px 16px",
                border: "1px solid #ccc",
                background: currentPage === 1 ? "#eee" : "#fff",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                borderRadius: "4px",
              }}
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #ccc",
                  background: currentPage === i + 1 ? "#000" : "#fff",
                  color: currentPage === i + 1 ? "#fff" : "#000",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              style={{
                padding: "8px 16px",
                border: "1px solid #ccc",
                background: currentPage === totalPages ? "#eee" : "#fff",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                borderRadius: "4px",
              }}
            >
              →
            </button>
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
