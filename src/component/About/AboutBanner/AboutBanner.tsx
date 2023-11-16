import React, {FC} from 'react';
import './AboutBanner.scss';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import NvidiaBackground from './img/Nvidia RTX 4090.jpg';
/*-------------------------------------------*/
const AboutBanner: FC = () => {
    return (
        <div className='about-banner'>
            <motion.div className="about-banner-background"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 3}}>
                <img src={NvidiaBackground} alt="nvidia-background"/>
            </motion.div>
            <motion.div className="about-banner-container container"
                        key='about-banner'
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            y: -200,
                            x: -500
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            x: 0
                        }}
                        transition={{duration: 1}}>
                <div className="about-banner-title">
                    <p className='nvidia-5xl'>GeForce RTX 4090</p>
                </div>
                <div className="about-banner-subtitle">
                    <p className='nvidia-3xl-bold'>MORE THAN SPEED</p>
                </div>
                <div className="about-banner-description">
                    <p className='nvidia-xl'>
                        NVIDIA® GeForce RTX™ 4090 is the best GeForce graphics card. It provides a huge leap in
                        performance, efficiency and graphics powered by artificial intelligence. Experience
                        ultra-high-performance games, incredibly detailed virtual worlds, unprecedented
                        productivity and new creative possibilities. These video cards are based on the architecture
                        NVIDIA Ada Lovelace, with 24GB of G6X memory, and provide an unparalleled experience for gamers
                        and content authors.
                    </p>
                </div>
                <div className="about-banner-button">
                    <Link to='/products' className='nvidia-button'>All offers</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutBanner;