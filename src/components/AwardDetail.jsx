import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";


function AwardDetail() {
  const { id } = useParams();
  const [award, setAward] = useState(null);

  useEffect(() => {
    fetch("/src/data/achievement.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.awards?.find((a) => String(a.id) === String(id));
        setAward(found);
      });
  }, [id]);

  if (!award) return <div style={{padding: 80, textAlign: 'center'}}>Không tìm thấy giải thưởng.</div>;

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Hero section */}
      <section
        style={{
          position: "relative",
          minHeight: "48vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${award.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 80%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", textAlign: "center" }}>
            <h1
              style={{
                color: "#fff",
                fontFamily: "serif",
                fontWeight: 600,
                fontSize: "3rem",
                lineHeight: 1.1,
                margin: 0,
                textShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              {award.title}
            </h1>
            <div style={{ color: "#e6e6e6", marginTop: 16, fontSize: 22 }}>{award.shortDesc}</div>
          </div>
        </div>
      </section>

      {/* Nội dung chi tiết */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 16px" }}>
        <Link to="/achievement" style={{ color: "#b6a484", fontWeight: 500, fontSize: 18 }}>&larr; Quay lại</Link>
        {award.detail?.desc && <p style={{ color: '#333', fontSize: 18, lineHeight: 1.7, marginTop: 32 }}>{award.detail.desc}</p>}
        {Array.isArray(award.detail?.images) && award.detail.images.length > 0 && (
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', margin: '32px 0' }}>
            {award.detail.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`award-img-${idx}`}
                style={{ width: award.detail.images.length > 1 ? '48%' : '80%', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', marginBottom: 12 }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AwardDetail;
