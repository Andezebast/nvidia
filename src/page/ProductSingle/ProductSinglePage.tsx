import React, {useEffect} from 'react';
import './ProductSinglePage.scss';
import Loading from "../../svg/Loading";
import {motion} from "framer-motion";
/*--------------------------------------------*/
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProduct} from "../../store/reducers/Product/ProductAction";
import {IProduct} from "../../models/IProduct";
import {ShoppingCartSlice} from "../../store/reducers/Shopping-cart/ShoppingCartSlice";
/*--------------------------------------------*/
const ProductSinglePage = () => {
    const pageId = useParams();
    const id = pageId.id;
    const dispatch = useAppDispatch();
    const {product, isLoading, error} = useAppSelector(state => state.productReducer);
    const shoppingCartProducts = useAppSelector(state => state.shoppingCartProductReducer.shoppingCartProducts);
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [])
    /*--------------------------------------------*/
    const handleEventShoppingCart = (product: IProduct) => {
        dispatch(ShoppingCartSlice.actions.AddToShoppingCart(product));
    }
    /*--------------------------------------------*/
    if (isLoading) {
        return (
            <div className='product-single-loading container'>
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    }} style={{maxWidth: '150px'}}>
                    <Loading />
                </motion.div>
            </div>
        )
    }
    /*--------------------------------------------*/
    if (error) {
        return (
            <div className='product-single-error container'><p className='nvidia-2xl-bold'>{error}</p></div>
        )
    }
    /*--------------------------------------------*/
    return (
        <motion.div className='product-single-page container'
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8}}>
            {product.map((item, index) => (
                <div key={index} className='product-single-item'>
                    <div className='product-single-item-image'>
                        <img src={item.photo} alt="image"/>
                    </div>
                    <div className='product-single-item-name'>
                        <p className='nvidia-4xl'>{item.name}</p>
                    </div>
                    <div className='product-single-item-description'>
                        <p className='nvidia-2xl-normal'>{item.description}</p>
                    </div>
                    <div className='product-single-item-price'>
                        {item.salePrice !== ''
                            ? <p className='nvidia-2xl-bold'><span className='nvidia-p'>{item.price}</span>{item.salePrice}</p>
                            : <p className='nvidia-2xl-bold'>{item.price}</p>}
                    </div>
                    <div className="product-single-item-shopping-cart">
                        {shoppingCartProducts.length && shoppingCartProducts.findIndex(shoppingProduct => shoppingProduct.id === item.id) > -1
                            ? (<button className="shopping-cart disabled" disabled>Already in the cart</button>)
                            : (<button className="shopping-cart" onClick={() => handleEventShoppingCart(item)}>Add to Shopping Cart</button>)
                        }
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default ProductSinglePage;