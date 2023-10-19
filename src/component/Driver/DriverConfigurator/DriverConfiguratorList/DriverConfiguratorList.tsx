import React, {FC} from 'react';
import './DriverConfiguratorList.scss';
/*----------------------------------------*/
const DriverConfiguratorList: FC = () => {
    return (
        <div className="driver-page-configurator-list">
            <div className="driver-configurator-items">
                <div className="driver-configurator-item">1</div>
                <div className="driver-configurator-item">2</div>
                <div className="driver-configurator-item">3</div>
            </div>
        </div>
    );
};

export default DriverConfiguratorList;