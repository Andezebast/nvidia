import React, {FC, useEffect} from 'react';
import './ShoppingCartProducts.scss';
import {useAppSelector, useAppDispatch} from '../../../hooks/redux';
import {motion} from "framer-motion";
import {IProduct} from "../../../models/IProduct";
import {ShoppingCartSlice} from '../../../store/reducers/Shopping-cart/ShoppingCartSlice';
import {CheckoutSlice} from '../../../store/reducers/Checkout/CheckoutSlice';
/*-------------------------------------*/
const shoppingCartProductItems = {
    hidden: {opacity: 1, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.5
        }
    }
};
const shoppingCartProductItem = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1
    }
};
/*-------------------------------------*/
const ShoppingCartProducts: FC = () => {
    const shoppingCartProducts = useAppSelector(state => state.shoppingCartProductReducer.shoppingCartProducts);
    const dispatch = useAppDispatch();
    /*-------------------------------------*/
    const handleDeleteEvent = (product: IProduct) => {
        dispatch(ShoppingCartSlice.actions.RemoveFromShoppingCart(product))
    }
    const handleMinusEvent = (id: string) => {
        dispatch(ShoppingCartSlice.actions.quantityShoppingCart({
            id: id,
            action: 'minus'
        }))
    }
    const handlePlusEvent = (id: string) => {
        dispatch(ShoppingCartSlice.actions.quantityShoppingCart({
            id: id,
            action: 'plus'
        }))
    }
    /*-------------------------------------*/
    useEffect(()=>{
        dispatch(CheckoutSlice.actions.AddCheckoutProducts(shoppingCartProducts))
    },[shoppingCartProducts])
    /*-------------------------------------*/
    return (
        <motion.ul className='shopping-cart-products' variants={shoppingCartProductItems} initial="hidden" animate="visible">
            {shoppingCartProducts.length
                ? (shoppingCartProducts.map((product, index) => (
                    <motion.li key={index} className='shopping-cart-product' variants={shoppingCartProductItem}>
                        <div className='shopping-cart-product-image'>
                            <img src={product.photo} alt="photo"/>
                        </div>
                        <div className="shopping-cart-product-content">
                            <div className='shopping-cart-product-content-name'>
                                <p className='nvidia-2xl-bold'>{product.name}</p>
                            </div>
                            <div className='shopping-cart-product-content-description'>
                                <p className='nvidia-p'>{product.description}</p>
                            </div>
                            <div className='shopping-cart-product-content-price'>
                                {product.salePrice !== ''
                                    ? <p className='nvidia-p'><span className='nvidia-p'>{product.price}</span>{product.salePrice}</p>
                                    : <p className='nvidia-p'>{product.price}</p>}
                            </div>
                            <div className="shopping-cart-product-content-quantity">
                                <div className="shopping-cart-quantity-minus" onClick={() => handleMinusEvent(product.id)}>-</div>
                                <div className="shopping-cart-quantity-number">{product.quantity}</div>
                                <div className="shopping-cart-quantity-plus" onClick={() => handlePlusEvent(product.id)}>+</div>
                            </div>
                            <div className="shopping-cart-product-content-close" onClick={() => handleDeleteEvent(product)}>
                                <div>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </motion.li>
                )))
                : (<motion.ul className='shopping-cart-empty' variants={shoppingCartProductItems} initial="hidden" animate="visible">
                    <motion.li variants={shoppingCartProductItem} className='nvidia-2xl-normal'>Shopping cart is Empty!</motion.li>
                </motion.ul>)
            }
        </motion.ul>
    );
};

export default ShoppingCartProducts;