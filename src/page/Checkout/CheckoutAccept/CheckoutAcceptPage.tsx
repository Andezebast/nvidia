import React, {FC} from 'react';
import './CheckoutAcceptPage.scss';
import CheckoutAcceptList from "../../../component/Checkout/CheckoutAccept/CheckoutAcceptList/CheckoutAcceptList";
import CheckoutAcceptSidebar from "../../../component/Checkout/CheckoutAccept/CheckoutAccpetSidebar/CheckoutAcceptSidebar";
import {motion} from "framer-motion";
/*-----------------------------------*/
const CheckoutAcceptPage: FC = () => {
    /*--------------------------*/
    return (
        <div className='checkout-accept container'>
            <motion.div className="checkout-accept-title"
                        initial={{opacity: 0, scale: 0.5, y: 500}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        transition={{duration: 1}}>
                <p>Checkout Accept</p>
            </motion.div>
            <div className="checkout-accept-content">
                <CheckoutAcceptList/>
                <CheckoutAcceptSidebar/>
            </div>
        </div>
    );
};

export default CheckoutAcceptPage;