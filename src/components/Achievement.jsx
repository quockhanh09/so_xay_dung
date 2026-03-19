import { useEffect, useMemo, useRef, useState } from "react";

import bgImage from "../assets/img/sxd-ab16.png";
import achievementData from "../data/achievement.json";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.87 0-7 2.02-7 4.5a1 1 0 0 0 2 0c0-1.13 2.11-2.5 5-2.5s5 1.37 5 2.5a1 1 0 0 0 2 0C19 16.02 15.87 14 12 14Z" fill="currentColor" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm12 8H5v8h14Zm-2-4H7H5v2h14V6Z" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm0 16a7 7 0 1 1 7-7 7.01 7.01 0 0 1-7 7Zm1-11a1 1 0 0 0-2 0v4a1 1 0 0 0 .29.71l2.5 2.5a1 1 0 0 0 1.42-1.42L13 11.59Z" fill="currentColor" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.5 4a6.5 6.5 0 1 0 4.03 11.6l4.43 4.43a1 1 0 0 0 1.41-1.41l-4.43-4.43A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 10.5 6Z" fill="currentColor" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.29 5.29a1 1 0 0 0 0 1.42L17.59 11H5a1 1 0 0 0 0 2h12.59l-4.3 4.29a1 1 0 1 0 1.42 1.42l6-6a1 1 0 0 0 0-1.42l-6-6a1 1 0 0 0-1.42 0Z" fill="currentColor" />
    </svg>
  );
}

