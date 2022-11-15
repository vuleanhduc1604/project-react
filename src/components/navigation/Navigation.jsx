import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <section className="wrapper container">      
           <div className="burger" id="burger">
            <i className="fa-solid fa-bars"></i>
           </div>
           <span className="overlay"></span>
           <img srcSet="sk-logo.png" alt="" className="logo-sk"/>
           <nav className="navbar" id="navbar">
              <ul className="menu" id="menu">   
                 <li className="menu-item home-item"><Link to='/'className="menu-link">Home</Link></li>
                 <li className="menu-item menu-dropdown">
                    <span className="menu-link" data-toggle="submenu">Giới thiệu<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <ul className="submenu">
                       <li className="submenu-item"><Link to='/about'className="submenu-link">Về chúng tôi</Link></li>
                       <li className="submenu-item"><Link href="loiichkhachhang.html" className="submenu-link">Lợi ích khách hàng</Link></li>
                    </ul>
                 </li>
                 <li className="menu-item menu-dropdown">
                    <span className="menu-link" data-toggle="submenu">Dịch vụ<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <ul className="submenu">
                       <li className="submenu-item"><Link href="dichvu.html#dich-vu-1" className="submenu-link">Tư vấn quản lý</Link></li>
                       <li className="submenu-item"><Link href="dichvu.html#dich-vu-2" className="submenu-link">Khảo sát và đánh giá năng lực</Link></li>
                       <li className="submenu-item"><Link href="dichvu.html#dich-vu-3" className="submenu-link">Đào tạo và phát triển</Link></li>
                    </ul>
                 </li>
                 <li className="menu-item" id="hethong"><Link href="tracnghiem.html" className="menu-link">Trắc nghiệm</Link></li>
                 <li className="menu-item"><Link href="/tuyendung" className="menu-link">Tuyển dụng</Link></li>
              </ul>
           </nav>
           <Link href="profile.html" className="account"><i className="fa-solid fa-user"></i></Link>
        </section>
    );
};

export default Navigation;