import React, {FC} from 'react';
import './ShoppingCartProducts.scss';
import {useAppSelector} from '../../../hooks/redux';
import {motion} from "framer-motion";
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
    return (
        <motion.ul className='shopping-cart-products' variants={shoppingCartProductItems} initial="hidden" animate="visible">
            {shoppingCartProducts.length
                ? (shoppingCartProducts.map((product, index) => (
                    <motion.li key={index} className='shopping-cart-product' variants={shoppingCartProductItem}>
                        <div className='shopping-cart-product-image'>
                            <img src={product.photo} alt="photo"/>
                        </div>
                        <div className="shopping-cart-product-content">
                            <div className='shopping-cart-product-content-name'><p>{product.name}</p></div>
                            <div className='shopping-cart-product-content-description'>
                                <p>{product.description}</p></div>
                            <div className='shopping-cart-product-content-price'>
                                {product.salePrice !== ''
                                    ? <p><span>{product.price}</span>{product.salePrice}</p>
                                    : <p>{product.price}</p>}
                            </div>
                            <div className="shopping-cart-product-content-quantity">
                                <div className="shopping-cart-quantity-minus">-</div>
                                <div className="shopping-cart-quantity-number">{product.quantity}</div>
                                <div className="shopping-cart-quantity-plus">+</div>
                            </div>
                            <div className="shopping-cart-product-content-close">
                                <div>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </motion.li>
                )))
                : (<div className='shopping-cart-empty'>
                    <p>Shopping cart is Empty!</p>
                </div>)
            }
        </motion.ul>
    );
};

export default ShoppingCartProducts;