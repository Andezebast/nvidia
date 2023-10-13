import React, {FC} from 'react';
import ReactPlayer from "react-player";
import './AboutContent.scss';
import {motion} from "framer-motion";
/*-------------------------------*/
import NvidiaArchitecture from './img/nvidia-architecture.jpg';
import NvidiaPerformance from './img/nvidia-performance.png';
import Witcher from './img/witcher.jpeg';
import Cyberpunk from './img/cyberpunk2077.jpeg';
import AlanAwake from './img/alan-awake-2.jpeg';
import DiabloIV from './img/diablo-iv.jpeg';
import NvidiaDLSSBackground from './img/nvidia-dlss-background.jpg';
import NvidiaReflexBackground from './img/nvidia-reflex-background.jpg';
import Arrow from './svg/Arrow';
/*-------------------------------*/
const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.5
        }
    }
};
const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1
    }
};

/*-------------------------------*/
interface IProps {
    activeTab: string
}

/*-------------------------------*/
const AboutContent: FC<IProps> = ({activeTab}) => {
    /*-------------------------*/
    switch (activeTab) {
        case 'Architecture':
            return (
                <motion.div className='about-content'
                            key='architecture'
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.8}}>
                    <div className="about-content-architecture-title">
                        <p>NVIDIA Ada Lovelace Architecture</p>
                    </div>
                    <div className="about-content-architecture-subtitle">
                        <p>Ahead of your time, become the best.</p>
                    </div>
                    <div className="about-content-architecture-content">
                        <div className="about-architecture-image">
                            <img src={NvidiaArchitecture} alt="photo"/>
                        </div>
                        <div className="about-architecture-description">
                            <div className="about-architecture-description-item">
                                <div className="about-architecture-description-item-title">
                                    <p>New streaming multiprocessors</p>
                                </div>
                                <div className="about-architecture-description-item-subtitle">
                                    <p>Up to 2x higher performance and energy efficiency</p>
                                </div>
                            </div>
                            <div className="about-architecture-description-item">
                                <div className="about-architecture-description-item-title">
                                    <p>Fourth generation tensor cores</p>
                                </div>
                                <div className="about-architecture-description-item-subtitle">
                                    <p>Up to 4x faster performance with DLSS 3 compared to brute force rendering</p>
                                </div>
                            </div>
                            <div className="about-architecture-description-item">
                                <div className="about-architecture-description-item-title">
                                    <p>Third generation RT cores</p>
                                </div>
                                <div className="about-architecture-description-item-subtitle">
                                    <p>Up to 2x faster performance with ray tracing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )
        case 'Performance':
            return (
                <div className='about-content full-screen'>
                    <motion.div className="about-content-performance"
                                key='performance'
                                initial={{opacity: 0, scale: 0.5}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.8}}>
                        <div className="about-content-performance-title">
                            <p>Performance</p>
                        </div>
                        <div className="about-content-performance-image">
                            <img src={NvidiaPerformance} alt="image"/>
                        </div>
                        <div className="about-content-performance-subtitle">
                            <p>Relative performance</p>
                        </div>
                        <div className="about-content-performance-description">
                            <p>
                                Resolution 3840x2160, maximum gaming settings, DLSS Super Resolution in performance
                                mode,
                                frame generation on RTX 40 series video cards, i9-12900K, 32 GB RAM, Win 11 x64.
                                Cyberpunk
                                2077 with a new ray tracing mode: review of Overdrive Mode technology in test builds of
                                the
                                game.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )
        case 'RayTracing':
            return (
                <motion.div className='about-content'
                            key='rtx'
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.8}}>
                    <div className="about-content-rtx-title">
                        <p>Popular games with RTX support</p>
                    </div>
                    <motion.ul
                        className="about-content-rtx-items"
                        key='rtx-list'
                        variants={container}
                        initial="hidden"
                        animate="visible">
                        <motion.li className="about-content-rtx-item" variants={item}>
                            <div className="about-content-rtx-item-image">
                                <img src={Witcher} alt="witcher"/>
                            </div>
                            <div className="about-content-rtx-item-title">
                                <p>The Witcher 3: Wild Hunt. Complete edition</p>
                            </div>
                            <div className="about-content-rtx-item-description">
                                <p>
                                    Explore the vast open world of The Witcher as monster slayer Geralt of Rivia and
                                    hunt down the child of prophecy to save or destroy the world. Experience the
                                    ultimate Wild Hunt experience with GeForce RTX 40 graphics.
                                </p>
                            </div>
                            <div className="about-content-rtx-item-text">
                                <p>
                                    <span>Technologies:</span> Ray tracing, DLSS 3, DLSS 2 and Reflex.
                                </p>
                            </div>
                            <div className="about-content-rtx-item-link">
                                <a href="https://www.youtube.com/watch?v=b3fWY-JGxt4&t=1s" target='_blank'>
                                    Watch the video
                                    <Arrow/>
                                </a>
                            </div>
                        </motion.li>
                        <motion.li className="about-content-rtx-item" variants={item}>
                            <div className="about-content-rtx-item-image">
                                <img src={Cyberpunk} alt="cyberpunk"/>
                            </div>
                            <div className="about-content-rtx-item-title">
                                <p>Cyberpunk 2077: Phantom Liberty</p>
                            </div>
                            <div className="about-content-rtx-item-description">
                                <p>
                                    Phantom Freedom is a story expansion that brings spy thriller elements to Cyberpunk
                                    2077.
                                </p>
                            </div>
                            <div className="about-content-rtx-item-text">
                                <p>
                                    <span>Technologies:</span> Full ray tracing, DLSS 3.5, DLSS 3, DLSS 2 and Reflex.
                                </p>
                            </div>
                            <div className="about-content-rtx-item-link">
                                <a href="https://www.youtube.com/watch?v=hKfo__zgjto" target='_blank'>
                                    Watch the video
                                    <Arrow/>
                                </a>
                            </div>
                        </motion.li>
                        <motion.li className="about-content-rtx-item" variants={item}>
                            <div className="about-content-rtx-item-image">
                                <img src={AlanAwake} alt="alanAwake"/>
                            </div>
                            <div className="about-content-rtx-item-title">
                                <p>Alan Wake 2 </p>
                            </div>
                            <div className="about-content-rtx-item-description">
                                <p>
                                    Saga Anderson arrives in a small town to investigate ritual murders. Alan Wake
                                    creates a dark story to change the reality around him. These two characters are
                                    somehow connected. Will they be able to overcome all the difficulties in their way?
                                    Find out with the unmatched performance of GeForce RTX 40 graphics cards.
                                </p>
                            </div>
                            <div className="about-content-rtx-item-text">
                                <p>
                                    <span>Technologies:</span> Full ray tracing, DLSS 3.5, DLSS 3, DLSS 2 and Reflex
                                </p>
                            </div>
                            <div className="about-content-rtx-item-link">
                                <a href="https://www.youtube.com/watch?v=f6frfhR_0Qk" target='_blank'>
                                    Watch the video
                                    <Arrow/>
                                </a>
                            </div>
                        </motion.li>
                        <motion.li className="about-content-rtx-item" variants={item}>
                            <div className="about-content-rtx-item-image">
                                <img src={DiabloIV} alt="diabloIV"/>
                            </div>
                            <div className="about-content-rtx-item-title">
                                <p>Diablo IV</p>
                            </div>
                            <div className="about-content-rtx-item-description">
                                <p>

                                    Diablo® IV is a thrilling action RPG featuring an army of evil spirits, countless
                                    abilities, terrifying dungeons and legendary loot. Start a riot in Hell with the
                                    incredible performance of NVIDIA DLSS 3, powered by AI. Get the best control
                                    responsiveness with NVIDIA Reflex on launch day and experience ray tracing in future
                                    updates.
                                </p>
                            </div>
                            <div className="about-content-rtx-item-text">
                                <p>
                                    <span>Technologies:</span> DLSS 3, DLSS 2, Reflex and ray tracing (in future
                                    updates).
                                </p>
                            </div>
                            <div className="about-content-rtx-item-link">
                                <a href="https://www.youtube.com/watch?v=fGdnys7CKHY" target='_blank'>
                                    Watch the video
                                    <Arrow/>
                                </a>
                            </div>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            )
        case 'DLSS':
            return (
                <div className='about-content dlss'>
                    <motion.div className="about-content-dlss-background"
                                key='dlss-background'
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1}}>
                        <img src={NvidiaDLSSBackground} alt="about-dlss-background"/>
                    </motion.div>
                    <motion.div className="about-content-dlss"
                                key='dlss-content'
                                initial={{opacity: 0, scale: 0.5, bottom: -200}}
                                animate={{opacity: 1, scale: 1, bottom: 0}}
                                transition={{duration: 0.8, delay: 1}}>
                        <div className="about-content-dlss-subtitle">
                            <p>NVIDIA DLSS 3</p>
                        </div>
                        <div className="about-content-dlss-title">
                            <p>Maximum FPS and quality using AI</p>
                        </div>
                        <div className="about-content-dlss-description">
                            <p>
                                DLSS technology is a true revolution in AI-powered graphics that improves performance
                                exponentially. Relying on the new fourth-generation Tensor Cores and optical flow
                                accelerator in GeForce RTX 40 GPUs, DLSS 3 technology uses artificial intelligence to
                                create additional frames and improve image quality.
                            </p>
                        </div>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=QGI8EIgf8Y8&t=1s"
                            width="850px"
                            height="480px"
                            controls
                        />
                        <div className="about-content-dlss-under-text">
                            <p>
                                *Shot using GeForce RTX 4090 at 3840 x 2160 with maximum gaming settings and RT
                                Overdrive.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )
        case 'Reflex':
            return (
                <div className='about-content reflex'>
                    <motion.div className="about-content-reflex-background"
                                key='reflex-background'
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1}}>
                        <img src={NvidiaReflexBackground} alt="about-reflex-background"/>
                    </motion.div>
                    <motion.div className="about-content-reflex"
                                key='reflex-content'
                                initial={{opacity: 0, scale: 0.5, bottom: -200}}
                                animate={{opacity: 1, scale: 1, bottom: 0}}
                                transition={{duration: 0.8, delay: 1}}>
                        <div className="about-content-reflex-subtitle">
                            <p>NVIDIA Reflex</p>
                        </div>
                        <div className="about-content-reflex-title">
                            <p>Milliseconds determine victory.</p>
                        </div>
                        <div className="about-content-reflex-description">
                            <p>
                                GeForce RTX 40 and NVIDIA Reflex deliver lower latency and more responsive controls,
                                giving you an edge over your competitors. Designed to optimize and measure system
                                latency, Reflex technology delivers faster aiming, faster reaction times and maximizes
                                accuracy in competitive gaming.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )
        default:
            return (
                <div>Something was wrong!</div>
            )
    }
};

export default AboutContent;