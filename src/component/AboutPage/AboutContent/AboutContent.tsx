import React, {FC} from 'react';
import './AboutContent.scss';
import NvidiaArchitecture from './img/nvidia-architecture.jpg';
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
                <div className='about-content'>
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
                </div>
            )
        case 'Performance':
            return (
                <div className='about-content'>Performance</div>
            )
        case 'RayTracing':
            return (
                <div className='about-content'>RayTracing</div>
            )
        case 'DLSS':
            return (
                <div className='about-content'>DLSS</div>
            )
        case 'Reflex':
            return (
                <div className='about-content'>Reflex</div>
            )
        default:
            return (
                <div>Something was wrong!</div>
            )
    }
};

export default AboutContent;