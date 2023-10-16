import React, {FC, useState, useEffect} from 'react';
import './ShoppingCartSideBar.scss';
import {useAppSelector} from "../../../hooks/redux";
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
        } else if(shoppingCartProducts.length === 0){
            setSum(0)
        }
    }, [shoppingCartProducts])
    /*---------------------------------------*/
    return (
        <div className='shopping-cart-sidebar'>
            <div className="shopping-cart-sidebar-content">
                <div className="shopping-cart-sidebar-content-count">
                    <p>Quantity of products : {shoppingCartProducts.length >= 1 ? shoppingCartProducts.length : '0'}</p>
                </div>
                <div className="shopping-cart-sidebar-content-sum">
                    <p>Summary number : {sum ? sum : '0'} USD</p>
                </div>
                <div className="shopping-cart-sidebar-content-checkout"></div>
            </div>
        </div>
    );
};

export default ShoppingCartSideBar;