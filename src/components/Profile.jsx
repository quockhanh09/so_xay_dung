import { useParams, Link } from 'react-router-dom';
import '../style/Profile.css';

// Import tất cả ảnh trước
import img2 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/2.jpg";
import img3 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/3.jpg";
import img4 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/4.jpg";
import img5 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/5.jpg";
import img6 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/6.jpg";
import img7 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/7.jpg";
import img8 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/8.jpg";
import img9 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/9.jpg";
import img10 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/10.jpg";
import img11 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/11.jpg";
import img12 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/12.jpg";
import img13 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/13.jpg";
import img14 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/14.jpg";
import img15 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/15.jpg";
import img16 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/16.jpg";
import img17 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/17.jpg";
import img18 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/18.jpg";
import img19 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/19.jpg";
import img20 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/20.jpg";
import img21 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/21.jpg";
import img22 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/22.jpg";
import img23 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/23.jpg";
import img24 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/24.jpg";
import img25 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/25 (2).jpg";
import img26 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/26.jpg";
import img27 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/27.jpg";
import img28 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/28.jpg";
import img29 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/29.jpg";
import img30 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/30.jpg";
import img31 from "../assets/img/drive-download-20251216T044857Z-3-001/ảnh bán thân/31.jpg";

const images = [null, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31];

