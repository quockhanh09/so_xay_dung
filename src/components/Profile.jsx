import { useParams, Link } from 'react-router-dom';
import '../style/Profile.css';
import membersData from '../data/members.json';
import { getImageByFileName } from '../utils/imageLoader';

function Profile() {
  const { id } = useParams();

  // Lấy dữ liệu từ file JSON
  const memberData = membersData[id];
  
  if (!memberData) {
    return (
      <div className="container" style={{ padding: "100px 0", textAlign: "center" }}>
        <h2>Không tìm thấy thông tin</h2>
        <Link to="/" className="btn btn-primary mt-3">Quay lại trang chủ</Link>
      </div>
    );
  }

  // Tạo profile object với ảnh từ imageFile trong JSON
  const profile = {
    ...memberData,
    image: getImageByFileName(memberData.imageFile)
  };


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
