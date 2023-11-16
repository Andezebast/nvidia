import React, {FC} from 'react';
import './CheckoutAcceptList.scss';
import {useAppSelector} from "../../../../hooks/redux";
import {motion} from "framer-motion";
/*-------------------------------------*/
const CheckoutAcceptList:FC = () => {
    const {products} = useAppSelector(state => state.checkoutReducer)
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
                            <p className='nvidia-2xl-bold'>{product.name}</p>
                        </div>
                        <div className="checkout-accept-product-content-description">
                            <p className='nvidia-p'>{product.description}</p>
                        </div>
                        <div className="checkout-accept-product-content-price">
                            <p className='nvidia-p'>
                                Price <span className='nvidia-p-bold'>{product.finalPrice}</span> for <span className='nvidia-p-bold'>{product.quantity}</span> pieces
                            </p>
                        </div>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default CheckoutAcceptList;