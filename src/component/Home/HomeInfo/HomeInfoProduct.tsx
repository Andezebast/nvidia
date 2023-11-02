import React, {FC} from 'react';
import './HomeInfo.scss';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
/*-------------------------------------*/
import VideoCard from './img/home-product-video-card.jpg';
import Laptop from './img/home-product-laptop.jpg';
import PC from './img/home-product-pc.jpg';
/*-------------------------------------*/
const HomeInfoProduct: FC = () => {
    return (
        <motion.div className='home-page-info product container'
                    initial={{opacity: 0, scale: 0.5, y: 500}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 1}}>
            <div className="home-page-info-title">
                <p>GeForce Products</p>
            </div>
            <div className="home-page-info-subtitle">
                <p>Compare and shop the latest GeForce graphics cards, gaming systems and accessories.</p>
            </div>
            <div className="home-page-info-items">
                <div className="home-page-info-item">
                    <div className="home-page-info-item-image">
                        <img src={VideoCard} alt="video-card"/>
                    </div>
                    <div className="home-page-info-item-title">
                        <p>Video cards</p>
                    </div>
                    <div className="home-page-info-item-subtitle">
                        <p>NVIDIA GeForce RTX video cards are the weapon of choice for gamers.</p>
                    </div>
                    <div className="home-page-info-item-button">
                        <Link to='/products'>More details</Link>
                    </div>
                </div>
                <div className="home-page-info-item">
                    <div className="home-page-info-item-image">
                        <img src={Laptop} alt="laptop"/>
                    </div>
                    <div className="home-page-info-item-title">
                        <p>Laptops</p>
                    </div>
                    <div className="home-page-info-item-subtitle">
                        <p>Ultra-thin. Incredibly powerful. Gaming laptops based on NVIDIA GeForce RTX.</p>
                    </div>
                    <div className="home-page-info-item-button">
                        <Link to='/products'>More details</Link>
                    </div>
                </div>
                <div className="home-page-info-item">
                    <div className="home-page-info-item-image">
                        <img src={PC} alt="PC"/>
                    </div>
                    <div className="home-page-info-item-title">
                        <p>Gaming PC</p>
                    </div>
                    <div className="home-page-info-item-subtitle">
                        <p>Powerful GeForce RTX-based computers for gaming and work.</p>
                    </div>
                    <div className="home-page-info-item-button">
                        <Link to='/products'>More details</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HomeInfoProduct;