import React, {FC} from 'react';
import './HomeSlider.scss';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
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
            <motion.div className='home-page-slider-animation'
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8}}>
                <Slider {...settings}>
                    <div className='slider-item'>
                        <div className="slider-item-background">
                            <img src={nvidiaSliderFirst} alt="first-slider-image"/>
                        </div>
                        <div className="slider-item-content container">
                            <div className="slider-item-content-title">
                                <p className='nvidia-5xl'>More with AI, faster with RTX</p>
                            </div>
                            <div className="slider-item-content-subtitle">
                                <p className='nvidia-2xl-semibold'>Experience next-level AI with GeForce RTX™ and NVIDIA RTX™ graphics cards.</p>
                            </div>
                            <div className="slider-item-content-button">
                                <Link to='/about' className='nvidia-button'>More details</Link>
                            </div>
                        </div>
                    </div>
                    <div className='slider-item'>
                        <div className="slider-item-background">
                            <img src={nvidiaSliderSecond} alt="first-slider-image"/>
                        </div>
                        <div className="slider-item-content container">
                            <div className="slider-item-content-title">
                                <p className='nvidia-5xl'>FPS matters</p>
                            </div>
                            <div className="slider-item-content-subtitle">
                                <p className='nvidia-2xl-semibold'>GeForce RTX 40 and NVIDIA Reflex.</p>
                            </div>
                            <div className="slider-item-content-button">
                                <Link to='/about' className='nvidia-button'>More details</Link>
                            </div>
                        </div>
                    </div>
                    <div className='slider-item'>
                        <div className="slider-item-background">
                            <img src={nvidiaSliderThird} alt="first-slider-image"/>
                        </div>
                        <div className="slider-item-content container">
                            <div className="slider-item-content-title">
                                <p className='nvidia-5xl'>PC Beta Sürümünde RTX Açık</p>
                            </div>
                            <div className="slider-item-content-subtitle">
                                <p className='nvidia-2xl-semibold'>NVIDIA DLSS ve Reflex ile</p>
                            </div>
                            <div className="slider-item-content-button">
                                <Link to='/about' className='nvidia-button'>More details</Link>
                            </div>
                        </div>
                    </div>
                    <div className='slider-item'>
                        <div className="slider-item-background">
                            <img src={nvidiaSliderFourth} alt="first-slider-image"/>
                        </div>
                        <div className="slider-item-content container">
                            <div className="slider-item-content-title">
                                <p className='nvidia-5xl'>NVIDIA DLSS</p>
                            </div>
                            <div className="slider-item-content-subtitle">
                                <p className='nvidia-2xl-semibold'>With support for NVIDIA DLSS 3.5 and full ray tracing.</p>
                            </div>
                            <div className="slider-item-content-button">
                                <Link to='/about' className='nvidia-button'>More details</Link>
                            </div>
                        </div>
                    </div>
                    <div className='slider-item'>
                        <div className="slider-item-background">
                            <img src={nvidiaSliderFifth} alt="first-slider-image"/>
                        </div>
                        <div className="slider-item-content container">
                            <div className="slider-item-content-title">
                                <p className='nvidia-5xl'>#RTXON.</p>
                            </div>
                            <div className="slider-item-content-subtitle">
                                <p className='nvidia-2xl-semibold'>With support for NVIDIA DLSS 3.5 and full ray tracing.</p>
                            </div>
                            <div className="slider-item-content-button">
                                <Link to='/about' className='nvidia-button'>More details</Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </motion.div>
        </div>
    );
};

export default HomeSlider;