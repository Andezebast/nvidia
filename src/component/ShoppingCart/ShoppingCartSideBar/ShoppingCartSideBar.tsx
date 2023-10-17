import React, {FC, useState, useEffect} from 'react';
import './ShoppingCartSideBar.scss';
import {useAppSelector} from "../../../hooks/redux";
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import {motion} from "framer-motion";
/*---------------------------------------*/
const ShoppingCartSideBar: FC = () => {
    const shoppingCartProducts = useAppSelector(state => state.shoppingCartProductReducer.shoppingCartProducts);
    const [sum, setSum] = useState<number>(0);
    /*---------------------------------------*/
    useEffect(() => {
        if (shoppingCartProducts.length) {
            let allSumPrice: number[] = [];
            shoppingCartProducts.forEach(product => {
                allSumPrice.push(product.finalPrice)
            })
            setSum(allSumPrice.reduce((acc, rec) => acc + rec));
        } else if (shoppingCartProducts.length === 0) {
            setSum(0)
        }
    }, [shoppingCartProducts])
    /*---------------------------------------*/
    return (
        <motion.div className='shopping-cart-sidebar'
                    initial={{opacity: 0, scale: 0.5, y: 500}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 1}}>
            <div className="shopping-cart-sidebar-content">
                <div className="shopping-cart-sidebar-content-count">
                    <p>Quantity of products : <span>{shoppingCartProducts.length >= 1 ? shoppingCartProducts.length : '0'}</span></p>
                </div>
                <div className="shopping-cart-sidebar-content-sum">
                    <p>Summary number : <span>{sum ? sum : '0'} USD</span></p>
                </div>
                <div className="shopping-cart-sidebar-content-checkout">
                    {shoppingCartProducts.length
                        ? (<Button component={NavLink} to='/checkoutLogin'>Go to checkout</Button>)
                        : (<Button component={NavLink} to='/checkoutLogin' disabled>Go to checkout</Button>)
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default ShoppingCartSideBar;