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
    const [burgerActive, setBurgerActive] = useState<boolean>(false);
    /*-----------------------------------------*/
    let header = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(window.innerWidth >= 992){
            setIsMobile(false);
        }
        if(header.current){
            setHeaderHeight(header.current.offsetHeight)
        }
    }, [])
    /*-----------------------------------------*/
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    })
    const handleEventNvidia = () =>{
        setBurgerActive(false)
    }
    /*-----------------------------------------*/
    return (
        <div className='header' ref={header}>
            <div className="header-container">
                <Link to='/nvidia' className="header-container-img" onClick={handleEventNvidia}>
                    <NvidiaLogo/>
                </Link>
                {isMobile
                    ? (<HeaderBurger headerHeight={headerHeight} burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>)
                    : (<HeaderLinks/>)
                }
            </div>
        </div>
    );
};

export default Header;
