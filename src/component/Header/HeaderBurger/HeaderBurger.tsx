import React, {FC, useState} from 'react';
import './HeaderBurger.scss';
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";

/*-----------------------------------------*/
interface HeaderBurgerProps {
    headerHeight: number,
}
/*-----------------------------------------*/
const HeaderBurger: FC<HeaderBurgerProps> = ({headerHeight}) => {
    const [burgerActive, setBurgerActive] = useState<boolean>(false);
    const shoppingCartLength = useAppSelector(state => state.shoppingCartProductReducer.shoppingCartProducts);
    /*-----------------------------------------*/
    const body = document.body;
    if(burgerActive){
        body.classList.add('overflow')
    } else{
        body.classList.remove('overflow')
    }
    /*-----------------------------------------*/
    const handleEventBurgerOpen = () => {
        setBurgerActive(!burgerActive);
    }
    const handleLinkEvent = () => {
        setBurgerActive(false);
    }
    return (
        <div className='header-container-burger'>
            <Button className={`burger-icon ${burgerActive ? 'open' : ''}`} variant='contained' onClick={handleEventBurgerOpen}>
                <span></span>
                <span></span>
                <span></span>
            </Button>
            <div className={`burger-content ${burgerActive ? 'open' : ''}`} style={{marginTop: headerHeight}}>
                <div className="burger-content-Links">
                    <NavLink className="burger-link" to='/about' onClick={handleLinkEvent}>About page</NavLink>
                    <NavLink className="burger-link" to='/news' onClick={handleLinkEvent}>News page</NavLink>
                    <NavLink className="burger-link" to='/driver' onClick={handleLinkEvent}>Driver page</NavLink>
                    <NavLink className="burger-link" to='/products' onClick={handleLinkEvent}>Category page</NavLink>
                    <NavLink className="burger-link" to='/shopping' onClick={handleLinkEvent}>Shopping cart {shoppingCartLength.length >= 1 && <span>{shoppingCartLength.length}</span>}</NavLink>
                </div>
            </div>
        </div>
    );
};

export default HeaderBurger;