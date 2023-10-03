import React, {FC} from 'react';
import {Link} from "react-router-dom";
import './Banner.scss';
import NvidiaBackground from './img/Nvidia RTX 4090.jpg';
/*-------------------------------------------*/
const Banner: FC = () => {
    return (
        <div className='banner'>
            <div className="banner-background">
                <img src={NvidiaBackground} alt="nvidia-background"/>
            </div>
            <div className="banner-container">
                <div className="banner-title">
                    <p>GeForce RTX 4090</p>
                </div>
                <div className="banner-subtitle">
                    <p>MORE THAN SPEED</p>
                </div>
                <div className="banner-description">
                    <p>
                        NVIDIA® GeForce RTX™ 4090 is the best GeForce graphics card. It provides a huge leap in
                        performance, efficiency and graphics powered by artificial intelligence. Experience
                        ultra-high-performance games, incredibly detailed virtual worlds, unprecedented
                        productivity and new creative possibilities. These video cards are based on the architecture
                        NVIDIA Ada Lovelace, with 24GB of G6X memory, and provide an unparalleled experience for gamers
                        and content authors.
                    </p>
                </div>
                <div className="banner-button">
                    <Link to='/products'>All offers</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;