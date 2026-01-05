import React from "react";
import { leadership } from "./About";
import "../style/App.css";
import heroBg from "../assets/img/sxd-ab6.png";

function LeadershipPage() {
  return (
    <div className="org-tree-page">
      <section
        className="section-hero"
        style={{
          position: "relative",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient( rgba(0,0,0,0.55), rgba(0,0,0,0.55) ), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 0,
          textAlign: "center",
        }}
      >
        <div style={{ color: "#fff" }}>
          <h1
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "56px",
              fontWeight: 400,
              letterSpacing: "3px",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            BAN LÃNH ĐẠO
          </h1>
          <div
            style={{
              width: "94px",
              height: "2px",
              background: "#d5c5a6",
              margin: "12px auto 0",
              opacity: 0.9,
            }}
          ></div>
        </div>
      </section>

      <section className="org-tree-section" style={{ paddingTop: "80px" }}>
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

          {/* LEVEL 3: DEPUTIES */}
          <div className="org-tree-level level-3">
            <div className="org-tree-connector line-horizontal"></div>
            <div className="org-tree-deputies">
              {leadership.deputies.map((person) => (
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
    </div>
  );
}

export default LeadershipPage;
