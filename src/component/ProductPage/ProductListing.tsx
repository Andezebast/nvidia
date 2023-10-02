import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProducts} from "../../store/reducers/Products/ProductsAction";
import './ProductListing.scss';
import {NavLink} from "react-router-dom";
import nvidia from './img/nvidia.svg';
import {motion} from "framer-motion";
import {IProduct} from "../../models/IProduct";
/*--------------------------------------------*/
interface IProps {
    setPropsProducts: Function,
    filterPropsProducts: IProduct[] | [],
    emptyPropsProducts: boolean
}
/*--------------------------------------------*/
const ProductListing: FC<IProps> = ({setPropsProducts, filterPropsProducts, emptyPropsProducts}) => {
    const dispatch = useAppDispatch();
    const {products, isLoading, error} = useAppSelector(state => state.productsReducer)
    /*--------------------------------------------*/
    useEffect(() => {
        if (products) {
            setPropsProducts(products)
        }
    }, [products])
    /*--------------------------------------------*/
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    /*--------------------------------------------*/
    const productListing = {
        hidden: {opacity: 1, scale: 0},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    const productItem = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1
        }
    };
    /*--------------------------------------------*/
    if (isLoading) {
        return (
            <div className='product-listing-loading'>
                <p>isLoading...</p>
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    }}>
                    <img src={nvidia} alt="loading image"/>
                </motion.div>
            </div>
        )
    }
    if (error) {
        return (
            <div className='product-listing-error'>{error}</div>
        )
    }
    console.log(emptyPropsProducts)
    if(emptyPropsProducts){
        return(
            <div className='product-listing-empty'>There are no products matching this filter!</div>
        )
    }
    /*--------------------------------------------*/
    return (
        <div className='product-listing'>
            {filterPropsProducts.length > 0
                ? (
                    <motion.ul variants={productListing} initial="hidden" animate="visible" className='product-listing-items'>
                        {filterPropsProducts.map((product, index) => (
                            <motion.li variants={productItem} key={index} className='product-item'>
                                <div className='product-item-image'>
                                    <img src={product.photo} alt="product-image"/>
                                </div>
                                <div className='product-content'>
                                    <div className='product-item-name'>
                                        <p>{product.name}</p>
                                    </div>
                                    <div className='product-item-description'>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className='product-item-price'>
                                        {product.salePrice !== ''
                                            ? <p><span>{product.price}</span>{product.salePrice}</p>
                                            : <p>{product.price}</p>}
                                    </div>
                                    {product.isInStock
                                        ? (
                                            <div className="product-item-buttons">
                                                <NavLink className="button-detail"
                                                         to={`/product/${product.id}`}>Detail</NavLink>
                                                <button className="shopping-cart">Add to Shopping Cart</button>
                                            </div>
                                        )
                                        : (
                                            <div className='button-stock'>
                                                Not in Stock
                                            </div>
                                        )
                                    }
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                )
                : (
                    <motion.ul variants={productListing} initial="hidden" animate="visible" className='product-listing-items'>
                        {products !== null && products.map((product, index) => (
                            <motion.li variants={productItem} key={index} className='product-item'>
                                <div className='product-item-image'>
                                    <img src={product.photo} alt="product-image"/>
                                </div>
                                <div className='product-content'>
                                    <div className='product-item-name'>
                                        <p>{product.name}</p>
                                    </div>
                                    <div className='product-item-description'>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className='product-item-price'>
                                        {product.salePrice !== ''
                                            ? <p><span>{product.price}</span>{product.salePrice}</p>
                                            : <p>{product.price}</p>}
                                    </div>
                                    {product.isInStock
                                        ? (
                                            <div className="product-item-buttons">
                                                <NavLink className="button-detail"
                                                         to={`/product/${product.id}`}>Detail</NavLink>
                                                <button className="shopping-cart">Add to Shopping Cart</button>
                                            </div>
                                        )
                                        : (
                                            <div className='button-stock'>
                                                Not in Stock
                                            </div>
                                        )
                                    }
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                )
            }


        </div>
    );
};

export default ProductListing;