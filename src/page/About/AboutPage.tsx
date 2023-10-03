import React,{FC} from 'react';
import Banner from '../../component/AboutPage/Banner/Banner';
import Navigation from '../../component/AboutPage/Navigation/Navigation';
/*--------------------------------------------------*/
const AboutPage: FC = () => {
    return (
        <div className='about-page'>
            <Banner />
            <Navigation/>
        </div>
    );
};

export default AboutPage;