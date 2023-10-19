import React, {FC} from 'react';
import './DriverPage.scss';
/*-------------------------*/
import DriverInfo from '../../component/Driver/DriverInfo/DriverInfo';
import DriverConfigurator from '../../component/Driver/DriverConfigurator/DriverConfigurator';
/*-------------------------*/
const DriverPage: FC = () => {
    return (
        <div className='driver-page container'>
            <div className="driver-page-title">
                <p>Drivers GeForce®</p>
            </div>
            <DriverConfigurator/>
            <DriverInfo/>
        </div>
    );
};

export default DriverPage;