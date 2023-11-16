import React, {FC, useEffect, useState} from 'react';
import './ProductFilter.scss';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import {IProduct} from "../../../models/IProduct";
import {motion} from "framer-motion";
/*--------------------------------------------*/
interface IProps {
    propsProducts: IProduct[] | any[],
    setFilterPropsProducts: Function,
    setEmptyPropsProducts: Function
}

/*--------------------------------------------*/
const ProductFilter: FC<IProps> = ({propsProducts, setFilterPropsProducts, setEmptyPropsProducts}) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [boolMass, setBoolMass] = useState<string[]>([]);
    const [categoryMass, setCategoryMass] = useState<string[]>([]);
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
        if (categoryMass.indexOf(event.target.name) >= 0) {
            setCategoryMass(categoryMass.filter(el => el !== event.target.name))
        } else {
            setCategoryMass([...categoryMass, event.target.name])
        }
    }
    useEffect(() => {
        if (propsProducts && propsProducts.length) {
            let currentFilterProducts = propsProducts.filter(product => {
                let search = inputSearchValue.length ? product.name.toLowerCase().includes(inputSearchValue.toLowerCase()) : true;
                let bool = boolMass.length ? !boolMass.some(bool => product[bool] === false) : true;
                let category = categoryMass.length ? !categoryMass.some(category => Number(category) !== product.categories) : true;
                return search && bool && category && product
            });
            const flagEmpty = currentFilterProducts.length <= 1;
            setEmptyPropsProducts(flagEmpty)
            setFilterPropsProducts(currentFilterProducts);
        }
    }, [inputSearchValue, boolMass, categoryMass])
    return (
        <motion.div className='product-filter'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3}}>
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
        </motion.div>
    );
};

export default ProductFilter;