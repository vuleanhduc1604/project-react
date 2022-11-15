import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Contact from '../../components/contact/Contact.jsx';
import Clientslider from '../../components/clientslider/Clientslider.jsx';
import Homeslider from '../../components/homeslider/Homeslider.jsx'
const Home = () => {
    return (
        <div className="body-index">
        <Homeslider/>
        <div className="who-are-we-wrapper gray-bg padding-wrapper">
            <div className="who-are-we justify-content-center align-items-center container">
                <div className="img-wrapper-1">
                    <img srcSet="Picture7.webp" alt="" className="img-1"/>
                </div>
                <div className="content-1">
                    <div className="header-1">
                        <p className="content-header orange-bold">Chúng tôi <span className="grey-bold">là ai</span></p>
                    </div>
                    <div className="gioi-thieu title-overflow">
                        SK Consulting, là một trong những Công ty tư vấn và đào tạo thực hành hàng đầu Việt Nam với tính thực tiễn và chất lượng cao với hơn 10 năm kinh nghiệm.
                    </div>
                    <div className="quote-button-wrapper">
                        <div className="quote-wrapper">
                            <div className="quote-1 title-overflow">
                                SK Consulting hướng tới sự chuyên nghiệp, tận tâm và đồng hành phát triển với khách hàng.
                            </div>
                        </div>
                        <div className="find-out">
                            <a href="gioithieu.html"><button className="find-out-btn">Tìm hiểu thêm</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="clients-profit-wrapper padding-wrapper">
            <div className="clients-profit d-flex justify-content-between align-items-center container">
                <div className="img-wrapper-2">
                    <img srcSet="Picture2.webp" alt="" className="img-2"/>
                </div>
                <div className="content-2">
                    <div className="header-2">
                        <p className="content-header title-overflow">Lợi ích <span className="grey-bold">khách hàng</span></p>
                    </div>
                    <div className="desc-wrapper">
                        <div className="clients-desc">Dịch vụ của SK Consulting mang lại sự phát triển bền vững cho khách hàng trên các lĩnh vực Chuyển đổi Agile; Quản lý/Đánh giá nhân sự; Quản trị hoạt động, Đào tạo và phát triển nguồn nhân lực của tổ chức.</div>
                    </div>
                    <div className="find-out">
                        <a href="loiichkhachhang.html"><button className="find-out-btn">Tìm hiểu thêm</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="our-services padding-wrapper">
            <div className="header-3 text-center">
                <p className="content-header">Dịch vụ <span className="grey-bold">của chúng tôi</span></p>
            </div>
            <div className="service-wrapper d-flex justify-content-between">
                <div className="service-1 d-flex align-items-center align-content-center">
                    <div className="img-bg-1 img-bg">
                        <img srcSet="Picture6.webp" alt="" className="bg-1"/>
                    </div>
                    <div className="content-service-1">
                        <p className="service-head-1">TƯ VẤN QUẢN LÝ</p>
                        <a href="dichvu.html#dich-vu-1"><p className="service-desc">Tư vấn Agile</p></a>
                        <a href="dichvu.html#dich-vu-1"><p className="service-desc">Tư vấn nhân sự</p></a>
                        <a href="dichvu.html#dich-vu-1"></a><p className="service-desc">Tư vấn hoạt động</p>
                    </div>
                </div>
                <div className="service-2 d-flex align-items-center align-content-center">
                    <div className="img-bg-2 img-bg">
                        <img srcSet="Picture9.webp" alt="" className="bg-2"/>
                    </div>
                    <div className="content-service-2">
                        <p className="service-head-2">KHẢO SÁT VÀ ĐÁNH GIÁ</p>
                        <div className="service-desc-wrapper">
                            <a href="dichvu.html#dich-vu-2"><p className="service-desc">Khảo sát thị trường</p></a>
                            <a href="dichvu.html#dich-vu-2"><p className="service-desc">Đánh giá năng lực</p></a>
                        </div>
                    </div>
                </div>
                <div className="service-3 d-flex align-items-baseline align-content-center">
                    <div className="img-bg-3 img-bg">
                        <img srcSet="Picture8.webp" alt="" className="bg-3"/>
                    </div>
                    <div className="content-service-3">
                        <p className="service-head-3">ĐÀO TẠO VÀ PHÁT TRIỂN</p>
                        <a href="dichvu.html#dich-vu-3"><p className="service-desc">Giám đốc và Quản lý</p></a>
                        <a href="dichvu.html#dich-vu-3"><p className="service-desc">Nghiệp vụ chuyên môn</p></a>
                        <a href="dichvu.html#dich-vu-3"><p className="service-desc">Kỹ năng mềm</p></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="our-clients text-center padding-wrapper">
            <p className="content-header">Khách hàng <span className="grey-bold">của chúng tôi</span></p>
            <div className="clients-list-wrapper">
                <Clientslider/>
            </div>
        </div>
        <Contact/>
    </div>
    );
};

export default Home;