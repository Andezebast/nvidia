import React, {useEffect, useRef, useState} from 'react';
import './Header.scss';
import NvidiaLogo from "../../svg/NvidiaLogo";
import {Link} from "react-router-dom";
/*-----------------------------------------*/
import HeaderBurger from "./HeaderBurger/HeaderBurger";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
/*-----------------------------------------*/
const Header = () => {
    const [isMobile, setIsMobile] = useState<boolean>(true);
    const [headerHeight, setHeaderHeight] = useState<number>(0);

    let header = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(window.innerWidth >= 992){
            setIsMobile(false);
        }
        if(header.current){
            setHeaderHeight(header.current.offsetHeight)
        }
    }, [])

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    })
    return (
        <div className='header' ref={header}>
            <div className="header-container">
                <Link to='/nvidia' className="header-container-img">
                    <NvidiaLogo/>
                </Link>
                {isMobile
                    ? (<HeaderBurger headerHeight={headerHeight}/>)
                    : (<HeaderLinks/>)
                }
            </div>
        </div>
    );
};

export default Header;
