import React, {FC, useEffect} from 'react';
import './ProductListing.scss';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchProducts} from "../../../store/reducers/Products/ProductsAction";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {IProduct} from "../../../models/IProduct";
import {ShoppingCartSlice} from '../../../store/reducers/Shopping-cart/ShoppingCartSlice';
/*--------------------------------------------*/
import Badge from '../../../svg/Badge';
import Loading from '../../../svg/Loading';
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
    const shoppingCartProducts = useAppSelector(state => state.shoppingCartProductReducer.shoppingCartProducts);
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
    if (error) {
        return (
            <div className='product-listing-error'><p className='nvidia-2xl-bold' style={{textAlign: 'center'}}>{error}</p></div>
        )
    }
    if(emptyPropsProducts){
        return(
            <div className='product-listing-empty nvidia-2xl-bold' style={{textAlign: 'center'}}>There are no products matching this filter!</div>
        )
    }
    /*--------------------------------------------*/
    const handleEventShoppingCart = (product: IProduct) => {
        dispatch(ShoppingCartSlice.actions.AddToShoppingCart(product));
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
                                    {product.isNew && (
                                        <div className='badge'>
                                            <Badge />
                                        </div>
                                    )}
                                </div>
                                <div className='product-content'>
                                    <div className='product-item-name'>
                                        <p className='nvidia-2xl-bold'>{product.name}</p>
                                    </div>
                                    <div className='product-item-description'>
                                        <p className='nvidia-xl'>{product.description}</p>
                                    </div>
                                    <div className='product-item-price'>
                                        {product.salePrice !== ''
                                            ? <p className='nvidia-xl-bold'><span className='nvidia-p'>{product.price}</span>{product.salePrice}</p>
                                            : <p className='nvidia-xl-bold'>{product.price}</p>}
                                    </div>
                                    {product.isInStock
                                        ? (
                                            <div className="product-item-buttons">
                                                <NavLink className="nvidia-button" to={`/product/${product.id}`}>Detail</NavLink>
                                                {shoppingCartProducts.length && shoppingCartProducts.findIndex(shoppingProduct => shoppingProduct.id === product.id) > -1
                                                ? (<button className="shopping-cart disabled" disabled>Already in the cart</button>)
                                                : (<button className="shopping-cart" onClick={() => handleEventShoppingCart(product)}>Add to Shopping Cart</button>)
                                                }
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
                                    {product.isNew && (
                                        <div className='badge'>
                                            <Badge />
                                        </div>
                                    )}
                                </div>
                                <div className='product-content'>
                                    <div className='product-item-name'>
                                        <p className='nvidia-2xl-bold'>{product.name}</p>
                                    </div>
                                    <div className='product-item-description'>
                                        <p className='nvidia-xl'>{product.description}</p>
                                    </div>
                                    <div className='product-item-price'>
                                        {product.salePrice !== ''
                                            ? <p className='nvidia-xl-bold'><span className='nvidia-p'>{product.price}</span>{product.salePrice}</p>
                                            : <p className='nvidia-xl-bold'>{product.price}</p>}
                                    </div>
                                    {product.isInStock
                                        ? (
                                            <div className="product-item-buttons">
                                                <NavLink className="nvidia-button" to={`/product/${product.id}`}>Detail</NavLink>
                                                {shoppingCartProducts.length && shoppingCartProducts.findIndex(shoppingProduct => shoppingProduct.id === product.id) > -1
                                                    ? (<button className="shopping-cart disabled" disabled>Already in Shopping Cart</button>)
                                                    : (<button className="shopping-cart" onClick={() => handleEventShoppingCart(product)}>Add to Shopping Cart</button>)
                                                }
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