import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";

import bgImage from "../assets/img/sxd-ab6.png";
import sxdbg7 from "../assets/img/sxd-ab7.png";

import banThan2 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/2.jpg";
import banThan3 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/3.jpg";
import banThan4 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/4.jpg";
import banThan5 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/5.jpg";
import banThan6 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/6.jpg";
import banThan7 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/7.jpg";
import banThan8 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/8.jpg";
import banThan9 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/9.jpg";
import banThan10 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/10.jpg";
import banThan11 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/11.jpg";
import banThan12 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/12.jpg";
import banThan13 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/13.jpg";
import banThan14 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/14.jpg";
import banThan15 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/15.jpg";
import banThan16 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/16.jpg";
import banThan17 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/17.jpg";
import banThan18 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/18.jpg";
import banThan19 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/19.jpg";
import banThan20 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/20.jpg";
import banThan21 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/21.jpg";
import banThan22 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/22.jpg";
import banThan23 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/23.jpg";
import banThan24 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/24.jpg";
import banThan25 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/25 (2).jpg";
import banThan26 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/26.jpg";
import banThan27 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/27.jpg";
import banThan28 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/28.jpg";
import banThan29 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/29.jpg";
import banThan30 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/30.jpg";
import banThan31 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/31.jpg";

const leadership = {
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
  const charactersList = [
    { 
      id: 1,
      name: "Anna Cawrse", 
      image: banThan2,
      title: "Chair of Landscape Architecture, Civil Engineering, & Ecology",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 2,
      name: "Zachary Chrisco", 
      image: banThan3,
      title: "Chair At-Large",
      subtitle: "Board of Directors, Principal",
      role: "Civil Engineer"
    },
    { 
      id: 3,
      name: "Caitlyn Clauson", 
      image: banThan4,
      title: "President",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 4,
      name: "Meredith McCarthy", 
      image: banThan5,
      title: "Chair At-Large",
      subtitle: "Associate Principal, Board of Directors",
      role: "Architect"
    },
    { 
      id: 5,
      name: "Tyler Patrick", 
      image: banThan6,
      title: "Chair of Planning & Urban Design",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 6,
      name: "Pablo Savid-Buteler", 
      image: banThan7,
      title: "Chair of Design Integration",
      subtitle: "Board of Directors, Principal",
      role: "Designer"
    },
    { 
      id: 7,
      name: "Victor Vizgaitis", 
      image: banThan8,
      title: "Managing Principal",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 8,
      name: "Joshua Brooks", 
      image: banThan9,
      title: "Denver Office Director",
      subtitle: "Principal",
      role: "Landscape Architect"
    },
    { 
      id: 9,
      name: "Carla Ceruzzi", 
      image: banThan10,
      title: "Associate Principal",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 10,
      name: "Fiske Crowell", 
      image: banThan11,
      title: "Principal",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 11,
      name: "Ian Dickenson", 
      image: banThan12,
      title: "Associate Principal",
      subtitle: "Architect",
      role: ""
    },
    { 
      id: 12,
      name: "Philip Dugdale", 
      image: banThan13,
      title: "New York Office Director",
      subtitle: "Principal",
      role: "Architect"
    },
    { 
      id: 13,
      name: "Anna Cawrse", 
      image: banThan14,
      title: "Chair of Landscape Architecture",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 14,
      name: "Zachary Chrisco", 
      image: banThan15,
      title: "Chair At-Large",
      subtitle: "Board of Directors, Principal",
      role: "Civil Engineer"
    },
    { 
      id: 15,
      name: "Caitlyn Clauson", 
      image: banThan16,
      title: "President",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 16,
      name: "Meredith McCarthy", 
      image: banThan17,
      title: "Chair At-Large",
      subtitle: "Associate Principal",
      role: "Architect"
    },
    { 
      id: 17,
      name: "Tyler Patrick", 
      image: banThan18,
      title: "Chair of Planning & Urban Design",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 18,
      name: "Pablo Savid-Buteler", 
      image: banThan19,
      title: "Chair of Design Integration",
      subtitle: "Board of Directors, Principal",
      role: "Designer"
    },
    { 
      id: 19,
      name: "Victor Vizgaitis", 
      image: banThan20,
      title: "Managing Principal",
      subtitle: "Board of Directors",
      role: "Landscape Architect"
    },
    { 
      id: 20,
      name: "Joshua Brooks", 
      image: banThan21,
      title: "Denver Office Director",
      subtitle: "Principal",
      role: "Landscape Architect"
    },
    { 
      id: 21,
      name: "Carla Ceruzzi", 
      image: banThan22,
      title: "Associate Principal",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 22,
      name: "Fiske Crowell", 
      image: banThan23,
      title: "Principal",
      subtitle: "Landscape Architect",
      role: ""
    },
    { 
      id: 23,
      name: "Ian Dickenson", 
      image: banThan24,
      title: "Associate Principal",
      subtitle: "Architect",
      role: ""
    },
    { 
      id: 24,
      name: "Philip Dugdale", 
      image: banThan25,
      title: "New York Office Director",
      subtitle: "Principal",
      role: "Architect"
    },
    { 
      id: 25,
      name: "Anna Cawrse", 
      image: banThan26,
      title: "Chair of Landscape Architecture",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect"
    },
    { 
      id: 26,
      name: "Zachary Chrisco", 
      image: banThan27,
      title: "Chair At-Large",
      subtitle: "Board of Directors, Principal",
      role: "Civil Engineer"
    },
    { 
      id: 27,
      name: "Caitlyn Clauson", 
      image: banThan28,
      title: "President",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 28,
      name: "Meredith McCarthy", 
      image: banThan29,
      title: "Chair At-Large",
      subtitle: "Associate Principal",
      role: "Architect"
    },
    { 
      id: 29,
      name: "Tyler Patrick", 
      image: banThan30,
      title: "Chair of Planning & Urban Design",
      subtitle: "Board of Directors, Principal",
      role: "Planner"
    },
    { 
      id: 30,
      name: "Pablo Savid-Buteler", 
      image: banThan31,
      title: "Chair of Design Integration",
      subtitle: "Board of Directors, Principal",
      role: "Designer"
    },
  ];

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

      {/* BAN LÃNH ĐẠO - TÀI LIỆU IN */}
      <section className="leadership-section print-style">
        <div className="leadership-inner">
          {/* VIUP SECTION */}
          <div className="org-viup-card">
            <div className="org-viup-left">
              <span className="org-viup-label">VIUP</span>
            </div>
            <div className="org-viup-photo">
              {leadership.director.photo ? (
                <img src={leadership.director.photo} alt={leadership.director.name} className="grayscale-img" />
              ) : (
                <span>{leadership.director.initials}</span>
              )}
            </div>
            <div className="org-viup-text">
              <p className="org-text-small">{leadership.director.description}</p>
              <p className="org-text-name">{leadership.director.name}</p>
              <p className="org-text-title">{leadership.director.title}</p>
              <p className="org-text-subtitle">{leadership.director.subtitle}</p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="org-print-divider"></div>

          {/* UDI SECTION */}
          <div className="org-udi-card">
            <div className="org-udi-left">
              <span className="org-udi-label">UDI</span>
            </div>
            <div className="org-udi-photo">
              {leadership.udiDirector.photo ? (
                <img src={leadership.udiDirector.photo} alt={leadership.udiDirector.name} className="grayscale-img" />
              ) : (
                <span>{leadership.udiDirector.initials}</span>
              )}
            </div>
            <div className="org-udi-text">
              <p className="org-text-desc">{leadership.udiDirector.description}</p>
              <p className="org-text-name">{leadership.udiDirector.name}</p>
              <p className="org-text-title">{leadership.udiDirector.title}</p>
              <p className="org-text-subtitle">{leadership.udiDirector.subtitle}</p>
              <p className="org-text-contact">Tel: {leadership.udiDirector.contact.phone}</p>
              <p className="org-text-contact">Email: {leadership.udiDirector.contact.email}</p>
            </div>
          </div>

          {/* CONNECTORS & DEPUTIES */}
          <div className="org-deputies-section">
            <div className="org-deputies-row">
              {leadership.deputies.map((person) => (
                <div className="org-deputy-item" key={person.name}>
                  <p className="org-deputy-area">{person.area}</p>
                  <div className="org-deputy-photo">
                    {person.photo ? (
                      <img src={person.photo} alt={person.name} className="grayscale-img" />
                    ) : (
                      <span>{person.initials}</span>
                    )}
                  </div>
                  <p className="org-deputy-name">{person.name}</p>
                  <p className="org-deputy-title">{person.title}</p>
                  <p className="org-deputy-subtitle">{person.subtitle}</p>
                  <p className="org-text-contact">{person.contact.phone}</p>
                  <p className="org-text-contact">{person.contact.email}</p>
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
          <div
            className="row"
            style={{
              rowGap: "80px",
              columnGap: "40px",
              justifyContent: "center",
            }}
          >
            {currentItems.map((char, i) => (
              <div className="col-lg-2 col-md-4 col-sm-6" key={i}>
                <Link 
                  to={`/profile/${char.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      width: "100%",
                      marginBottom: "20px",
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  >
                    <img
                      src={char.image}
                      alt={char.name}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* NAME */}
                  <h3
                    style={{
                      textAlign: "left",
                      marginTop: "15px",
                      marginBottom: "10px",
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#000",
                      lineHeight: "1.3",
                    }}
                  >
                    {char.name}
                  </h3>

                  {/* TITLE */}
                  <p
                    style={{
                      textAlign: "left",
                      margin: "0 0 6px 0",
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#999",
                      lineHeight: "1.5",
                    }}
                  >
                    {char.title}
                  </p>

                  {/* SUBTITLE */}
                  <p
                    style={{
                      textAlign: "left",
                      margin: "0 0 6px 0",
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#999",
                      lineHeight: "1.5",
                    }}
                  >
                    {char.subtitle}
                  </p>

                  {/* ROLE */}
                  {char.role && (
                    <p
                      style={{
                        textAlign: "left",
                        margin: "0",
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#999",
                        lineHeight: "1.5",
                      }}
                    >
                      {char.role}
                    </p>
                  )}
                </Link>
              </div>
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
