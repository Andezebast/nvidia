import React, {FC} from 'react';
import './DriverPage.scss';
import {motion} from "framer-motion";
/*-------------------------*/
import DriverInfo from '../../component/Driver/DriverInfo/DriverInfo';
import DriverConfigurator from '../../component/Driver/DriverConfigurator/DriverConfigurator';
/*-------------------------*/
const DriverPage: FC = () => {
    return (
        <motion.div className='driver-page container'
                    initial={{opacity: 0, scale: 0.5, y: 500}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 1, delay: 0.5}}>
            <div className="driver-page-title">
                <p className='nvidia-4xl'>Drivers GeForce®</p>
            </div>
            <DriverConfigurator/>
            <DriverInfo/>
        </motion.div>
    );
};

export default DriverPage;