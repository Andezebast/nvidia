import React, {FC, useEffect, useState} from 'react';
import './AboutNavigation.scss';
/*--------------------------*/
interface PropsNavigation {
    activeTab: string,
    setActiveTab: Function
}
/*--------------------------*/
interface IMass {
    id: number,
    text: string
}
const navigationMass: IMass[] = [
    {
        id: 1,
        text: 'Architecture'
    },
    {
        id: 2,
        text: 'Performance'
    },
    {
        id: 3,
        text: 'RayTracing'
    },
    {
        id: 4,
        text: 'DLSS'
    },
    {
        id: 5,
        text: 'Reflex'
    },
]
/*--------------------------*/
const AboutNavigation: FC<PropsNavigation> = ({activeTab, setActiveTab} ) => {
    /*--------------------------*/
    const handleEventNavigation = (text: string) =>{
        setActiveTab(text)
    }
    /*--------------------------*/
    return (
        <div className='about-navigation'>
            <div className="about-navigation-container">
                <ul className="about-navigation-items">
                    {navigationMass.map(item => (
                        <li
                            className={`about-navigation-item ${activeTab === item.text ? ' active': ''}`}
                            key={item.id}
                            onClick={() => handleEventNavigation(item.text)}
                        >{item.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutNavigation;