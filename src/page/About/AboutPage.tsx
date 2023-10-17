import React, {FC, useState} from 'react';
import AboutBanner from '../../component/About/AboutBanner/AboutBanner';
import Navigation from '../../component/About/AboutNavigation/AboutNavigation';
import AboutContent from "../../component/About/AboutContent/AboutContent";
/*--------------------------------------------------*/
const AboutPage: FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Architecture');
    return (
        <div className='about-page'>
            <AboutBanner />
            <Navigation activeTab={activeTab}  setActiveTab={setActiveTab}/>
            <AboutContent activeTab={activeTab}/>
        </div>
    );
};

export default AboutPage;