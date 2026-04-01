import React, { useEffect, useRef, useState } from "react";
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
  const aboutTabsRef = useRef(null);
  const missionSectionRef = useRef(null);
  const activitySectionRef = useRef(null);
  const historySectionRef = useRef(null);
  const expertsSectionRef = useRef(null);
  const orgSectionRef = useRef(null);
  const [activeAboutTab, setActiveAboutTab] = useState("mission");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)");
    const updateLayout = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

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
  const itemsPerPage = 8;
  const totalPages = Math.ceil(charactersList.length / itemsPerPage);

  const currentItems = charactersList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const timelineMilestones = [
    {
      year: "2008",
      title: "Thành lập công ty",
      description:
        "Công ty được thành lập với đội ngũ 10 chuyên gia đầu tiên, tập trung vào tư vấn quy hoạch đô thị.",
      image:
        "https://public.readdy.ai/ai/img_res/a076b05d1533adf075e2504ec483c3aa.jpg",
      imageAlt: "Thành lập công ty",
    },
    {
      year: "2012",
      title: "Mở rộng quy mô",
      description:
        "Mở rộng sang lĩnh vực thiết kế kiến trúc và tư vấn chiến lược, đội ngũ tăng lên 35 người.",
      image:
        "https://public.readdy.ai/ai/img_res/86a2298a67c55080c1f7bc58bc03185e.jpg",
      imageAlt: "Mở rộng quy mô",
    },
    {
      year: "2016",
      title: "Chuyển đổi số",
      description:
        "Ứng dụng công nghệ GIS, BIM vào quy trình làm việc, nâng cao chất lượng và hiệu quả dự án.",
      image:
        "https://public.readdy.ai/ai/img_res/66e669187122692b85047d28165e5bb6.jpg",
      imageAlt: "Chuyển đổi số",
    },
    {
      year: "2020",
      title: "Phát triển bền vững",
      description:
        "Tập trung vào các dự án phát triển bền vững, đô thị xanh, đạt chứng nhận ISO 9001:2015.",
      image:
        "https://public.readdy.ai/ai/img_res/f035c2cb34968ee842458225a6ef5c39.jpg",
      imageAlt: "Phát triển bền vững",
    },
    {
      year: "2024",
      title: "Dẫn đầu ngành",
      description:
        "Trở thành một trong những đơn vị tư vấn hàng đầu với hơn 200 dự án thành công trên toàn quốc.",
      image:
        "https://public.readdy.ai/ai/img_res/e2f9a3e97ac7a29f93c824658b8ad3bc.jpg",
      imageAlt: "Dẫn đầu ngành",
    },
  ];

  const aboutTabs = [
    { key: "mission", label: "Sứ mệnh & Tầm nhìn", ref: missionSectionRef },
    { key: "activity", label: "Lĩnh vực hoạt động", ref: activitySectionRef },
    { key: "history", label: "Lịch sử hình thành", ref: historySectionRef },
    { key: "experts", label: "Đội ngũ chuyên gia", ref: expertsSectionRef },
    { key: "organization", label: "Cơ cấu tổ chức", ref: orgSectionRef },
  ];

  const scrollToAboutSection = (sectionRef) => {
    if (!sectionRef?.current || typeof window === "undefined") {
      return;
    }

    const stickyTabsHeight = aboutTabsRef.current?.offsetHeight || 0;
    const extraOffset = 20;
    const targetY = sectionRef.current.getBoundingClientRect().top + window.scrollY - stickyTabsHeight - extraOffset;

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: "smooth",
    });
  };

  const handleAboutTabClick = (tab) => {
    setActiveAboutTab(tab.key);
    scrollToAboutSection(tab.ref);
  };

  return (
    <>
      {/* PHẦN HERO - Về chúng tôi */}
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
          {/* Breadcrumb */}
          <div style={{
            color: '#fff',
            fontSize: '1.1rem',
            marginBottom: '12px',
            opacity: 0.85,
            letterSpacing: '0.5px',
          }}>
            <span style={{ opacity: 0.8 }}>trang chủ</span> <span style={{ opacity: 0.6 }}>/</span> <span style={{ opacity: 0.8 }}>giới thiệu</span>
          </div>
          <h1
            style={{
              color: "#fff",
              fontSize: "3.2rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              marginBottom: "18px",
              fontFamily: "serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            Về chúng tôi
          </h1>
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "#fff",
              margin: "0 auto 0",
              marginBottom: "18px",
              opacity: 0.7,
            }}
          ></div>
          <div
            style={{
              color: '#fff',
              fontSize: '1.25rem',
              fontWeight: 400,
              marginBottom: '0',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              opacity: 0.95,
              maxWidth: 700,
            }}
          >
            Hơn 15 năm kinh nghiệm trong lĩnh vực tư vấn kiến trúc và quy hoạch
          </div>
        </div>
      </section>

      {/* About tabs: sticky toàn trang */}
      <div ref={aboutTabsRef} style={{
        borderBottom: '2px solid #e0ece7',
        fontSize: '1.08rem',
        fontWeight: 500,
        position: 'sticky',
        top: 0,
        zIndex: 110,
        background: 'rgba(247, 252, 250, 0.96)',
        backdropFilter: 'blur(8px)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          gap: '32px',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
        }}>
          {aboutTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => handleAboutTabClick(tab)}
              style={{
                border: 0,
                background: 'transparent',
                color: activeAboutTab === tab.key ? '#1abc9c' : '#444',
                borderBottom: activeAboutTab === tab.key ? '3px solid #1abc9c' : '3px solid transparent',
                padding: '8px 0',
                cursor: 'pointer',
                fontSize: '1.08rem',
                fontWeight: activeAboutTab === tab.key ? 600 : 500,
                flexShrink: 0,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sứ mệnh & Tầm nhìn */}
      <section
        ref={missionSectionRef}
        style={{
          background: '#f7fcfa',
          padding: isMobile ? '28px 0 34px' : '48px 0',
          width: '100%',
        }}
      >
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 24px',
        }}>
          {/* Card grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '18px' : '32px',
            marginTop: '24px',
          }}>
            {/* Card 1: Sứ mệnh */}
            <div style={{
              background: '#fff',
              borderRadius: isMobile ? '14px' : '18px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              padding: isMobile ? '24px 22px 22px' : '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: isMobile ? '260px' : '220px',
            }}>
              <div style={{
                background: '#e6faf6',
                borderRadius: isMobile ? '12px' : '50%',
                width: isMobile ? 56 : 48,
                height: isMobile ? 56 : 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: isMobile ? 14 : 18,
              }}>
                {/* Icon: Lightbulb */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.53 1.5 4.71 3.67 5.67A2.5 2.5 0 0 0 8 17.5V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-.5a2.5 2.5 0 0 0-1.67-2.83A7.001 7.001 0 0 0 12 2Zm0 2a5 5 0 0 1 5 5c0 2.21-1.44 4.09-3.44 4.77a1 1 0 0 0-.56.9V17h-2v-2.33a1 1 0 0 0-.56-.9A5.001 5.001 0 0 1 7 9a5 5 0 0 1 5-5Z" fill="#1abc9c"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: isMobile ? '2.15rem' : '1.25rem', marginBottom: 12, lineHeight: 1.15 }}>Sứ mệnh</div>
              <div style={{ color: '#444', fontSize: isMobile ? '1.45rem' : '1rem', lineHeight: 1.6 }}>
                Đồng hành cùng sự phát triển bền vững của đô thị và cộng đồng, tạo dựng không gian sống chất lượng cao với bản sắc văn hóa địa phương thông qua các giải pháp quy hoạch và thiết kế chuyên nghiệp.
              </div>
            </div>
            {/* Card 2: Tầm nhìn */}
            <div style={{
              background: '#fff',
              borderRadius: isMobile ? '14px' : '18px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              padding: isMobile ? '24px 22px 22px' : '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: isMobile ? '260px' : '220px',
            }}>
              <div style={{
                background: '#e6faf6',
                borderRadius: isMobile ? '12px' : '50%',
                width: isMobile ? 56 : 48,
                height: isMobile ? 56 : 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: isMobile ? 14 : 18,
              }}>
                {/* Icon: Eye */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 5c-5 0-9 4-9 7s4 7 9 7 9-4 9-7-4-7-9-7Zm0 12c-3.87 0-7-3.13-7-5s3.13-5 7-5 7 3.13 7 5-3.13 5-7 5Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="#1abc9c"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: isMobile ? '2.15rem' : '1.25rem', marginBottom: 12, lineHeight: 1.15 }}>Tầm nhìn</div>
              <div style={{ color: '#444', fontSize: isMobile ? '1.45rem' : '1rem', lineHeight: 1.6 }}>
                Trở thành đơn vị tư vấn kiến trúc - quy hoạch hàng đầu Việt Nam, được công nhận về năng lực chuyên môn, tính sáng tạo và trách nhiệm xã hội trong từng dự án.
              </div>
            </div>
            {/* Card 3: Giá trị cốt lõi */}
            <div style={{
              background: '#fff',
              borderRadius: isMobile ? '14px' : '18px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              padding: isMobile ? '24px 22px 22px' : '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: isMobile ? '260px' : '220px',
            }}>
              <div style={{
                background: '#e6faf6',
                borderRadius: isMobile ? '12px' : '50%',
                width: isMobile ? 56 : 48,
                height: isMobile ? 56 : 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: isMobile ? 14 : 18,
              }}>
                {/* Icon: Heart */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" fill="#1abc9c"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: isMobile ? '2.15rem' : '1.25rem', marginBottom: 12, lineHeight: 1.15 }}>Giá trị cốt lõi</div>
              <div style={{ color: '#444', fontSize: isMobile ? '1.45rem' : '1rem', lineHeight: 1.6 }}>
                Chuyên nghiệp, sáng tạo, bền vững và trách nhiệm. Chúng tôi cam kết mang đến những giải pháp tối ưu nhất, đặt lợi ích cộng đồng và môi trường lên hàng đầu.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LĨNH VỰC HOẠT ĐỘNG */}
      <section ref={activitySectionRef} id="activity" style={{ background: '#fff', padding: '64px 0', width: '100%' }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          minHeight: 320,
        }}>
          {/* Left: Title */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 480, paddingRight: 32 }}>
            <div style={{ color: '#8b98a9', fontSize: 15, letterSpacing: 1, fontWeight: 500, marginBottom: 18 }}>
              LĨNH VỰC HOẠT ĐỘNG
            </div>
            <div style={{ fontSize: '2.7rem', fontWeight: 700, color: '#111827', lineHeight: 1.1 }}>
              Năng lực<br />Tư vấn toàn diện
            </div>
          </div>
          {/* Right: Description */}
          <div style={{ flex: 2, minWidth: 320, color: '#222', fontSize: '1.13rem', lineHeight: 1.7 }}>
            <div style={{ marginBottom: 24 }}>
              Với đội ngũ chuyên gia giàu kinh nghiệm và phương pháp tiếp cận khoa học, chúng tôi cung cấp dịch vụ tư vấn toàn diện từ quy hoạch vùng đến thiết kế chi tiết công trình, đảm bảo tính khả thi, bền vững và phù hợp với định hướng phát triển của từng địa phương.
            </div>
            <div>
              Chúng tôi không chỉ tạo ra các bản vẽ quy hoạch mà còn đồng hành cùng khách hàng trong suốt quá trình triển khai, từ nghiên cứu ban đầu đến khi dự án được phê duyệt và đưa vào thực hiện.
            </div>
          </div>
        </div>
      </section>
      {/* QUY HOẠCH VÙNG - TỈNH - PHÂN KHU */}
      <section style={{ background: '#fff', padding: isMobile ? '40px 0' : '64px 0', width: '100%' }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          alignItems: 'center', // căn giữa dọc
          gap: isMobile ? 22 : 48,
        }}>
          {/* Left: Map Image */}
          <div style={{ flex: 1, minWidth: isMobile ? 0 : 420, maxWidth: isMobile ? '100%' : 680, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: isMobile ? '100%' : 680, background: '#f7fafc', borderRadius: isMobile ? 14 : 18, boxShadow: isMobile ? '0 1px 10px rgba(0,0,0,0.06)' : '0 2px 16px rgba(0,0,0,0.07)', overflow: 'hidden', padding: 0 }}>
              <img
                src="https://public.readdy.ai/ai/img_res/3ab41539e100a0479fdf39e30b6d2d67.jpg"
                alt="Bản đồ quy hoạch"
                style={{ width: '100%', height: isMobile ? 430 : 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
          {/* Right: Content */}
          <div style={{ flex: 1.3, minWidth: 340 }}>
            <div style={{ color: '#1abc9c', fontSize: 14, letterSpacing: 1, fontWeight: 500, marginBottom: 10 }}>
              LĨNH VỰC 1
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', lineHeight: 1.1, marginBottom: 16 }}>
              Quy hoạch vùng - tỉnh - phân khu
            </div>
            <div style={{ color: '#444', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: 24 }}>
              Chúng tôi cung cấp dịch vụ tư vấn lập quy hoạch từ cấp vùng đến quy hoạch chi tiết, đảm bảo tính khả thi, tính bền vững và phù hợp với định hướng phát triển của địa phương.
            </div>
            <div style={{ fontWeight: 600, marginBottom: 10 }}>Phạm vi công việc</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 28 }}>
              {[
                'Quy hoạch vùng và liên vùng',
                'Quy hoạch tỉnh, quy hoạch đô thị',
                'Quy hoạch phân khu tỷ lệ 1/2000',
                'Quy hoạch chi tiết tỷ lệ 1/500',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: '50%', background: '#e6faf6', marginRight: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M7.999 13.2 4.799 10l-1.133 1.134 4.333 4.333 8.333-8.334-1.133-1.133-7.2 7.2Z" fill="#1abc9c"/></svg>
                  </span>
                  <span style={{ color: '#222', fontSize: '0.98rem' }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ fontWeight: 600, marginBottom: 10 }}>Quy trình tư vấn</div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { title: 'Nghiên cứu', desc: 'Thu thập dữ liệu, khảo sát thực địa' },
                { title: 'Phân tích', desc: 'Đánh giá hiện trạng, xu hướng phát triển' },
                { title: 'Đề xuất', desc: 'Xây dựng phương án quy hoạch' },
                { title: 'Thẩm định', desc: 'Lấy ý kiến, điều chỉnh phương án' },
                { title: 'Triển khai', desc: 'Hoàn thiện hồ sơ, trình phê duyệt' },
              ].map((step, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{
                    minWidth: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#1abc9c',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 14,
                  }}>{idx + 1}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.98rem', marginBottom: 2 }}>{step.title}</div>
                    <div style={{ color: '#444', fontSize: '0.95rem' }}>{step.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* QUY HOẠCH ĐÔ THỊ VÀ NÔNG THÔN */}
      <section style={{ background: '#fff', padding: isMobile ? '40px 0' : '64px 0', width: '100%' }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: isMobile ? 22 : 48,
        }}>
          {/* Left: Content */}
          <div style={{ flex: 1.3, minWidth: 340 }}>
            <div style={{ color: '#1abc9c', fontSize: 14, letterSpacing: 1, fontWeight: 500, marginBottom: 10 }}>
              LĨNH VỰC 2
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', lineHeight: 1.1, marginBottom: 16 }}>
              Quy hoạch đô thị và nông thôn
            </div>
            <div style={{ color: '#444', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: 24 }}>
              Tư vấn quy hoạch xây dựng đô thị và nông thôn mới, tập trung vào cải thiện hạ tầng, không gian sống và bảo tồn bản sắc văn hóa.
            </div>
            <div style={{ fontWeight: 600, marginBottom: 10 }}>Phạm vi công việc</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 28 }}>
              {[
                'Quy hoạch xây dựng đô thị',
                'Quy hoạch nông thôn mới',
                'Quy hoạch khu dân cư',
                'Quy hoạch khu công nghiệp',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: '50%', background: '#e6faf6', marginRight: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M7.999 13.2 4.799 10l-1.133 1.134 4.333 4.333 8.333-8.334-1.133-1.133-7.2 7.2Z" fill="#1abc9c"/></svg>
                  </span>
                  <span style={{ color: '#222', fontSize: '0.98rem' }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ fontWeight: 600, marginBottom: 10 }}>Quy trình tư vấn</div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { title: 'Nghiên cứu', desc: 'Phân tích đặc điểm địa phương' },
                { title: 'Phân tích', desc: 'Đánh giá tiềm năng phát triển' },
                { title: 'Đề xuất', desc: 'Lập phương án quy hoạch tổng thể' },
                { title: 'Thẩm định', desc: 'Tham vấn cộng đồng và cơ quan' },
                { title: 'Triển khai', desc: 'Hoàn thiện và phê duyệt' },
              ].map((step, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{
                    minWidth: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#1abc9c',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 14,
                  }}>{idx + 1}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.98rem', marginBottom: 2 }}>{step.title}</div>
                    <div style={{ color: '#444', fontSize: '0.95rem' }}>{step.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: isMobile ? 0 : 420, maxWidth: isMobile ? '100%' : 680, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: isMobile ? '100%' : 680, borderRadius: isMobile ? 14 : 18, boxShadow: isMobile ? '0 1px 10px rgba(0,0,0,0.06)' : 'none', overflow: 'hidden', padding: 0 }}>
              <img
                src="https://public.readdy.ai/ai/img_res/8f75024fcef8f3bcbe9f0f63ad9c68cc.jpg"
                alt="Quy hoạch đô thị và nông thôn"
                style={{ width: '100%', height: isMobile ? 430 : 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* THIẾT KẾ ĐÔ THỊ */}
      <section style={{ background: '#fff', padding: isMobile ? '40px 0' : '64px 0', width: '100%' }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: isMobile ? 22 : 48,
        }}>
          {/* Left: Image */}
          <div style={{ flex: 1, minWidth: isMobile ? 0 : 420, maxWidth: isMobile ? '100%' : 680, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: isMobile ? '100%' : 680, background: '#f7fafc', borderRadius: isMobile ? 14 : 18, boxShadow: isMobile ? '0 1px 10px rgba(0,0,0,0.06)' : '0 2px 16px rgba(0,0,0,0.07)', overflow: 'hidden', padding: 0 }}>
              <img
                src="https://public.readdy.ai/ai/img_res/45d3c62951391d85344e988cfdb50f54.jpg"
                alt="Thiết kế đô thị"
                style={{ width: '100%', height: isMobile ? 430 : 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
          {/* Right: Content */}
          <div style={{ flex: 1.3, minWidth: 340 }}>
            <div style={{ color: '#1abc9c', fontSize: 14, letterSpacing: 1, fontWeight: 500, marginBottom: 10 }}>
              LĨNH VỰC 3
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', lineHeight: 1.1, marginBottom: 16 }}>
              Thiết kế đô thị
            </div>
            <div style={{ color: '#444', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: 24 }}>
              Thiết kế không gian đô thị, cảnh quan đô thị, tạo dựng môi trường sống chất lượng cao với bản sắc riêng.
            </div>
            <div style={{ fontWeight: 600, marginBottom: 10 }}>Phạm vi công việc</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 28 }}>
              {[
                'Thiết kế không gian công cộng',
                'Thiết kế cảnh quan đô thị',
                'Thiết kế đường phố và quảng trường',
                'Thiết kế hệ thống chiếu sáng đô thị',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: '50%', background: '#e6faf6', marginRight: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M7.999 13.2 4.799 10l-1.133 1.134 4.333 4.333 8.333-8.334-1.133-1.133-7.2 7.2Z" fill="#1abc9c"/></svg>
                  </span>
                  <span style={{ color: '#222', fontSize: '0.98rem' }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ fontWeight: 600, marginBottom: 10 }}>Quy trình tư vấn</div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { title: 'Nghiên cứu', desc: 'Khảo sát bối cảnh và nhu cầu' },
                { title: 'Phân tích', desc: 'Phân tích không gian và động tuyến' },
                { title: 'Đề xuất', desc: 'Phát triển ý tưởng thiết kế' },
                { title: 'Thẩm định', desc: 'Trình bày và điều chỉnh' },
                { title: 'Triển khai', desc: 'Hoàn thiện hồ sơ thi công' },
              ].map((step, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{
                    minWidth: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#1abc9c',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 14,
                  }}>{idx + 1}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.98rem', marginBottom: 2 }}>{step.title}</div>
                    <div style={{ color: '#444', fontSize: '0.95rem' }}>{step.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      {/* THIẾT KẾ CÔNG TRÌNH VÀ HẠ TẦNG */}
      <section style={{ background: '#fff', padding: isMobile ? '40px 0' : '64px 0', width: '100%' }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: isMobile ? 22 : 48,
        }}>
          {/* Left: Content */}
          <div style={{ flex: 1.3, minWidth: 340 }}>
            <div style={{ color: '#1abc9c', fontSize: 14, letterSpacing: 1, fontWeight: 500, marginBottom: 10 }}>
              LĨNH VỰC 4
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', lineHeight: 1.1, marginBottom: 16 }}>
              Thiết kế công trình và hạ tầng
            </div>
            <div style={{ color: '#444', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: 24 }}>
              Thiết kế kiến trúc công trình công cộng, hạ tầng kỹ thuật đô thị đảm bảo tính thẩm mỹ, chức năng và bền vững.
            </div>
            <div style={{ fontWeight: 600, marginBottom: 10 }}>Phạm vi công việc</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 28 }}>
              {[
                'Thiết kế công trình công cộng',
                'Thiết kế hạ tầng kỹ thuật',
                'Thiết kế giao thông đô thị',
                'Thiết kế hệ thống cấp thoát nước',
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: '50%', background: '#e6faf6', marginRight: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M7.999 13.2 4.799 10l-1.133 1.134 4.333 4.333 8.333-8.334-1.133-1.133-7.2 7.2Z" fill="#1abc9c"/></svg>
                  </span>
                  <span style={{ color: '#222', fontSize: '0.98rem' }}>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ fontWeight: 600, marginBottom: 10 }}>Quy trình tư vấn</div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { title: 'Nghiên cứu', desc: 'Xác định yêu cầu kỹ thuật' },
                { title: 'Phân tích', desc: 'Đánh giá điều kiện địa chất, môi trường' },
                { title: 'Đề xuất', desc: 'Thiết kế sơ bộ và tính toán' },
                { title: 'Thẩm định', desc: 'Thẩm tra thiết kế' },
                { title: 'Triển khai', desc: 'Thiết kế bản vẽ thi công' },
              ].map((step, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{
                    minWidth: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#1abc9c',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 14,
                  }}>{idx + 1}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.98rem', marginBottom: 2 }}>{step.title}</div>
                    <div style={{ color: '#444', fontSize: '0.95rem' }}>{step.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: isMobile ? 0 : 420, maxWidth: isMobile ? '100%' : 680, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: isMobile ? '100%' : 680, background: '#f7fafc', borderRadius: isMobile ? 14 : 18, boxShadow: isMobile ? '0 1px 10px rgba(0,0,0,0.06)' : '0 2px 16px rgba(0,0,0,0.07)', overflow: 'hidden', padding: 0 }}>
              <img
                src="https://public.readdy.ai/ai/img_res/52c06afc6477bffe286a4df8f6adcc30.jpg"
                alt="Thiết kế công trình và hạ tầng"
                style={{ width: '100%', height: isMobile ? 430 : 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={historySectionRef} className="about-history-section">
        <div className="about-history-wrapper">
          <div className="about-history-header">
            <h2>Lịch sử hình thành</h2>
            <p>Hành trình phát triển và trưởng thành của chúng tôi qua các mốc quan trọng</p>
          </div>

          <div className="about-history-timeline">
            <div className="about-history-line" aria-hidden="true"></div>
            {timelineMilestones.map((milestone, index) => {
              const isImageLeft = index % 2 === 1;
              return (
                <div key={milestone.year} className="about-history-item">
                  <div className={`about-history-col ${isImageLeft ? "media" : "content"}`}>
                    {isImageLeft ? (
                      <div className="about-history-image-card">
                        <img src={milestone.image} alt={milestone.imageAlt} loading="lazy" />
                      </div>
                    ) : (
                      <div className="about-history-content-card">
                        <h3>{milestone.title}</h3>
                        <p>{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="about-history-year" aria-label={`Năm ${milestone.year}`}>
                    {milestone.year}
                  </div>

                  <div className={`about-history-col ${isImageLeft ? "content" : "media"}`}>
                    {isImageLeft ? (
                      <div className="about-history-content-card">
                        <h3>{milestone.title}</h3>
                        <p>{milestone.description}</p>
                      </div>
                    ) : (
                      <div className="about-history-image-card">
                        <img src={milestone.image} alt={milestone.imageAlt} loading="lazy" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* DOI NGU CHUYEN GIA */}
      <section
        ref={expertsSectionRef}
        id="team-members"
        className="team-members section about-experts-section"
        style={{
          background: "#f1f3f5",
          padding: "60px 0",
        }}
      >
        <div className="container about-experts-header">
          <h2>Đội ngũ chuyên gia</h2>
          <p>
            Đội ngũ kiến trúc sư, quy hoạch viên và chuyên gia giàu kinh nghiệm, tâm huyết với nghề nghiệp
          </p>
        </div>

        <div className="container about-experts-grid-wrap" style={{ maxWidth: "1600px" }}>
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

      {/* CO CAU TO CHUC */}
      <section style={{ background: 'transparent', padding: isMobile ? '40px 0' : '64px 0', width: '100%' }}>
        <div ref={orgSectionRef} className="about-org-structure-section" style={{ maxWidth: 'none', width: '100%', margin: '0 auto', background: 'transparent' }}>
          <div className="about-org-structure-container">
            <div className="about-org-structure-header">
              <h2>Cơ cấu tổ chức</h2>
              <p>Tổ chức hoạt động chuyên nghiệp, hiệu quả</p>
            </div>
            <div className="about-org-director-card" style={{
              background: '#10a39b',
              borderRadius: 12,
              boxShadow: '0 4px 16px 0 rgba(16,163,155,0.10)',
              padding: '18px 28px 12px',
              minWidth: 180,
              maxWidth: 260,
              margin: '0 auto 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <h3 style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: 20,
                margin: 0,
                marginBottom: 4,
                textAlign: 'center',
              }}>Ban Giám đốc</h3>
              <span style={{
                color: '#f3f8f7',
                fontWeight: 400,
                fontSize: 15,
                textAlign: 'center',
              }}>Giám đốc điều hành</span>
            </div>
            <div className="about-org-main-grid">
              <div className="about-org-unit-card">
                <div className="about-org-unit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-2.5 5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" fill="#0f9d96" />
                  </svg>
                </div>
                <h4>Phòng Quy hoạch</h4>
                <p>Quy hoạch vùng, đô thị, nông thôn</p>
              </div>
              <div className="about-org-unit-card">
                <div className="about-org-unit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 17.5 15.5 6l2.5 2.5L6.5 20H4v-2.5Zm13.75-12.25a1.75 1.75 0 1 1 2.47 2.47l-1.14 1.14-2.47-2.47 1.14-1.14ZM9 7h4v2H9V7Zm-3 4h6v2H6v-2Z" fill="#0f9d96" />
                  </svg>
                </div>
                <h4>Phòng Thiết kế</h4>
                <p>Thiết kế kiến trúc, đô thị, cảnh quan</p>
              </div>
              <div className="about-org-unit-card">
                <div className="about-org-unit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 18h16v2H4v-2Zm2-3V7h2v8H6Zm5 0V4h2v11h-2Zm5 0v-5h2v5h-2Z" fill="#0f9d96" />
                  </svg>
                </div>
                <h4>Phòng Tư vấn</h4>
                <p>Nghiên cứu, tư vấn chiến lược</p>
              </div>
            </div>
            <div className="about-org-sub-grid">
              <div className="about-org-sub-card">Phòng Hành chính</div>
              <div className="about-org-sub-card">Phòng Kỹ thuật</div>
            </div>
          </div>
        </div>
      </section>

      {/* Phần giải thưởng dưới Cơ cấu tổ chức */}
      <section className="about-award-section" style={{ background: '#f7fcfa', padding: isMobile ? '40px 0' : '64px 0', width: '100%' }}>
        <div className="container about-award-header" style={{ textAlign: 'center', marginBottom: 24 }}>
          <h2>Giải thưởng</h2>
          <p>Thành tựu nổi bật và các giải thưởng đã đạt được</p>
        </div>
        <div className="about-award-grid" style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>
          <div className="member-card-grid" style={{ justifyContent: 'center' }}>
            {[{id:1, name:'Giải thưởng Kiến trúc Quốc gia', title:'2022', subtitle:'Dự án A', image:'https://public.readdy.ai/ai/img_res/3ab41539e100a0479fdf39e30b6d2d67.jpg'},
              {id:2, name:'Giải thưởng Quy hoạch Đô thị', title:'2021', subtitle:'Dự án B', image:'https://public.readdy.ai/ai/img_res/8f75024fcef8f3bcbe9f0f63ad9c68cc.jpg'},
              {id:3, name:'Top 10 Công trình Xanh', title:'2023', subtitle:'Dự án C', image:'https://public.readdy.ai/ai/img_res/45d3c62951391d85344e988cfdb50f54.jpg'}].map((award) => (
                <div key={award.id} className="member-card" style={{ minWidth: 220 }}>
                  <div className="member-card__photo">
                    <img src={award.image} alt={award.name} />
                  </div>
                  <div className="member-card__body">
                    <h3 className="member-card__name">{award.name}</h3>
                    {award.title && <p className="member-card__line">{award.title}</p>}
                    {award.subtitle && <p className="member-card__line">{award.subtitle}</p>}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* HOP TAC CUNG CHUNG TOI */}
      <section className="about-collaboration-section">
        <div className="about-collaboration-inner">
          <h2>Hợp tác cùng chúng tôi</h2>
          <p>
            Chúng tôi luôn sẵn sàng đồng hành cùng bạn trong các dự án quy hoạch và thiết kế
          </p>
          <button className="about-collaboration-btn" type="button">
            Liên hệ với chúng tôi <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
