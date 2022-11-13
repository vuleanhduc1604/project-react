import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div class="footer d-flex justify-content-between">
            <div class="news-footer">
                <p class="news-header">News</p>
                <p class="news-content">Để lại email sẽ giúp bạn nhận được thông tin về những dự án mới nhất của chúng tôi</p>
                <input type="email" class="email-footer" placeholder="Email..."/>
                <button class="submit-footer">Nhận</button>
            </div>
            <div class="info-footer">
                <p class="info-header">Thông tin</p>
                <p class="info-content">Email: info@skconsulting.vn</p>
                <p class="info-content">VPHN: 25 Lý Thường Kiệt, quận Hoàn Kiếm, tp Hà Nội</p>
                <p class="info-content">SĐT: (024) 39 915 915</p>
                <p class="info-content">VPTP HCM: 21 Hải Triều, quận 1, tp HCM</p>
                <p class="info-content">SĐT: (08) 2207 1604</p>
            </div>
            <div class="social-footer">
                <p class="social-header">Social media</p>
                <div class="social-list d-flex">
                    <a href=""><img srcSet="assets/linkedin.webp" alt="" class="linkedin"/></a>
                    <a href="https://www.instagram.com/harryvu1604/"><img srcSet="assets/insta.webp" alt="" class="insta"/></a>
                    <a href="https://www.facebook.com/vu.harry.90813/"><img srcSet="assets/fb.webp" alt="" class="fb"/></a>
                    <a href=""><img srcSet="assets/twitter.webp" alt="" class="twitter"/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;