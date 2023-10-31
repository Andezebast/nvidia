import React, {FC} from 'react';
import './HomeSlider.scss';
import {Link} from "react-router-dom";
/*-----------------------------*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*-----------------------------*/
import nvidiaSliderFirst from './img/nvidia-slider-1.jpg';
import nvidiaSliderSecond from './img/nvidia-slider-2.jpg';
import nvidiaSliderThird from './img/nvidia-slider-3.jpg';
import nvidiaSliderFourth from './img/nvidia-slider-4.jpg';
import nvidiaSliderFifth from './img/nvidia-slider-5.jpg';
/*-----------------------------*/
const HomeSlider: FC = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='home-page-slider'>
            <Slider {...settings}>
                <div className='slider-item'>
                    <div className="slider-item-background">
                        <img src={nvidiaSliderFirst} alt="first-slider-image"/>
                    </div>
                    <div className="slider-item-content container">
                        <div className="slider-item-content-title">
                            <p>More with AI, faster with RTX</p>
                        </div>
                        <div className="slider-item-content-subtitle">
                            <p>Experience next-level AI with GeForce RTX™ and NVIDIA RTX™ graphics cards.</p>
                        </div>
                        <div className="slider-item-content-button">
                            <Link to='/about'>More details</Link>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div className="slider-item-background">
                        <img src={nvidiaSliderSecond} alt="first-slider-image"/>
                    </div>
                    <div className="slider-item-content container">
                        <div className="slider-item-content-title">
                            <p>FPS matters</p>
                        </div>
                        <div className="slider-item-content-subtitle">
                            <p>GeForce RTX 40 and NVIDIA Reflex.</p>
                        </div>
                        <div className="slider-item-content-button">
                            <Link to='/about'>More details</Link>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div className="slider-item-background">
                        <img src={nvidiaSliderThird} alt="first-slider-image"/>
                    </div>
                    <div className="slider-item-content container">
                        <div className="slider-item-content-title">
                            <p>PC Beta Sürümünde RTX Açık</p>
                        </div>
                        <div className="slider-item-content-subtitle">
                            <p>NVIDIA DLSS ve Reflex ile</p>
                        </div>
                        <div className="slider-item-content-button">
                            <Link to='/about'>More details</Link>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div className="slider-item-background">
                        <img src={nvidiaSliderFourth} alt="first-slider-image"/>
                    </div>
                    <div className="slider-item-content container">
                        <div className="slider-item-content-title">
                            <p>NVIDIA DLSS</p>
                        </div>
                        <div className="slider-item-content-subtitle">
                            <p>With support for NVIDIA DLSS 3.5 and full ray tracing.</p>
                        </div>
                        <div className="slider-item-content-button">
                            <Link to='/about'>More details</Link>
                        </div>
                    </div>
                </div>
                <div className='slider-item '>
                    <div className="slider-item-background">
                        <img src={nvidiaSliderFifth} alt="first-slider-image"/>
                    </div>
                    <div className="slider-item-content container">
                        <div className="slider-item-content-title">
                            <p>#RTXON.</p>
                        </div>
                        <div className="slider-item-content-subtitle">
                            <p>With support for NVIDIA DLSS 3.5 and full ray tracing.</p>
                        </div>
                        <div className="slider-item-content-button">
                            <Link to='/about'>More details</Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HomeSlider;