import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation.jsx';
import Footer from '../footer/Footer.jsx'
const Layout = () => {
    return (
        <div>
            <header className='header' id='header'>
                <Navigation/>
            </header>
            <Outlet></Outlet>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;