import React, {FC} from 'react';
import './DriverInfo.scss';
import Cloud from '../../../svg/Cloud';
import Question from '../../../svg/Question';
import {motion} from "framer-motion";
/*-------------------------------*/
const DriverInfo: FC = () => {
    return (
        <motion.div className='driver-page-info'
                    initial={{opacity: 0, scale: 0.5, y: 500}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 1, delay: 1}}>
            <div className="driver-page-info-item forum">
                <div className="driver-info-item-image">
                    <Cloud/>
                </div>
                <div className="driver-info-item-title">
                    <p className='nvidia-2xl-bold'>Driver Forum</p>
                </div>
                <div className="driver-info-item-description">
                    <p className='nvidia-p'>Any questions about drivers? Discuss them with other GeForce users on our forum.</p>
                </div>
            </div>
            <div className="driver-page-info-item studio">
                <div className="driver-info-item-image">
                    <Question/>
                </div>
                <div className="driver-info-item-title">
                    <p className='nvidia-2xl-bold'>Game Ready Drivers & Studio Drivers</p>
                </div>
                <div className="driver-info-item-description">
                    <p className='nvidia-p'>
                        NVIDIA drivers are specifically designed to provide the best possible experience for both
                        modern games and for working in graphic applications. Gamers who care
                        support for new games, patches and additional content from day one, worth paying for
                        preference for Game Ready drivers. If your first priority is to ensure reliability in
                        working with graphics, including video editing, animation, photography, graphic
                        design and live broadcasts, Studio drivers are the best choice. Work and play?
                        Don't worry, any driver will provide graphics applications and excellent gaming
                        possibilities.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default DriverInfo;