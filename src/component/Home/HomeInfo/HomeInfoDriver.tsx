import React, {FC, useRef, useEffect, useState} from 'react';
import './HomeInfo.scss';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
/*-------------------------------------*/
import Accept from './img/home-driver-accept.png';
import Spotlight from './img/home-driver-spotlight.png';
import Download from './img/home-driver-download.png';
/*-------------------------------------*/
const HomeInfoDriver: FC = () => {
    /*-------------------------------------*/
    const elementRef = useRef(null);
    const [animation, setAnimation] = useState<boolean>(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimation(true)
                    }
                });
            },
            {threshold: 0.5}
        );
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
    }, []);
    /*-------------------------------------*/
    return (
        <motion.div className='home-page-info driver container'
                    ref={elementRef}
                    initial={{opacity: 0, scale: 0.8}}
                    animate={animation && {opacity: 1, scale: 1}}
                    transition={{duration: 1.5}}>
            <div className="home-page-info-title">
                <p className='nvidia-4xl'>Optimize your gaming experience</p>
            </div>
            <div className="home-page-info-subtitle">
                <p className='nvidia-2xl-semibold'>Download the GeForce Experience app to find the best PC games and access the latest GeForce drivers.</p>
            </div>
            <div className="home-page-info-items">
                <div className="home-page-info-item">
                    <div className="home-page-info-item-image">
                        <img src={Accept} alt="accept"/>
                    </div>
                    <div className="home-page-info-item-title">
                        <p className='nvidia-3xl'>Technical support</p>
                    </div>
                    <div className="home-page-info-item-subtitle">
                        <p className='nvidia-p'>Explore our knowledge base, user forums, get technical assistance and find contact information.</p>
                    </div>
                    <div className="home-page-info-item-button">
                        <Link to='/driver' className='nvidia-button'>More details</Link>
                    </div>
                </div>
                <div className="home-page-info-item">
                    <div className="home-page-info-item-image">
                        <img src={Spotlight} alt="spotlight"/>
                    </div>
                    <div className="home-page-info-item-title">
                        <p className='nvidia-3xl'>Download the GeForce Experience app</p>
                    </div>
                    <div className="home-page-info-item-subtitle">
                        <p className='nvidia-p'>
                            This is a very useful addition for your GeForce graphics card. Take videos, screenshots,
                            live
                            broadcasts and share them with friends. Update your video card drivers in a timely manner
                            and optimize your game settings.
                        </p>
                    </div>
                    <div className="home-page-info-item-button">
                        <Link to='/driver' className='nvidia-button'>More details</Link>
                    </div>
                </div>
                <div className="home-page-info-item">
                    <div className="home-page-info-item-image">
                        <img src={Download} alt="download"/>
                    </div>
                    <div className="home-page-info-item-title">
                        <p className='nvidia-3xl'>Download Drivers</p>
                    </div>
                    <div className="home-page-info-item-subtitle">
                        <p className='nvidia-p'>Download the latest GeForce driver releases.</p>
                    </div>
                    <div className="home-page-info-item-button">
                        <Link to='/driver' className='nvidia-button'>More details</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HomeInfoDriver;