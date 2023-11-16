import React, {FC} from 'react';
import './CheckoutForm.scss';
import {IAccount} from "../../../models/IAccount";
import InputMask from "react-input-mask";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../../hooks/redux";
import {useNavigate} from "react-router";
import {CheckoutSlice} from '../../../store/reducers/Checkout/CheckoutSlice';
import {motion} from "framer-motion";
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
        <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.8}}>
            <form onSubmit={handleSubmit(submit)} className='checkout-login-form'>
                <div className="checkout-login-form-title">
                    <p className='nvidia-2xl-bold'>Account Form</p>
                </div>
                <div className='checkout-login-form-input'>
                    <label htmlFor="firstName" className='nvidia-xl-bold'>First Name</label>
                    <input type="text"
                           id='firstName' {...register('firstName', {required: 'Please, enter your first name'})}/>
                    {errors.firstName && (
                        <div className='checkout-login-form-error'>{errors.firstName.message}</div>
                    )}
                </div>
                <div className='checkout-login-form-input'>
                    <label htmlFor="lastName" className='nvidia-xl-bold'>Last Name</label>
                    <input type="text"
                           id='lastName' {...register('lastName', {required: 'Please, enter your last name'})}/>
                    {errors.lastName && (
                        <div className='checkout-login-form-error'>{errors.lastName.message}</div>
                    )}
                </div>
                <div className='checkout-login-form-input'>
                    <label htmlFor="phoneNumber" className='nvidia-xl-bold'>Phone Number</label>
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
                    <label htmlFor="email" className='nvidia-xl-bold'>Email</label>
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
                    <button type='submit' className='nvidia-button'>Confirm!</button>
                </div>
            </form>
        </motion.div>
    );
};

export default CheckoutForm;