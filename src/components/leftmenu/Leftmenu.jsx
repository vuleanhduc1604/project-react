import React from 'react';

const Leftmenu = () => {
    return (
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
    );
};

export default Leftmenu;