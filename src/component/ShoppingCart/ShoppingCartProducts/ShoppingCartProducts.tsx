import React, {FC} from 'react';
import './ShoppingCartProducts.scss';
import {useAppSelector} from '../../../hooks/redux';
/*-------------------------------------*/
const ShoppingCartProducts: FC = () => {
    const shoppingCartProducts = useAppSelector(state => state.shoppingCartProductReducer.shoppingCartProducts);
    return (
        <div className='shopping-cart-products'>
            {shoppingCartProducts.length
                ? (shoppingCartProducts.map((product, index) => (
                    <div key={index} className='shopping-cart-product'>
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
                    </div>
                )))
                : (<div className='shopping-cart-empty'>
                    <p>Shopping cart is Empty!</p>
                </div>)
            }
        </div>
    );
};

export default ShoppingCartProducts;