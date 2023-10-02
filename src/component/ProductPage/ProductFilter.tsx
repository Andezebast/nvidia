import React, {FC, useEffect, useState} from 'react';
import './ProductFilter.scss';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import {IProduct} from "../../models/IProduct";
/*--------------------------------------------*/
interface IProps {
    propsProducts: IProduct[] | any[],
    setFilterPropsProducts: Function,
    setEmptyPropsProducts: Function
}
/*--------------------------------------------*/
const ProductFilter: FC<IProps> = ({ propsProducts, setFilterPropsProducts, setEmptyPropsProducts}) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [boolMass, setBoolMass] = useState<string[]>([]);
    const [emptyProducts, setEmptyProducts] = useState<boolean>();
    /*---------------------------*/
    const handleEventSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputSearchValue(event.target.value)
    }
    const handleEventBool = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (boolMass.indexOf(event.target.name) >= 0) {
            setBoolMass(boolMass.filter(el => el !== event.target.name))
        } else {
            setBoolMass([...boolMass, event.target.name])
        }
    }
    const handleEventCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target)
    }
    useEffect(()=>{
        if(propsProducts){
            let currentFilterProducts = propsProducts.filter(product => {
                let bool = boolMass.length ? !boolMass.some(bool => product[bool] === false) : true;
                let search = inputSearchValue.length ? product.name.toLowerCase().includes(inputSearchValue.toLowerCase()) : true;
                return search && bool && product
            });
            if(currentFilterProducts.length >= 1){
                setEmptyProducts(false)
            } else{
                setEmptyProducts(true)
            }
            console.log(currentFilterProducts, 'filterMass');
            console.log(currentFilterProducts.length, 'filterMass length');
            console.log(emptyProducts, 'boolean Filter')
            setEmptyPropsProducts(emptyProducts);
            setFilterPropsProducts(currentFilterProducts);
        }
    },[inputSearchValue, boolMass])

    return (
        <div className='product-filter'>
            <div className="product-filter-title">
                Filter
            </div>
            <div className="product-filter-content">
                <div className="filter-content-search">
                    <TextField label="Search..." variant="filled" color='success' onChange={handleEventSearch} value={inputSearchValue}/>
                </div>
                <div className="filter-content-items">
                    <div className="filter-content-item">
                        <Switch name='isNew' onChange={handleEventBool}/>
                        <p>New</p>
                    </div>
                    <div className="filter-content-item">
                        <Switch name='isSale' onChange={handleEventBool}/>
                        <p>Sale</p>
                    </div>
                </div>
                <div className="filter-content-category">
                    <div className="category-item">
                        <Checkbox name='40' onChange={handleEventCategory}/>
                        <p>Nvidia RTX 40</p>
                    </div>
                    <div className="category-item">
                        <Checkbox name='30' onChange={handleEventCategory}/>
                        <p>Nvidia RTX 30</p>
                    </div>
                    <div className="category-item">
                        <Checkbox name='20' onChange={handleEventCategory}/>
                        <p>Nvidia RTX 20</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;