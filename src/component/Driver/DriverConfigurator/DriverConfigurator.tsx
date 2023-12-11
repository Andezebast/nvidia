import React, { FC, useState } from "react";
import "./DriverConfigurator.scss";
/*-------------------------------*/
import DriverConfiguratorList from "./DriverConfiguratorList/DriverConfiguratorList";
import DriverConfiguratorSearch from "./DriverConfiguratorSearch/DriverConfiguratorSearch";
/*-------------------------------*/
const DriverConfigurator: FC = () => {
  const [buttonSearchBoll, setButtonSearchBull] = useState<boolean>(false);
  /*------------------------------*/
  return (
    <div className="driver-page-configurator">
      <DriverConfiguratorList buttonSearchBoll={buttonSearchBoll} />
      <DriverConfiguratorSearch setButtonSearchBull={setButtonSearchBull} />
    </div>
  );
};

export default DriverConfigurator;
