import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Contact from '../../components/contact/Contact.jsx';
const Home = () => {
    return (
        <div className="body-index">
        <div className="banner">
            <div id="banner-1" className="banner-wrapper">
                <img srcSet="Poster1.webp" alt="Poster1" className="banner-img"/>
            </div>
            <div id="banner-2" className="banner-wrapper">
                <img srcSet="Poster2.webp" alt="Poster2" className="banner-img"/>
            </div>
            <div id="banner-3" className="banner-wrapper">
                <img srcSet="Poster3.webp" alt="Poster3" className="banner-img"/>
            </div>
            <div id="banner-4" className="banner-wrapper">
                <img srcSet="Poster4.webp" alt="Poster4" className="banner-img"/>
            </div>
            <div id="banner-5" className="banner-wrapper">
                <img srcSet="Poster5.webp" alt="Poster5" className="banner-img"/>
            </div>
        </div>
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
                <div className="clients-list container">
                    <div id="client-1" className="banner-wrapper">
                        <img srcSet="SUNGROUP.webp" alt="Poster1" className="banner-img"/>
                    </div>
                    <div id="client-2" className="banner-wrapper">
                        <img srcSet="VNPT.webp" alt="Poster2" className="banner-img"/>
                    </div>
                    <div id="client-3" className="banner-wrapper">
                        <img srcSet="PTTT.webp" alt="Poster3" className="banner-img"/>
                    </div>
                    <div id="client-4" className="banner-wrapper">
                        <img srcSet="NTT data.webp" alt="Poster4" className="banner-img"/>
                    </div>
                    <div id="client-5" className="banner-wrapper">
                        <img srcSet="VAST.webp" alt="Poster5" className="banner-img"/>
                    </div>
                    <div id="client-6" className="banner-wrapper">
                        <img srcSet="vingroup.webp" alt="Poster5" className="banner-img"/>
                    </div>
                    <div id="client-7" className="banner-wrapper">
                        <img srcSet="dainamuniversity.webp" alt="Poster5" className="banner-img"/>
                    </div>
                </div>
            </div>
        </div>
        <Contact/>
    </div>
    );
};

export default Home;