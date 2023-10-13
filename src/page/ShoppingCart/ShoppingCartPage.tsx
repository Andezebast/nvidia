import React, {FC} from 'react';
import './ShoppingCartPage.scss';
import {motion} from "framer-motion";
/*-----------------------------------*/
import ShoppingCartProducts from '../../component/ShoppingCart/ShoppingCartProducts/ShoppingCartProducts';
import ShoppingCartSideBar from '../../component/ShoppingCart/ShoppingCartSideBar/ShoppingCartSideBar';
const ShoppingCartPage: FC = () => {
    /*-----------------------------------*/
    return (
        <div className='shopping-cart'>
            <motion.div className="shopping-cart-title"
                        initial={{opacity: 0, scale: 0.5, y: 500}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        transition={{duration: 1}}>
                <p>Shopping Cart</p>
            </motion.div>
            <div className="shopping-cart-content">
                <ShoppingCartProducts/>
                <ShoppingCartSideBar/>
            </div>
        </div>
    );
};

export default ShoppingCartPage;