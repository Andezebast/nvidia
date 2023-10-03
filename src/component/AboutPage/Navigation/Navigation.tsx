import React, {FC, useState} from 'react';
import './Navigation.scss';
/*--------------------------*/
const Navigation: FC = () => {
    const [architecture, setArchitecture] = useState<boolean>(true);
    const [performance, setPerformance] = useState<boolean>(false);
    const [rayTracing, setRayTracing] = useState<boolean>(false);
    const [DLSS, setDLSS] = useState<boolean>(false);
    const [reflex, setReflex] = useState<boolean>(false);
    /*--------------------------*/
    const handleClickArchitecture = () =>{
        setArchitecture(true);
        setPerformance(false)
        setRayTracing(false)
        setDLSS(false)
        setReflex(false)
    }
    const handleClickPerformance = () =>{
        setArchitecture(false);
        setPerformance(true)
        setRayTracing(false)
        setDLSS(false)
        setReflex(false)
    }
    const handleClickRayTracing = () =>{
        setArchitecture(false);
        setPerformance(false)
        setRayTracing(true)
        setDLSS(false)
        setReflex(false)
    }
    const handleClickDLSS = () =>{
        setArchitecture(false);
        setPerformance(false)
        setRayTracing(false)
        setDLSS(true)
        setReflex(false)
    }
    const handleClickReflex = () =>{
        setArchitecture(false);
        setPerformance(false)
        setRayTracing(false)
        setDLSS(false)
        setReflex(true)
    }
    /*--------------------------*/
    return (
        <div className='navigation'>
            <div className="navigation-container">
                <ul className="navigation-items">
                    <li className={"navigation-item" + (architecture ? ' active' : '')} onClick={handleClickArchitecture}>Architecture</li>
                    <li className={"navigation-item" + (performance ? ' active' : '')} onClick={handleClickPerformance}>Performance</li>
                    <li className={"navigation-item" + (rayTracing ? ' active' : '')} onClick={handleClickRayTracing}>Ray tracing</li>
                    <li className={"navigation-item" + (DLSS ? ' active' : '')} onClick={handleClickDLSS}>DLSS 3</li>
                    <li className={"navigation-item" + (reflex ? ' active' : '')} onClick={handleClickReflex}>Reflex</li>
                </ul>
            </div>

        </div>
    );
};

export default Navigation;