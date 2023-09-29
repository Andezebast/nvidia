import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProduct} from "../../store/reducers/Product/ProductAction";
import './ProductSinglePage.scss';
const ProductSinglePage = () => {
    const pageId = useParams();
    const id = pageId.id;
    console.log(id)
    const dispatch = useAppDispatch();
    const {product, isLoading, error} = useAppSelector(state => state.productReducer);
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [])
    return (
        <div className='product-single-page'>
            {isLoading
                ? (<div>...isLoading</div>)
                : (
                    error
                        ? (
                            <div>{error}</div>
                        )
                        : (
                            product.map((item, index) => (
                                <div key={index} className='product-single-item'>
                                    <div className='product-single-item-image'>
                                        <img src={item.photo} alt="image"/>
                                    </div>
                                    <div className='product-single-item-name'>
                                        <p>{item.name}</p>
                                    </div>
                                    <div className='product-single-item-description'>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className='product-single-item-price'>
                                        {item.salePrice !== ''
                                            ? <p><span>{item.price}</span>{item.salePrice}</p>
                                            : <p>{item.price}</p>}
                                    </div>
                                </div>
                            ))
                        )
                )
            }
        </div>
    );
};

export default ProductSinglePage;