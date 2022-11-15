import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer d-flex justify-content-between">
            <div className="news-footer">
                <p className="news-header">News</p>
                <p className="news-content">Để lại email sẽ giúp bạn nhận được thông tin về những dự án mới nhất của chúng tôi</p>
                <input type="email" className="email-footer" placeholder="Email..."/>
                <button className="submit-footer">Nhận</button>
            </div>
            <div className="info-footer">
                <p className="info-header">Thông tin</p>
                <p className="info-content">Email: info@skconsulting.vn</p>
                <p className="info-content">VPHN: 25 Lý Thường Kiệt, quận Hoàn Kiếm, tp Hà Nội</p>
                <p className="info-content">SĐT: (024) 39 915 915</p>
                <p className="info-content">VPTP HCM: 21 Hải Triều, quận 1, tp HCM</p>
                <p className="info-content">SĐT: (08) 2207 1604</p>
            </div>
            <div className="social-footer">
                <p className="social-header">Social media</p>
                <div className="social-list d-flex">
                    <a href=""><img srcSet="linkedin.webp" alt="" className="linkedin"/></a>
                    <a href="https://www.instagram.com/harryvu1604/"><img srcSet="insta.webp" alt="" className="insta"/></a>
                    <a href="https://www.facebook.com/vu.harry.90813/"><img srcSet="fb.webp" alt="" className="fb"/></a>
                    <a href=""><img srcSet="twitter.webp" alt="" className="twitter"/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;