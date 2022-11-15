import React from 'react';
import Contact from '../../components/contact/Contact.jsx';
import Rightmenu from '../../components/rightmenu/Rightmenu.jsx';
import Leftmenu from '../../components/leftmenu/Leftmenu.jsx';
import '../../css/gioithieu.css'
const About = () => {
    return (
        <div>
        <div className="bg-wrapper">
          <img src="bg-gioi-thieu.PNG" alt="" className="bg" />
        </div>
        <div className="body d-flex justify-content-between">
          <Leftmenu/>
          <div className="middle-content">
            <div className="gioi-thieu d-flex align-items-center">
              <div className="img-wrapper">
                <img src="Picture1.webp" className="img" alt="img" />
              </div>
              <div className="gioi-thieu-desc-wrapper">
                <p className="gioi-thieu-desc">SK Consulting là một trong những Công ty tư vấn và đào tạo thực hành hàng đầu Việt Nam với hơn 10 năm kinh nghiệm. SK Consulting có mạng lưới toàn cầu với đội ngũ chuyên gia giàu uy tín trong các lĩnh vực đến từ khắp nơi trên thế giới và tại Việt Nam nhằm cung cấp cho doanh nghiệp các dịch vụ tư vấn, đánh giá và đào tạo chất lượng và hiệu quả thực tiễn cao. </p>
              </div>
            </div>
            <div className="tam-nhin-wrapper d-flex">
              <div className="tam-nhin-img-wrapper">
                <img src="tamnhin.webp" alt="" className="tam-nhin-img" />
              </div>
              <div className="tam-nhin-content-wrapper">
                <div className="tam-nhin-header-wrapper">
                  <p className="tam-nhin-header">Tầm nhìn</p>
                </div>
                <p className="tam-nhin-content">Trở thành nhà cung cấp dịch vụ Tư vấn, Đánh giá và Đào tạo hàng đầu khu vực Đông Nam Á trong lĩnh vực Tư vấn, Đánh giá và Đào tao Agile; Quản lý nhân sự và Quản trị hoạt động.</p>
              </div>
            </div>
            <div className="su-menh-wrapper d-flex">
              <div className="su-menh-img-wrapper">
                <img src="sumenh.webp" alt="" className="su-menh-img" />
              </div>
              <div className="su-menh-content-wrapper">
                <div className="su-menh-header-wrapper">
                  <p className="su-menh-header">Sứ mệnh</p>
                </div>
                <p className="su-menh-content">SK Consulting hoạt động nhằm hỗ trợ và đồng hành cùng các doanh nghiệp thông qua Dịch vụ Tư vấn; Đánh giá và Đào tạo quản lý chất lượng và mang tính thực tiễn cao. Hoạt động của SKConsulting giúp các doanh nghiệp tố ưu nguồn lực và phương pháp quản lý nhằm phát triển hiệu quả và phát triển bền vững.</p>
              </div>
            </div>
            <div className="gia-tri-wrapper d-flex">
              <div className="gia-tri-img-wrapper">
                <img src="giatricotloi.webp" alt="" className="tam-nhin-img" />
              </div>
              <div className="gia-tri-content-wrapper">
                <div className="gia-tri-header-wrapper">
                  <p className="gia-tri-header">Giá trị</p>
                </div>
                <p className="gia-tri-content">SK hướng tới sự chuyên nghiệp; tận tâm và đồng hành phát triển với khách hàng.</p>
              </div>
            </div>
          </div>
          <Rightmenu/>
        </div>
        <Contact/>
      </div>

    );
};

export default About;