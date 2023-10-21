import React, {FC} from 'react';
import './DriverInfo.scss';
import Cloud from '../../../svg/Cloud';
import Question from '../../../svg/Question';
/*-------------------------------*/
const DriverInfo: FC = () => {
    return (
        <div className='driver-page-info'>
            <div className="driver-page-info-item forum">
                <div className="driver-info-item-image">
                    <Cloud/>
                </div>
                <div className="driver-info-item-title">
                    <p>Driver Forum</p>
                </div>
                <div className="driver-info-item-description">
                    <p>Any questions about drivers? Discuss them with other GeForce users on our forum.</p>
                </div>
            </div>
            <div className="driver-page-info-item studio">
                <div className="driver-info-item-image">
                    <Question/>
                </div>
                <div className="driver-info-item-title">
                    <p>Game Ready Drivers & Studio Drivers</p>
                </div>
                <div className="driver-info-item-description">
                    <p>
                        Драйверы NVIDIA специально разработаны, чтобы обеспечить наилучшие возможности как для
                        современных игр, так и для работы в графических приложениях. Геймерам, которым важна
                        поддержка новых игр, патчей и дополнительного контента с первого дня, стоит отдать
                        предпочтение драйверам Game Ready. Если вам в первую очередь важно обеспечить надежность в
                        работе с графикой, в том числе для редактирования видео, анимации, фотографии, графического
                        дизайна и прямых трансляций, оптимальным выбором станут драйверы Studio.Работаете и играете?
                        Не переживайте, любой драйвер обеспечит работу графических приложений и отличные игровые
                        возможности.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DriverInfo;