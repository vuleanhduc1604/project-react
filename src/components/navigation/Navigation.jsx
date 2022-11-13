import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const Navigation = () => {
    return (
        <section className="wrapper container">      
           <div className="burger" id="burger">
            <i className="fa-solid fa-bars"></i>
           </div>
           <span className="overlay"></span>
           <img srcSet="/src/assets/sk-logo.png" alt="" className="logo-sk"/>
           <nav className="navbar" id="navbar">
              <ul className="menu" id="menu">   
                 <li className="menu-item home-item"><a href="index.html" className="menu-link">Home</a></li>
                 <li className="menu-item menu-dropdown">
                    <span className="menu-link" data-toggle="submenu">Giới thiệu<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <ul className="submenu">
                       <li className="submenu-item"><a href="gioithieu.html" className="submenu-link">Về chúng tôi</a></li>
                       <li className="submenu-item"><a href="loiichkhachhang.html" className="submenu-link">Lợi ích khách hàng</a></li>
                    </ul>
                 </li>
                 <li className="menu-item menu-dropdown">
                    <span className="menu-link" data-toggle="submenu">Dịch vụ<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <ul className="submenu">
                       <li className="submenu-item"><a href="dichvu.html#dich-vu-1" className="submenu-link">Tư vấn quản lý</a></li>
                       <li className="submenu-item"><a href="dichvu.html#dich-vu-2" className="submenu-link">Khảo sát và đánh giá năng lực</a></li>
                       <li className="submenu-item"><a href="dichvu.html#dich-vu-3" className="submenu-link">Đào tạo và phát triển</a></li>
                    </ul>
                 </li>
                 <li className="menu-item" id="hethong"><a href="tracnghiem.html" className="menu-link">Trắc nghiệm</a></li>
                 <li className="menu-item"><a href="tuyendung.html" className="menu-link">Tuyển dụng</a></li>
              </ul>
           </nav>
           <a href="profile.html" className="account"><i className="fa-solid fa-user"></i></a>
        </section>
    );
};

export default Navigation;