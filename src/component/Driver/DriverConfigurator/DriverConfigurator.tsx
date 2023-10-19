import React, {FC} from 'react';
import './DriverConfigurator.scss';
/*-------------------------------*/
import DriverConfiguratorList from "./DriverConfiguratorList/DriverConfiguratorList";
import DriverConfiguratorSearch from "./DriverConfiguratorSearch/DriverConfiguratorSearch";
/*-------------------------------*/
const DriverConfigurator: FC = () => {
    /*-------------------------------*/
    return (
        <div className='driver-page-configurator'>
            <DriverConfiguratorList />
            <DriverConfiguratorSearch />
        </div>
    );
};

export default DriverConfigurator;