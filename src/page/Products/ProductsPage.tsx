import React, {FC, useState} from 'react';
import './ProductsPage.scss';
import ProductFilter from '../../component/Product/ProductFilter/ProductFilter';
import ProductListing from '../../component/Product/ProductListing/ProductListing';
import {IProduct} from "../../models/IProduct";
/*---------------------------------------------*/
type IPropsProducts = IProduct[] | [];
/*---------------------------------------------*/
const ProductsPage: FC = () => {
    const [propsProducts, setPropsProducts] = useState<IPropsProducts>([]);
    const [filterPropsProducts, setFilterPropsProducts] = useState<IPropsProducts>([]);
    const [emptyPropsProducts, setEmptyPropsProducts] = useState<boolean | any>();
    return (
        <div className='product-page'>
            <ProductFilter propsProducts={propsProducts} setFilterPropsProducts={setFilterPropsProducts} setEmptyPropsProducts={setEmptyPropsProducts}/>
            <ProductListing setPropsProducts={setPropsProducts} filterPropsProducts={filterPropsProducts} emptyPropsProducts={emptyPropsProducts}/>
        </div>
    );
};

export default ProductsPage;