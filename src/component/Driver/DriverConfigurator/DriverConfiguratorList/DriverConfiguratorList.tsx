import React, {FC} from 'react';
import {motion} from "framer-motion";
import './DriverConfiguratorList.scss';
/*----------------------------------------*/
import {useAppSelector} from "../../../../hooks/redux";
import Loading from "../../../../svg/Loading";

/*----------------------------------------*/
interface IButtonSearchBoll {
    buttonSearchBoll: boolean
}

/*----------------------------------------*/
const DriverConfiguratorList: FC<IButtonSearchBoll> = ({buttonSearchBoll}) => {
    const {drivers, isLoading, error} = useAppSelector(state => state.driverReducer)
    /*----------------------------------------*/
    if (isLoading) {
        return (
            <div className='driver-page-configurator-list'>
                <div className='driver-configurator-loading'>
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 2,
                            ease: "linear",
                            repeat: Infinity,
                        }}>
                        <Loading/>
                    </motion.div>
                </div>
            </div>
        )
    }
    /*----------------------------------------*/
    if (error) {
        <div className='driver-page-configurator-list'>
            <div className='driver-configurator-error'>{error}</div>
        </div>
    }
    /*----------------------------------------*/
    return (
        <div className="driver-page-configurator-list">
            <div className="driver-configurator-items">
                {drivers.length
                    ? (drivers.map((driver, index) => (
                        <div className="driver-configurator-item" key={index}>
                            <div className="driver-configurator-item-image">
                                <img src={driver.photo} alt="driver-photo"/>
                            </div>
                            <div className="driver-configurator-item-content">
                                <div className="driver-configurator-item-content-title">
                                    <p>{driver.title}</p>
                                </div>
                                <div className="driver-configurator-item-content-description">
                                    <p>Driver version: {driver.version} - {driver.date}</p>
                                </div>
                                <div className="driver-configurator-item-content-OS">
                                    <p>OS: {driver.OS}</p>
                                </div>
                            </div>
                            <div className="driver-configurator-item-save">
                                <button>Save</button>
                            </div>
                        </div>
                    )))
                    : (buttonSearchBoll &&
                    <div className='driver-configurator-empty'>No driver found for this request!</div>)
                }
            </div>
        </div>
    );
};

export default DriverConfiguratorList;