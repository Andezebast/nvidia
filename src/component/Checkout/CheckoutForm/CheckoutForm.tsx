import React, {FC} from 'react';
import './CheckoutForm.scss';
import {IAccount} from "../../../models/IAccount";
import InputMask from "react-input-mask";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../../hooks/redux";
import {useNavigate} from "react-router";
import {CheckoutSlice} from '../../../store/reducers/Checkout/CheckoutSlice';
/*-----------------------------*/
const CheckoutForm: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<IAccount>({
        defaultValues: {
            firstName: '',
        }
    });
    const submit = (data: IAccount) => {
        dispatch(CheckoutSlice.actions.AddCheckoutAccount(data))
        navigate('/checkoutAccept')
    };
    /*----------------------------------------*/
    return (
        <form onSubmit={handleSubmit(submit)} className='checkout-login-form'>
            <div className="checkout-login-form-title">
                <p>Account Form</p>
            </div>
            <div className='checkout-login-form-input'>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                       id='firstName' {...register('firstName', {required: 'Please, enter your first name'})}/>
                {errors.firstName && (
                    <div className='checkout-login-form-error'>{errors.firstName.message}</div>
                )}
            </div>
            <div className='checkout-login-form-input'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id='lastName' {...register('lastName', {required: 'Please, enter your last name'})}/>
                {errors.lastName && (
                    <div className='checkout-login-form-error'>{errors.lastName.message}</div>
                )}
            </div>
            <div className='checkout-login-form-input'>
                <label htmlFor="phoneNumber">Phone Number</label>
                <InputMask
                    {...register('phoneNumber', {required: 'Please, enter your phone number'})}
                    id='phoneNumber'
                    placeholder='(096)-000-0000'
                    mask="(999) 999-9999"/>
                {errors.phoneNumber && (
                    <div className='checkout-login-form-error'>{errors.phoneNumber.message}</div>
                )}
            </div>
            <div className='checkout-login-form-input'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email'
                       {...register('email', {
                           required: 'Please, enter your email',
                           pattern: {
                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                               message: 'uncorrected email'
                           }
                       })}/>
                {errors.email && (
                    <div className='checkout-login-form-error'>{errors.email.message}</div>
                )}
            </div>
            <div className='checkout-login-form-button'>
                <button type='submit'>Confirm!</button>
            </div>
        </form>
    );
};

export default CheckoutForm;