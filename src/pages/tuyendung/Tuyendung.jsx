import React from 'react';

const Tuyendung = () => {
    return (
        <div>
        <div className="bg-wrapper">
          <img src="bg-gioi-thieu.PNG" alt="" className="bg" />
        </div>
        <div className="body d-flex justify-content-between">
          <div className="left-side-bar">
            <div className="left-header-wrapper">
              <p className="left-header">DỊCH VỤ</p>
            </div>
            <div className="left-side-quan-ly">
              <div className="first-part-content-wrapper">
                <div className="first-part-header-wrapper">
                  <p className="first-part-header grey-bold">Tư vấn quản lý</p>
                </div>
                <a href="agile.html"><p className="first-part-content">Tư vấn chuyển đổi Agile</p></a>
                <a href="scrumkanban.html"><p className="first-part-content">Tư vấn Ứng dụng Scrum và Kanban</p></a>
                <a href="quantrithaydoi.html"><p className="first-part-content">Tư vấn Quản trị sự thay đổi</p></a>
                <a href="chienluocnhansu.html"><p className="first-part-content">Tư vấn Chiến lược nhân sự</p></a>
                <a href="bsc-kpi-okr.html"><p className="first-part-content">Tư vấn BSC-KPI; OKR</p></a>
                <a href="luongvacochedaingo.html"><p className="first-part-content">Tư vấn Lương và cơ chế đãi ngộ</p></a>
              </div>
              <div className="second-part-content-wrapper">
                <div className="second-part-header-wrapper">
                  <p className="second-part-header grey-bold">Khảo sát và đánh giá năng lực</p>
                </div>
                <a href="khaosatsuhailong.html"><p className="second-part-content">Khảo sát Sự hài lòng</p></a>
                <a href="khaosathanhvikhachhang.html"><p className="second-part-content">Khảo sát Hành vi khách hàng</p></a>
                <a href="khachhangbimat.html"><p className="second-part-content">Dịch vụ khách hàng bí mật</p></a>
              </div>
              <div className="third-part-content-wrapper">
                <div className="third-part-header-wrapper">
                  <p className="third-part-header grey-bold">Đào tạo và phát triển</p>
                </div>
                <a href="giamdocvaquanly.html"><p className="third-part-content">Chương trình cho Giám đốc và Quản lý</p></a>
                <a href="nghiepvuchuyenmon.html"><p className="third-part-content">Đào tạo Nghiệp vụ chuyên môn</p></a>
                <a href="kynangmem.html"><p className="third-part-content">Đào tạo Kỹ năng mềm</p></a>
              </div>
            </div>
          </div>
          <div className="middle-content">
            <div className="first-content-wrapper d-flex align-items-center justify-content-between">
              <div className="komputer-wrapper d-flex align-items-center">
                <div className="komputer">
                  <img src="komputer.webp" alt="" className="komputer-img" />
                </div>
                <p className="komputer-desc">Chuyên viên<br />
                  Phát triển chương trình đào tạo</p>
              </div>
              <div className="number-wrapper d-flex align-items-center">
                <div className="number-desc-wrapper">
                  <p className="number-desc">Số lượng <br /> tuyển dụng:</p>
                </div>
                <div className="number-wrapper">
                  <p className="number">02</p>
                </div>
              </div>
            </div>
            <div className="desc-header-wrapper">
              <p className="desc-header">Yêu cầu Công việc</p>
            </div>
            <div className="desc-content-wrapper">
              <p className="desc-list-header">1. Phát triển chương trình đào tạo</p>
              <ul className="desc-list">
                <li>Nghiên cứu, đề xuất áp dụng và cập nhật các chương trình đào tạo hiện có</li>
                <li>Nghiên cứu yêu cầu các khoá học theo yêu cầu thực tế của doanh nghiệp và đề xuất phương án triển khai khóa học phù hợp theo yêu cầu và theo tiêu chuẩn của công ty</li>
                <li>Tham gia xây dựng học liệu (bài giảng, video, bài tập, bài đánh giá...) các chương trình đào tạo theo hướng dẫn của Ban chuyên môn</li>
                <li>Rà soát tính hợp lý và thiết kế các tài liệu theo quy định của SK Consulting</li>
                <li>Đóng gói khoá học, chương trình đào tạo (đề cương, giáo trình, tài liệu hướng dẫn...)</li>
                <li>Tham gia các công việc khác theo phân công</li>
              </ul>
              <p className="desc-list-header">2.   Tham gia các Dự án phát triển và  hỗ trợ các Dự án Tư vấn</p>
              <ul className="desc-list">
                <li>Nghiên cứu, phát triển và xây dựng các tài liệu chuyên môn theo mục tiêu của các Dự án trong từng thời kỳ</li>
                <li>Tổng hợp các bài viết chuyên đề nghiên cứu, các tài liệu đào tạo, tài liệu ebook và tài liệu hỗ trợ tư vấn theo sự hướng dẫn của Ban chuyên môn</li>
              </ul>
              <p className="desc-list-header">3.   Điều phối đào tạo</p>
              <ul className="desc-list">
                <li>Thực hiện xác định nhu cầu đào tạo của các phòng/ban trong công ty</li>
                <li>Xây dựng kế hoạch đào tạo cho nội bộ công ty và các kế hoạch đào tạo đối với khách hàng đã được thống nhất bởi bộ phận Phát triển Quan hệ khách hàng</li>
                <li>Lên kế hoạch và thực hiện toàn bộ công tác tổ chức lớp học đảm bảo chất lượng theo yêu cầu</li>
                <li>Đánh giá chất lượng của khóa học với các tiêu chí đã được xác định theo tiêu chuẩn của SK Consulting</li>
              </ul>
            </div>
            <div className="desc-header-wrapper">
              <p className="desc-header">Yêu cầu Ứng viên</p>
            </div>
            <div className="desc-content-wrapper">
              <ul className="desc-list">
                <li>Tốt nghiệp đại học hoặc sắp tốt nghiệp các trường đại học uy tín tại Việt Nam hoặc nước ngoài với các chuyên ngành Kinh tế; Quản trị nguồn nhân lực; Marketing; Quản trị kinh doanh; Ngoại ngữ; Tâm lý học…</li>
                <li>Có kiến thức tổng hợp về thị trường, kinh tế xã hội và sử dụng tiếng Anh tốt</li>
                <li>Có kỹ năng giao tiếp tốt; khả năng làm việc độc lập và làm việc nhóm hiệu quả; có khả năng tư duy và biết cách lập kế hoạch và tổ chức công việc khoa học</li>
              </ul>
            </div>
            <div className="desc-header-wrapper">
              <p className="desc-header">Quyền lợi</p>
              <ul className="desc-list">
                <li>Lương và cơ chế đãi ngộ: Lương theo vị trí, thưởng và chế độ đãi ngộ theo năng suất công việc</li>
                <li>Môi trường làm việc chuyên nghiệp, năng động cùng với các tổ chức lớn tại Việt Nam và khu vực</li>
                <li>Được đánh giá theo khung năng lực tiêu chuẩn, có cơ hội học hỏi và phát triển bản thân tốt</li>
                <li>Được đào tạo miễn phí các chương trình đào tạo nhằm phát triển bản thân phù hợp theo định hướng phát triển của công ty</li>
              </ul>
            </div>
          </div>
          <div className="right-side-bar text-center">
            <div className="chuong-trinh-noi-bat-wrapper">
              <p className="chuong-trinh-noi-bat-header">Chương trình nổi bật</p>
              <div className="chuong-trinh-noi-bat-slick">
                <img src="slick1.webp" alt="" className="slick-img" />
                <img src="slick2.webp" alt="" className="slick-img" />
                <img src="slick3.webp" alt="" className="slick-img" />
              </div>
            </div>
            <div className="chu-de-dao-tao-wrapper">
              <div className="chu-de-dao-tao-header-wrapper">
                <p className="chu-de-dao-tao-header">Chủ đề đào tạo</p>
              </div>
              <div className="chu-de-dao-tao-content-wrapper">
                <a href="giamdocvaquanly.html"><p className="chu-de-dao-tao-content">Đào tạo Giám đốc/Quản Lý</p></a>
                <a href="nghiepvuchuyenmon.html"><p className="chu-de-dao-tao-content">Đào tạo Nghiệp vụ chuyên môn</p></a>
                <a href="kynangmem.html"><p className="chu-de-dao-tao-content">Đào tạo Kỹ năng mềm</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Tuyendung;