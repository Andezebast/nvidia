import React from 'react';
import './header.scss';
import {Link, NavLink} from "react-router-dom";
import {useAppSelector} from '../../hooks/redux';
import NvidiaLogo from "../../svg/NvidiaLogo";
/*-----------------------------------------*/
const Header = () => {
    const shoppingCartLength = useAppSelector(state => state.shoppingCartProductReducer.shoppingCartProducts);
    /*-----------------------------------------*/
    return (
        <div className='header'>
            <div className="header-container">
                <Link to='/' className="header-container-img">
                    <NvidiaLogo />
                </Link>
                <div className="header-container-links">
                    <NavLink className="header-link" to='/about'>About page</NavLink>
                    <NavLink className="header-link" to='/news'>News page</NavLink>
                    <NavLink className="header-link" to='/driver'>Driver page</NavLink>
                    <NavLink className="header-link" to='/products'>Category page</NavLink>
                    <NavLink className="header-link" to='/shopping'>Shopping cart {shoppingCartLength.length >= 1 && <span>{shoppingCartLength.length}</span>}</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;