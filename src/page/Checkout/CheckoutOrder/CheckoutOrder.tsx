import React, {FC} from 'react';
import './CheckoutOrder.scss';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router";
import {motion} from "framer-motion";
/*------------------------------*/
const  CheckoutOrder:FC = () => {
    const min = 1001;
    const max = 9999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    const navigate = useNavigate();
    /*------------------------------*/
    const handleEventButton = () =>{
        navigate('/nvidia')
        window.location.reload();
    }
    /*------------------------------*/
    return (
        <div className='checkout-order container'>
            <motion.div className="checkout-order-content"
                        initial={{opacity: 0, scale: 0.5, y: 200}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        transition={{duration: 1}}>
                <div className="checkout-order-content-title">
                    <p className='nvidia-xl-bold'>Your order <span>#{randomNumber}</span> has been placed</p>
                </div>
                <div className="checkout-order-content-subtitle">
                    <p className='nvidia-xl-bold'>Our manager will contact you shortly.</p>
                </div>
                <div className="checkout-order-content-button">
                    <Button onClick={handleEventButton}>Go to Category Page</Button>
                </div>
            </motion.div>
        </div>
    );
};

export default CheckoutOrder;