import React, {FC} from 'react';
import './HeaderLinks.scss';
/*-----------------------------------------*/
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
/*-----------------------------------------*/
const HeaderLinks: FC = () => {
    const shoppingCartLength = useAppSelector(state => state.shoppingCartProductReducer.shoppingCartProducts);
    /*-----------------------------------------*/
    return (
        <div className="header-container-links">
            <NavLink className="header-link" to='/about'>About page</NavLink>
            <NavLink className="header-link" to='/news'>News page</NavLink>
            <NavLink className="header-link" to='/driver'>Driver page</NavLink>
            <NavLink className="header-link" to='/products'>Category page</NavLink>
            <NavLink className="header-link" to='/shopping'>Shopping cart {shoppingCartLength.length >= 1 && <span>{shoppingCartLength.length}</span>}</NavLink>
        </div>
    );
};

export default HeaderLinks;