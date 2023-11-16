import React, {FC} from 'react';
import './CheckoutAcceptSidebar.scss';
import {useAppSelector} from "../../../../hooks/redux";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
/*-------------------------------------*/
const CheckoutAcceptSidebar: FC = () => {
    const {account, sum, quantity} = useAppSelector(state => state.checkoutReducer)
    /*--------------------------*/
    return (
        <motion.div className='checkout-accept-sidebar'
                    initial={{opacity: 0, scale: 0.5, y: 500}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 1}}>
            <div className='checkout-accept-sidebar-sticky'>
                {account.map((item, index) => (
                    <div className='sidebar-account' key={index}>
                        <div className="sidebar-account-first-name">
                            <p className='nvidia-xl'><span className='nvidia-xl-bold'>First Name: </span>{item.firstName}</p>
                        </div>
                        <div className="sidebar-account-last-name">
                            <p className='nvidia-xl'><span className='nvidia-xl-bold'>Last Name: </span>{item.lastName}</p>
                        </div>
                        <div className="sidebar-account-phone-number">
                            <p className='nvidia-xl'><span className='nvidia-xl-bold'>Phone Number: </span>{item.phoneNumber}</p>
                        </div>
                        <div className="sidebar-account-email">
                            <p className='nvidia-xl'><span className='nvidia-xl-bold'>Email: </span>{item.email}</p>
                        </div>
                    </div>
                ))}
                <div className="sidebar-result">
                    <div className="sidebar-result-sum">
                        <p className='nvidia-xl'><span className='nvidia-xl-bold'>Final Sum: </span>{sum} USD</p>
                    </div>
                    <div className="sidebar-result-quantity">
                        <p className='nvidia-xl'><span className='nvidia-xl-bold'>Quantity products: </span>{quantity}</p>
                    </div>
                    <div className="sidebar-result-confirm">
                        <NavLink to='/checkoutOrder' className='nvidia-button'>Confirm</NavLink>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CheckoutAcceptSidebar;