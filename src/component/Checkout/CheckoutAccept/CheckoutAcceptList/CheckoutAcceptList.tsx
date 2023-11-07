import React, {FC} from 'react';
import './CheckoutAcceptList.scss';
import {useAppSelector} from "../../../../hooks/redux";
import {motion} from "framer-motion";
/*-------------------------------------*/
const CheckoutAcceptList:FC = () => {
    const {products} = useAppSelector(state => state.checkoutReducer)
    console.log(products, 'products')
    /*-------------------------------------*/
    const ProductItems = {
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
    const ProductItem = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1
        }
    };
    /*--------------------------*/
    return (
        <motion.ul className='checkout-accept-list' variants={ProductItems} initial="hidden" animate="visible">
            {products.map((product, index) => (
                <motion.li key={index} className='checkout-accept-product' variants={ProductItem}>
                    <div className="checkout-accept-product-image">
                        <img src={product.photo} alt="image"/>
                    </div>
                    <div className="checkout-accept-product-content">
                        <div className="checkout-accept-product-content-title">
                            <p>{product.name}</p>
                        </div>
                        <div className="checkout-accept-product-content-description">
                            <p>{product.description}</p>
                        </div>
                        <div className="checkout-accept-product-content-price">
                            <p>Price <span>{product.finalPrice}</span> for <span>{product.quantity}</span> pieces</p>
                        </div>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default CheckoutAcceptList;