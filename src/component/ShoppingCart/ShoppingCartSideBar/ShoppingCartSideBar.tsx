import React, {FC, useState, useEffect} from 'react';
import './ShoppingCartSideBar.scss';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {useNavigate} from "react-router";
import Button from "@mui/material/Button";
import {motion} from "framer-motion";
import {CheckoutSlice} from '../../../store/reducers/Checkout/CheckoutSlice';
/*---------------------------------------*/
const ShoppingCartSideBar: FC = () => {
    const [sum, setSum] = useState<number>(0);
    const shoppingCartProducts = useAppSelector(state => state.shoppingCartProductReducer.shoppingCartProducts);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
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
    const handleEventButton = () =>{
        dispatch(CheckoutSlice.actions.AddCheckoutQuantity(shoppingCartProducts.length))
        dispatch(CheckoutSlice.actions.AddCheckoutSum(sum))
        navigate('/checkoutLogin')
    }
    /*---------------------------------------*/
    return (
        <motion.div className='shopping-cart-sidebar'
                    initial={{opacity: 0, scale: 0.5, y: 500}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 1}}>
            <div className="shopping-cart-sidebar-content">
                <div className="shopping-cart-sidebar-content-count">
                    <p className='nvidia-xl-bold'>Quantity of products : <span>{shoppingCartProducts.length >= 1 ? shoppingCartProducts.length : '0'}</span></p>
                </div>
                <div className="shopping-cart-sidebar-content-sum">
                    <p className='nvidia-xl-bold'>Sum: <span>{sum ? sum : '0'} USD</span></p>
                </div>
                <div className="shopping-cart-sidebar-content-checkout">
                    {shoppingCartProducts.length
                        ? (<Button onClick={handleEventButton}>Go to checkout</Button>)
                        : (<Button disabled>Go to checkout</Button>)
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default ShoppingCartSideBar;