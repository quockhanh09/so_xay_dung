import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";
import heroBg from "../assets/img/sxd-ab6.png";

function ManageSectionPage({ title, storageKey, members = [] }) {
  const staticMode = Array.isArray(members) && members.length > 0;
  const storageId = storageKey ? `section-${storageKey}` : null;

  const [entries, setEntries] = useState(() => (staticMode ? members : []));
  const [form, setForm] = useState({ id: null, name: "", role: "", note: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (staticMode || !storageId) return;
    const saved = localStorage.getItem(storageId);
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse saved entries", err);
      }
    }
  }, [storageId, staticMode]);

  useEffect(() => {
    if (staticMode || !storageId) return;
    localStorage.setItem(storageId, JSON.stringify(entries));
  }, [entries, storageId, staticMode]);

  const resetForm = () => {
    setForm({ id: null, name: "", role: "", note: "" });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    const payload = {
      ...form,
      name: form.name.trim(),
      role: form.role.trim(),
      note: form.note.trim(),
    };

    if (editingId) {
      setEntries((prev) => prev.map((item) => (item.id === editingId ? payload : item)));
    } else {
      setEntries((prev) => [...prev, { ...payload, id: Date.now() }]);
    }
    resetForm();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
  };

  const handleDelete = (id) => {
    setEntries((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) resetForm();
  };

  const displayEntries = useMemo(() => {
    if (staticMode) return members;
    return entries;
  }, [entries, members, staticMode]);

  return (
    <>
      {/* Hero banner like About */}
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
            {title}
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

      <div className="section-admin">
      <div className="section-admin__header">
        <h1>{title}</h1>
        {staticMode ? (
          <p>Danh sách thành viên hiển thị sẵn, nhấp vào từng người để xem hồ sơ.</p>
        ) : (
          <p>Thêm/sửa danh sách thành viên của {title.toLowerCase()} (lưu cục bộ trên trình duyệt).</p>
        )}
      </div>

      {staticMode ? (
        <div className="section-admin__cards">
          {displayEntries.map((item) => {
            const card = (
              <div className="member-card" key={item.id || item.name}>
                <div className="member-card__photo">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <div className="member-card__placeholder">{(item.name || "?").charAt(0)}</div>
                  )}
                </div>
                <div className="member-card__body">
                  <h3 className="member-card__name">{item.name}</h3>
                  {item.title && <p className="member-card__line">{item.title}</p>}
                  {item.subtitle && <p className="member-card__line">{item.subtitle}</p>}
                  {item.role && <p className="member-card__line">{item.role}</p>}
                  {item.note && <p className="member-card__note">{item.note}</p>}
                </div>
              </div>
            );

            if (item.id) {
              return (
                <Link to={`/profile/${item.id}`} className="member-card__link" key={item.id}>
                  {card}
                </Link>
              );
            }
            return card;
          })}
        </div>
      ) : (
        <div className="section-admin__grid">
          <form className="section-admin__form" onSubmit={handleSubmit}>
            <label>
              Họ và tên
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nhập họ tên"
                required
              />
            </label>
            <label>
              Chức vụ / vai trò
              <input
                type="text"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                placeholder="Ví dụ: Giám đốc, Phó phòng..."
              />
            </label>
            <label>
              Ghi chú
              <textarea
                rows="3"
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                placeholder="Thông tin thêm, liên hệ..."
              />
            </label>

            <div className="section-admin__actions">
              <button type="submit" className="btn-primary">
                {editingId ? "Cập nhật" : "Thêm mới"}
              </button>
              {editingId && (
                <button type="button" className="btn-ghost" onClick={resetForm}>
                  Hủy sửa
                </button>
              )}
            </div>
          </form>

          <div className="section-admin__list">
            {entries.length === 0 ? (
              <p className="section-admin__empty">Chưa có thành viên nào.</p>
            ) : (
              entries.map((item) => (
                <div key={item.id} className="section-admin__card">
                  <div>
                    <h3>{item.name}</h3>
                    {item.role && <p className="muted">{item.role}</p>}
                    {item.note && <p className="note">{item.note}</p>}
                  </div>
                  <div className="section-admin__card-actions">
                    <button onClick={() => handleEdit(item)}>Sửa</button>
                    <button onClick={() => handleDelete(item.id)} className="danger">Xóa</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default ManageSectionPage;
