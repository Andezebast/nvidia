import React, { FC } from "react";
import { motion } from "framer-motion";
import "./DriverConfiguratorList.scss";
/*----------------------------------------*/
import { useAppSelector } from "../../../../hooks/redux";
import Loading from "../../../../svg/Loading";
/*----------------------------------------*/
interface IButtonSearchBoll {
  buttonSearchBoll: boolean;
}
/*----------------------------------------*/
const DriverConfiguratorList: FC<IButtonSearchBoll> = ({
  buttonSearchBoll,
}) => {
  const { drivers, isLoading, error } = useAppSelector(
    (state) => state.driverReducer
  );
  /*----------------------------------------*/
  const driverListing = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const driverItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  /*----------------------------------------*/
  if (isLoading) {
    return (
      <div className="driver-page-configurator-list">
        <div className="driver-configurator-loading">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <Loading />
          </motion.div>
        </div>
      </div>
    );
  }
  /*----------------------------------------*/
  if (error) {
    return (
      <div className="driver-page-configurator-list">
        <div className="driver-configurator-error">{error}</div>
      </div>
    );
  }
  /*----------------------------------------*/
  return (
    <div className="driver-page-configurator-list">
      <motion.ul
        className="driver-configurator-items"
        variants={driverListing}
        initial="hidden"
        animate="visible"
      >
        {drivers.length
          ? drivers.map((driver, index) => (
              <motion.li
                className="driver-configurator-item"
                key={index}
                variants={driverItem}
              >
                <div className="driver-configurator-item-image">
                  <img src={driver.photo} alt="driver-photo" />
                </div>
                <div className="driver-configurator-item-content">
                  <div className="driver-configurator-item-content-title">
                    <p className="nvidia-2xl-bold">{driver.title}</p>
                  </div>
                  <div className="driver-configurator-item-content-description">
                    <p className="nvidia-p">
                      Driver version: {driver.version} - {driver.date}
                    </p>
                  </div>
                  <div className="driver-configurator-item-content-OS">
                    <p className="nvidia-p">OS: {driver.OS}</p>
                  </div>
                </div>
                <div className="driver-configurator-item-save">
                  <button className="nvidia-button">Save</button>
                </div>
              </motion.li>
            ))
          : buttonSearchBoll && (
              <div className="driver-configurator-empty nvidia-2xl-bold">
                No driver found for this request!
              </div>
            )}
      </motion.ul>
    </div>
  );
};

export default DriverConfiguratorList;
