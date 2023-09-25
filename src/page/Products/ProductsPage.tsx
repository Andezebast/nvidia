import React from 'react';
import './ProductsPage.scss';
import ProductFilter from '../../component/ProductPage/ProductFilter';
import ProductListing from '../../component/ProductPage/ProductListing';
/*---------------------------------------------*/
const ProductsPage = () => {

    return (
        <div className='product-page'>
            <ProductFilter />
            <ProductListing />
        </div>
    );
};

export default ProductsPage;