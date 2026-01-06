import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";
import membersData from '../data/members.json';
import departmentsData from '../data/departments.json';
import { getImageByFileName } from '../utils/imageLoader';

function DepartmentMembersPage() {
  const [selectedDept, setSelectedDept] = useState("BAN_LANH_DAO");

  // Nhóm thành viên theo phòng/ban
  const membersByDepartment = {};
  Object.keys(membersData).forEach((id) => {
    const member = membersData[id];
    const dept = member.department || "BAN_LANH_DAO";
    if (!membersByDepartment[dept]) {
      membersByDepartment[dept] = [];
    }
    membersByDepartment[dept].push({
      id: parseInt(id),
      ...member,
      image: getImageByFileName(member.imageFile)
    });
  });

  // Lấy danh sách phòng/ban đã được sắp xếp
  const sortedDepartments = Object.values(departmentsData).sort((a, b) => a.order - b.order);

  const currentMembers = membersByDepartment[selectedDept] || [];

  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", color: "#fff", zIndex: 2 }}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: 400,
            letterSpacing: "2px",
            fontFamily: "serif",
            marginBottom: "10px"
          }}>
            CƠ CẤU TỔ CHỨC
          </h1>
          <div style={{
            width: "80px",
            height: "3px",
            background: "#fff",
            margin: "0 auto",
            opacity: 0.7,
          }}></div>
        </div>
      </section>

      {/* DEPARTMENTS NAVIGATION */}
      <section style={{ background: "#f8f9fa", padding: "40px 0" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            background: "#fff",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
          }}>
            {sortedDepartments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                style={{
                  padding: "14px 24px",
                  border: selectedDept === dept.id ? "2px solid #2188ff" : "1px solid #e0e0e0",
                  background: selectedDept === dept.id ? "#e3f2fd" : "#fff",
                  color: selectedDept === dept.id ? "#1976d2" : "#333",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: selectedDept === dept.id ? "600" : "400",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  if (selectedDept !== dept.id) {
                    e.currentTarget.style.background = "#f5f5f5";
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedDept !== dept.id) {
                    e.currentTarget.style.background = "#fff";
                  }
                }}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERS SECTION */}
      <section style={{ background: "#fff", padding: "60px 0" }}>
        <div className="container" style={{ maxWidth: "1600px" }}>
          <h2 style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "10px",
            textAlign: "center",
            color: "#333"
          }}>
            {departmentsData[selectedDept]?.name}
          </h2>
          <p style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "16px",
            marginBottom: "40px",
            textAlign: "center",
            color: "#666",
          }}>
            {departmentsData[selectedDept]?.nameEn}
          </p>

          {currentMembers.length > 0 ? (
            <div className="member-card-grid">
              {currentMembers.map((member) => (
                <Link
                  key={member.id}
                  to={`/profile/${member.id}`}
                  className="member-card__link"
                >
                  <div className="member-card">
                    <div className="member-card__photo">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="member-card__body">
                      <h3 className="member-card__name">{member.name}</h3>
                      {member.title && <p className="member-card__line">{member.title}</p>}
                      {member.subtitle && <p className="member-card__line">{member.subtitle}</p>}
                      {member.role && <p className="member-card__line">{member.role}</p>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#999"
            }}>
              <p>Chưa có thành viên trong phòng/ban này</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default DepartmentMembersPage;