function Profile() {
  const { id } = useParams();

  // Dữ liệu chi tiết cho từng thành viên
  const profiles = {
    1: {
      name: "Anna Cawrse",
      image: images[1],
      position: "Giám đốc",
      credentials: "Tiến sĩ, Kiến trúc sư trưởng",
      title: "Chair of Landscape Architecture, Civil Engineering, & Ecology",
      subtitle: "Board of Directors, Principal",
      role: "Landscape Architect",
      bio: "Với hơn 20 năm kinh nghiệm trong lĩnh vực quy hoạch và thiết kế đô thị, bà đã tham gia và lãnh đạo nhiều dự án quy hoạch lớn tại Việt Nam và khu vực. Bà có chuyên môn sâu về quy hoạch tổng thể, thiết kế đô thị bền vững và phát triển không gian công cộng.",
      experience: [
        "Hơn 20 năm kinh nghiệm trong quy hoạch đô thị",
        "Tham gia hơn 100 dự án quy hoạch và thiết kế lớn",
        "Chuyên gia tư vấn cho nhiều dự án quốc gia",
        "Giảng viên thỉnh giảng tại các trường đại học"
      ],
      education: [
        "Tiến sĩ Quy hoạch Đô thị - Đại học Kiến trúc Hà Nội",
        "Thạc sĩ Kiến trúc - Đại học Bách Khoa Hà Nội",
        "Cử nhân Kiến trúc - Đại học Kiến trúc Hà Nội"
      ],
      awards: [
        "Giải thưởng Kiến trúc Quốc gia 2020",
        "Giải nhất cuộc thi Quy hoạch Đô thị xanh 2019",
        "Bằng khen của Bộ Xây dựng"
      ],
      contact: {
        email: "anna.cawrse@udi.vn",
        phone: "+84 123 456 789"
      }
    },
    2: {
      name: "Zachary Chrisco",
      image: images[2],
      position: "Phó Giám đốc",
      credentials: "Thạc sĩ, Kỹ sư Xây dựng",
      title: "Chair At-Large",
      subtitle: "Board of Directors, Principal",
      role: "Civil Engineer",
      bio: "Chuyên gia hàng đầu trong lĩnh vực hạ tầng kỹ thuật và quản lý dự án. Với kinh nghiệm 15 năm, ông đã điều phối và quản lý nhiều dự án hạ tầng quan trọng, đảm bảo tiến độ và chất lượng công trình.",
      experience: [
        "15 năm kinh nghiệm quản lý dự án hạ tầng",
        "Điều phối hơn 50 dự án lớn",
        "Chuyên gia về hạ tầng kỹ thuật đô thị",
        "Tư vấn cho các dự án khu công nghiệp"
      ],
      education: [
        "Thạc sĩ Xây dựng - Đại học Bách Khoa Hà Nội",
        "Cử nhân Xây dựng Dân dụng - Đại học Xây dựng"
      ],
      awards: [
        "Giải thưởng Công trình chất lượng cao 2021",
        "Bằng khen Bộ Xây dựng",
        "Giải Ba cuộc thi Thiết kế Hạ tầng xanh"
      ],
      contact: {
        email: "zachary.chrisco@udi.vn",
        phone: "+84 123 456 790"
      }
    },
    3: {
      name: "Caitlyn Clauson",
      image: images[3],
      position: "Trưởng phòng",
      credentials: "Thạc sĩ, Quy hoạch viên",
      title: "President",
      subtitle: "Board of Directors, Principal",
      role: "Planner",
      bio: "Chuyên gia quy hoạch với tầm nhìn chiến lược và khả năng phân tích sâu sắc về phát triển đô thị. Bà có nhiều kinh nghiệm trong quy hoạch vùng và quy hoạch đô thị tổng thể.",
      experience: [
        "12 năm kinh nghiệm quy hoạch đô thị",
        "Tham gia 40+ dự án quy hoạch vùng",
        "Chuyên gia tư vấn quy hoạch cấp tỉnh",
        "Nghiên cứu viên cao cấp"
      ],
      education: [
        "Thạc sĩ Quy hoạch Đô thị và Vùng",
        "Cử nhân Quy hoạch - Đại học Xây dựng"
      ],
      awards: [
        "Giải Nhì Quy hoạch Đô thị 2020",
        "Giải thưởng Sáng tạo Quy hoạch",
        "Khen thưởng của UBND tỉnh"
      ],
      contact: {
        email: "caitlyn.clauson@udi.vn",
        phone: "+84 123 456 791"
      }
    }
  };

  // Tạo profiles cho tất cả 30 thành viên còn lại với dữ liệu mẫu
  for (let i = 4; i <= 30; i++) {
    profiles[i] = {
      name: `Thành viên ${i}`,
      image: images[i],
      position: i <= 10 ? "Trưởng phòng" : "Chuyên viên",
      credentials: "Thạc sĩ, Kiến trúc sư",
      title: i <= 10 ? "Trưởng phòng chuyên môn" : "Chuyên viên cao cấp",
      subtitle: "Ban Lãnh đạo và Giám đốc Trung tâm",
      role: ["Kiến trúc sư", "Quy hoạch viên", "Kỹ sư xây dựng"][i % 3],
      bio: `Với nhiều năm kinh nghiệm trong lĩnh vực quy hoạch và thiết kế đô thị, đã tham gia nhiều dự án quan trọng. Có chuyên môn sâu về thiết kế đô thị bền vững và phát triển không gian công cộng.`,
      experience: [
        `${8 + i} năm kinh nghiệm trong quy hoạch đô thị`,
        `Tham gia ${20 + i * 2} dự án quy hoạch và thiết kế`,
        "Chuyên gia tư vấn cho nhiều dự án",
        "Thành viên Hội Kiến trúc sư Việt Nam"
      ],
      education: [
        "Thạc sĩ Kiến trúc - Đại học Kiến trúc Hà Nội",
        "Cử nhân Kiến trúc - Đại học Xây dựng"
      ],
      awards: [
        "Giải thưởng Thiết kế xuất sắc",
        "Bằng khen của Bộ Xây dựng",
        "Giải cuộc thi Quy hoạch sáng tạo"
      ],
      contact: {
        email: `member${i}@udi.vn`,
        phone: `+84 123 456 ${790 + i}`
      }
    };
  }

  // Lấy thông tin profile dựa vào id
  const profile = profiles[id];

  if (!profile) {
    return (
      <div className="container" style={{ padding: "100px 0", textAlign: "center" }}>
        <h2>Không tìm thấy thông tin</h2>
        <Link to="/" className="btn btn-primary mt-3">Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="profile-page">
      {/* Hero Section */}
      <section className="profile-hero">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 profile-left-section">
              <div className="profile-header-info">
                <h1 className="profile-name">{profile.name}</h1>
                <p className="profile-credentials">{profile.credentials}</p>
                <h3 className="profile-title">{profile.title}</h3>
                <p className="profile-subtitle">{profile.subtitle}</p>
                {profile.role && <p className="profile-role">{profile.role}</p>}
                
                <a href={`mailto:${profile.contact.email}`} className="say-hello-link">
                  Say hello to {profile.name.split(' ')[0]}
                </a>

                <div className="profile-bio-full">
                  <p>{profile.bio}</p>
                </div>

                <div className="profile-details-section">
                  {/* Experience */}
                  {profile.experience && profile.experience.length > 0 && (
                    <div className="details-block">
                      <h4>Experience</h4>
                      <ul>
                        {profile.experience.map((exp, index) => (
                          <li key={index}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Education */}
                  {profile.education && profile.education.length > 0 && (
                    <div className="details-block">
                      <h4>Education</h4>
                      <ul>
                        {profile.education.map((edu, index) => (
                          <li key={index}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contact */}
                  <div className="details-block">
                    <h4>Contact</h4>
                    <p><a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></p>
                    <p><a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 profile-right-section">
              <div className="profile-image-wrapper">
                <img 
                  src={profile.image} 
                  alt={profile.name}
                  className="profile-main-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="profile-back">
        <div className="container text-center">
          <Link to="/" className="btn-back">
            <i className="bi bi-arrow-left"></i> Quay lại danh sách Ban Lãnh đạo
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Profile;