function Achievement() {
  const awardsSectionRef = useRef(null);
  const topTabsRef = useRef(null);
  const featuredSectionRef = useRef(null);
  const librarySectionRef = useRef(null);
  const newsSectionRef = useRef(null);
  const [activeTopTab, setActiveTopTab] = useState("all");
  const [activeTopic, setActiveTopic] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateLayout = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  const awards = achievementData.awards || [];

  const topics = [
    "Tất cả",
    "Quy hoạch đô thị",
    "Chính sách & Pháp luật",
    "Chuyển đổi số",
    "Phát triển bền vững",
    "Kinh nghiệm quốc tế",
    "Hạ tầng kỹ thuật",
  ];

  const topTabs = [
    { key: "all", label: "Tất cả bài viết" },
    { key: "featured", label: "Bài viết nổi bật" },
    { key: "library", label: "Thư viện tri thức" },
    { key: "latest", label: "Tin tức cập nhật" },
  ];

  const statItems = [
    { value: "120+", label: "Bài viết chuyên môn" },
    { value: "6", label: "Chủ đề nghiên cứu" },
    { value: "25+", label: "Chuyên gia đóng góp" },
    { value: "5.000+", label: "Lượt đọc hàng tháng" },
  ];

  const articles = useMemo(
    () =>
      awards.map((award, index) => {
        const topic = topics[(index % (topics.length - 1)) + 1];
        const day = String((index * 3) % 28 + 1).padStart(2, "0");
        const month = String(((index * 2) % 12) + 1).padStart(2, "0");
        const year = "2024";
        return {
          id: award.id,
          title: award.title,
          excerpt: award.desc || award.shortDesc,
          shortDesc: award.shortDesc,
          image: award.images?.[0] || award.image,
          topic,
          featured: index < 2,
          readTime: `${8 + (index % 5) * 2} phút`,
          date: `${day}/${month}/${year}`,
          author: ["KTS. Nguyễn Minh Tuấn", "TS. Phạm Văn Hùng", "ThS. Trần Thị Lan Anh"][index % 3],
          tags: ["Đô thị thông minh", "Quy hoạch", "Công nghệ"].slice(0, (index % 3) + 1),
        };
      }),
    [awards]
  );

  const filteredArticles = useMemo(() => {
    let list = [...articles];

    if (activeTopTab === "featured") {
      list = list.filter((article) => article.featured);
    }

    if (activeTopTab === "library") {
      list = list.filter((article) => !article.featured);
    }

    if (activeTopTab === "latest") {
      list = [...list].reverse();
    }

    if (activeTopic !== "Tất cả") {
      list = list.filter((article) => article.topic === activeTopic);
    }

    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (normalizedQuery) {
      list = list.filter((article) =>
        `${article.title} ${article.excerpt} ${article.topic}`.toLowerCase().includes(normalizedQuery)
      );
    }

    return list;
  }, [activeTopTab, activeTopic, searchQuery, articles]);

  const featuredMain = filteredArticles[0] || articles[0];
  const featuredSide = (filteredArticles.length > 1 ? filteredArticles : articles).slice(1, 3);
  const visibleArticles = filteredArticles.slice(0, 6);

  const scrollToAwards = () => {
    awardsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToSectionWithOffset = (sectionRef) => {
    if (!sectionRef?.current || typeof window === "undefined") {
      return;
    }

    const stickyTabsHeight = topTabsRef.current?.offsetHeight || 0;
    const extraOffset = 20;
    const targetY = sectionRef.current.getBoundingClientRect().top + window.scrollY - stickyTabsHeight - extraOffset;

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: "smooth",
    });
  };

  const handleTopTabClick = (tabKey) => {
    setActiveTopTab(tabKey);

    if (tabKey === "all") {
      scrollToSectionWithOffset(awardsSectionRef);
      return;
    }

    if (tabKey === "featured") {
      scrollToSectionWithOffset(featuredMain ? featuredSectionRef : librarySectionRef);
      return;
    }

    if (tabKey === "library") {
      scrollToSectionWithOffset(librarySectionRef);
      return;
    }

    if (tabKey === "latest") {
      scrollToSectionWithOffset(newsSectionRef);
    }
  };

  return (
    <>
      <section
        id="portfolio-details"
        className="portfolio-details section achievement-hero"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 16px 80px",
          textAlign: "center",
          position: "relative",
          minHeight: "62vh",
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
            background: "linear-gradient(180deg, rgba(6, 14, 24, 0.68) 0%, rgba(7, 12, 19, 0.72) 100%)",
            zIndex: 1,
          }}
        ></div>
        {/* Centered Content */}
        <div
          className="achievement-hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "980px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px",
          }}
        >
          <div className="achievement-hero-badge">NGHIÊN CỨU &amp; TRI THỨC</div>
          <h1
            className="achievement-hero-title"
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 4.4vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "0.02em",
              marginBottom: "0",
              lineHeight: 1.1,
              textShadow: "0 8px 24px rgba(0,0,0,0.45)",
            }}
          >
            Kho tri thức chuyên môn
            <br />
            <span className="achievement-hero-highlight">về quy hoạch &amp; kiến trúc</span>
          </h1>
          <p
            className="achievement-hero-description"
            style={{
              color: "rgba(245, 247, 252, 0.95)",
              fontSize: "clamp(0.98rem, 1.55vw, 1.18rem)",
              maxWidth: "760px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Tập hợp các bài viết phân tích chuyên sâu, nghiên cứu xu hướng, kinh nghiệm thực tiễn và chính sách pháp luật trong lĩnh vực quy hoạch đô thị và kiến trúc.
          </p>
          <button
            type="button"
            className="achievement-hero-cta"
            onClick={scrollToAwards}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8 3.75H16L20.25 8V19.25C20.25 20.2165 19.4665 21 18.5 21H5.5C4.5335 21 3.75 20.2165 3.75 19.25V5.5C3.75 4.5335 4.5335 3.75 5.5 3.75H8Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3.75V8H20.25"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12.25H16M8 16H13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span>Khám phá bài viết</span>
          </button>
        </div>
      </section>

      <section ref={awardsSectionRef} className="achievement-knowledge">
        <div ref={topTabsRef} className="achievement-top-tabs">
          {topTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`achievement-tab ${activeTopTab === tab.key ? "is-active" : ""}`}
              onClick={() => handleTopTabClick(tab.key)}
            >
              {tab.label}
            </button>
          ))}
          <span className="achievement-total-count">{filteredArticles.length} bài viết</span>
        </div>

        <div className="achievement-stats">
          {statItems.map((item) => (
            <div key={item.label} className="achievement-stat-item">
              <div className="achievement-stat-value">{item.value}</div>
              <div className="achievement-stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="achievement-content-wrap">
          {featuredMain && (
            <section ref={featuredSectionRef} className="achievement-featured">
              <div className="achievement-featured-heading">
                <div className="achievement-featured-eyebrow">NỔI BẬT</div>
                <h2>Bài viết tiêu biểu</h2>
              </div>

              <div className="achievement-featured-layout">
                <article className="achievement-featured-main">
                  <div className="achievement-featured-image-wrap">
                    <img src={featuredMain.image} alt={featuredMain.title} />
                    <div className="achievement-featured-chip-row">
                      <div className="achievement-chip">{featuredMain.topic}</div>
                    </div>
                  </div>
                  <div className="achievement-featured-meta">
                    <span className="achievement-meta-item"><UserIcon />{featuredMain.author}</span>
                    <span className="achievement-meta-item"><CalendarIcon />{featuredMain.date}</span>
                    <span className="achievement-meta-item"><ClockIcon />{featuredMain.readTime}</span>
                  </div>
                  <h3>{featuredMain.title}</h3>
                  <p>{featuredMain.excerpt}</p>
                  <div className="achievement-tag-row">
                    {featuredMain.tags.map((tag) => (
                      <span key={tag} className="achievement-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>

                <div className="achievement-featured-side">
                  {featuredSide.map((article) => (
                    <article key={article.id} className="achievement-side-item">
                      <img src={article.image} alt={article.title} />
                      <div className="achievement-side-content">
                        <div className="achievement-side-topic">{article.topic}</div>
                        <h4>{article.title}</h4>
                        <div className="achievement-side-meta">
                          <span className="achievement-meta-item"><CalendarIcon />{article.date}</span>
                          <span className="achievement-meta-item"><ClockIcon />{article.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section ref={librarySectionRef} className="achievement-library">
            <div className="achievement-library-head">
              <div>
                <h2>Thư viện tri thức</h2>
                <p>Tổng hợp nghiên cứu, phân tích và kinh nghiệm chuyên môn</p>
              </div>
              <div className="achievement-search-wrap">
                <span className="achievement-search-icon"><SearchIcon /></span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Tìm kiếm bài viết..."
                  aria-label="Tìm kiếm bài viết"
                />
              </div>
            </div>

            <div className="achievement-topic-row">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  className={`achievement-topic ${activeTopic === topic ? "is-active" : ""}`}
                  onClick={() => setActiveTopic(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className="achievement-list-meta">
              <span>
                Hiển thị {visibleArticles.length === 0 ? 0 : 1}-{visibleArticles.length} trong tổng số {filteredArticles.length} bài viết
              </span>
              <span>Trang 1/2</span>
            </div>

            <div className="achievement-grid">
              {visibleArticles.map((article) => (
                <article key={article.id} className="achievement-card">
                  <div className="achievement-card-image-wrap">
                    <img src={article.image} alt={article.title} />
                    <span className="achievement-chip">{article.topic}</span>
                    {article.featured && <span className="achievement-chip achievement-chip-gold">★ Nổi bật</span>}
                  </div>
                  <div className="achievement-card-body">
                    <div className="achievement-card-meta">
                      <span className="achievement-meta-item"><UserIcon />{article.author}</span>
                      <span className="achievement-meta-item"><ClockIcon />{article.readTime}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.shortDesc}</p>
                    <div className="achievement-tag-row">
                      {article.tags.map((tag) => (
                        <span key={tag} className="achievement-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="achievement-card-footer">
                      <span className="achievement-meta-item"><CalendarIcon />{article.date}</span>
                      <button type="button">
                        <span>Đọc thêm</span>
                        <ArrowRightIcon />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {visibleArticles.length === 0 && (
              <div className="achievement-empty-state">Không tìm thấy bài viết phù hợp với bộ lọc hiện tại.</div>
            )}
          </section>
        </div>
      </section>
      <section ref={newsSectionRef} className="achievement-news-section" style={{ background: '#f7fafd', padding: isMobile ? '38px 0 26px' : '56px 0 40px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: isMobile ? '0 14px' : '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 20 : 28 }}>
            <div style={{
              width: 44, height: 44, background: '#e6f4ff', borderRadius: 12, display: isMobile ? 'none' : 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10
            }}>
              <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#b2e0ff"/><path d="M7 8.5h10M7 12h10M7 15.5h6" stroke="#1a5d9b" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h2 style={{ fontWeight: 800, fontSize: isMobile ? '2.5rem' : '2rem', margin: 0, color: '#1a2a3a', letterSpacing: 0.2 }}>Tin tức cập nhật</h2>
            <p style={{ color: '#5a6a7a', margin: '8px 0 0', fontSize: isMobile ? 14 : 16, fontWeight: 500, lineHeight: 1.5 }}>
              Tổng hợp tin tức mới nhất về quy hoạch, kiến trúc và phát triển đô thị từ các nguồn uy tín
            </p>
          </div>
          <div
            className="news-grid"
            style={{
              display: 'flex',
              flexWrap: isMobile ? 'nowrap' : 'wrap',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              gap: isMobile ? 16 : 24,
              rowGap: isMobile ? 16 : 32,
              margin: '0 auto',
              maxWidth: 1300,
            }}
          >
            {/* 6 tin tức mẫu, giống ảnh 2 */}
            {[
              {
                id: 1,
                image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
                source: 'Báo Xây dựng',
                date: '18/12/2024',
                title: 'Hà Nội phê duyệt quy hoạch phân khu đô thị sông Hồng với tổng diện tích hơn 10.000 ha',
                desc: 'UBND TP Hà Nội vừa phê duyệt nhiệm vụ lập quy hoạch phân khu đô thị sông Hồng, tạo động lực phát triển mới cho thủ đô với tầm nhìn đến năm 2045.',
                link: '#',
              },
              {
                id: 2,
                image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
                source: 'Báo Nhân Dân',
                date: '15/12/2024',
                title: 'Chính phủ ban hành Nghị định mới về quản lý quy hoạch đô thị, có hiệu lực từ 01/01/2025',
                desc: 'Nghị định số 98/2024/NĐ-CP quy định chi tiết về lập, thẩm định, phê duyệt và quản lý quy hoạch đô thị, thay thế các quy định cũ không còn phù hợp.',
                link: '#',
              },
              {
                id: 3,
                image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
                source: 'VnExpress',
                date: '12/12/2024',
                title: 'TP.HCM triển khai dự án đô thị thông minh tại Khu đô thị sáng tạo phía Đông',
                desc: 'Dự án trị giá 4,2 tỷ USD sẽ tích hợp công nghệ IoT, AI và big data để xây dựng khu đô thị thông minh đầu tiên tại Việt Nam, dự kiến hoàn thành vào năm 2030.',
                link: '#',
              },
              {
                id: 4,
                image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
                source: 'Tạp chí Kiến trúc',
                date: '10/12/2024',
                title: 'Xu hướng kiến trúc xanh trong phát triển đô thị hiện đại',
                desc: 'Các chuyên gia nhận định kiến trúc xanh sẽ là xu hướng chủ đạo trong phát triển đô thị bền vững tại Việt Nam giai đoạn tới.',
                link: '#',
              },
              {
                id: 5,
                image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=600&q=80',
                source: 'Báo Đà Nẵng',
                date: '09/12/2024',
                title: 'Đà Nẵng đẩy mạnh phát triển đô thị ven sông Hàn',
                desc: 'Thành phố Đà Nẵng tập trung đầu tư phát triển các khu đô thị ven sông Hàn, tạo điểm nhấn cảnh quan và thu hút đầu tư.',
                link: '#',
              },
              {
                id: 6,
                image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80',
                source: 'Báo Xây dựng',
                date: '08/12/2024',
                title: 'Hội thảo quốc tế về phát triển đô thị bền vững tại Việt Nam',
                desc: 'Hội thảo quy tụ các chuyên gia trong và ngoài nước, chia sẻ kinh nghiệm phát triển đô thị bền vững, thích ứng biến đổi khí hậu.',
                link: '#',
              },
            ].map(news => (
              <div key={news.id} className="news-card" style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: isMobile ? 560 : 260, transition: 'box-shadow .2s', border: '1.5px solid #9ce9df', width: isMobile ? '100%' : 400, maxWidth: isMobile ? '100%' : '32%', flex: isMobile ? '0 0 auto' : '1 1 400px', margin: 0 }}>
                <div style={{ position: 'relative', height: isMobile ? 190 : 110, overflow: 'hidden' }}>
                  <img src={news.image} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <span style={{ position: 'absolute', top: 14, left: 14, background: '#eef2f5', color: '#34495d', fontWeight: 600, fontSize: isMobile ? 13 : 13, borderRadius: 999, padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" style={{ marginRight: 3 }}><rect width="24" height="24" rx="8" fill="#b2e0ff"/><path d="M7 8.5h10M7 12h10M7 15.5h6" stroke="#1a5d9b" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    {news.source}
                  </span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: isMobile ? '14px 18px 16px' : '12px 12px 0' }}>
                  <div style={{ color: '#7a8a9a', fontSize: isMobile ? '0.95rem' : 11, marginBottom: isMobile ? 8 : 4, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#e6f4ff"/><path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm12 8H5v8h14Zm-2-4H7H5v2h14V6Z" fill="#1a5d9b"/></svg>
                    {news.date}
                  </div>
                  <h3 style={{ fontSize: isMobile ? '2rem' : 15, fontWeight: 700, margin: '0 0 8px', color: '#0f8f90', lineHeight: 1.3 }}>{news.title}</h3>
                  <p style={{ color: '#4a5a6a', fontSize: isMobile ? '1.32rem' : 13, margin: 0, flex: 1, lineHeight: 1.55 }}>{news.desc}</p>
                  <div style={{ marginTop: isMobile ? 14 : 10, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <a href={news.link} style={{ color: '#0f9f98', fontWeight: 700, fontSize: isMobile ? '1.4rem' : 15, display: 'inline-flex', alignItems: 'center', gap: 7, textDecoration: 'none', transition: 'color .2s' }}>
                      Đọc thêm
                      <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><path d="M13.29 5.29a1 1 0 0 0 0 1.42L17.59 11H5a1 1 0 0 0 0 2h12.59l-4.3 4.29a1 1 0 1 0 1.42 1.42l6-6a1 1 0 0 0 0-1.42l-6-6a1 1 0 0 0-1.42 0Z" fill="#1abc9c"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Achievement;
