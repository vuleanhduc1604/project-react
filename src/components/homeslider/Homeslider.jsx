import React from 'react';
import Slider from "react-slick";
const Homeslider = () => {
        const settings = {
            slidesToShow: 1,
            infinite: true, 
            autoplay: true,
            arrows: false,
            swipeToSlide: true,
        }
    return (

            <div className="banner">
                <Slider {...settings}>
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
                </Slider>
            </div>
    );
};

export default Homeslider;