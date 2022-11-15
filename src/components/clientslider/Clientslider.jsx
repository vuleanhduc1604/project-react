import React from 'react';
import Slider from "react-slick";
const Clientslider = () => {
    const settings = {
        slidesToShow: 5,
        infinite: true, 
        autoplay: true,
        arrows: false,
        slidesToScroll: 1,
        swipeToSlide: true,
    }
    return (

            <div className="clients-list container">
                        <Slider {...settings}>
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
                    </Slider>
                </div>

    );
};

export default Clientslider;