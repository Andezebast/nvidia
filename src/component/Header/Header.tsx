import React from 'react';
import nvidiaLogo from './img/nvidiaLogo.svg';
import './header.scss';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className="header-container">
                <Link to='/' className="header-container-img">
                    <img src={nvidiaLogo} alt="nvidiaLogo"/>
                </Link>
                <div className="header-container-links">
                    <NavLink className="header-link" to='/about'>About page</NavLink>
                    <NavLink className="header-link" to='/news'>News page</NavLink>
                    <NavLink className="header-link" to='/driver'>Driver page</NavLink>
                    <NavLink className="header-link" to='/products'>Category page</NavLink>
                    <NavLink className="header-link" to='/shopping'>Shopping cart</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;