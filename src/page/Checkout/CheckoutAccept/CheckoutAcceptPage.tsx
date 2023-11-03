import React,{FC} from 'react';
import './CheckoutAcceptPage.scss';
/*-----------------------------------*/
import {useAppSelector} from "../../../hooks/redux";
/*-----------------------------------*/
const CheckoutAcceptPage: FC = () => {
    const {products, account, quantity, summary} = useAppSelector(state => state.checkoutReducer)
    console.log(products, 'products')
    console.log(account, 'account')
    console.log(quantity, 'quantity')
    console.log(summary, 'summary')
    /*--------------------------*/
    return (
        <div className='checkout-accept container'>
            Checkout Accept
        </div>
    );
};

export default CheckoutAcceptPage;