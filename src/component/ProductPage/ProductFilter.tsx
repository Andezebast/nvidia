import React, {FC, useState} from 'react';
import './ProductFilter.scss';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
/*--------------------------------------------*/
const ProductFilter: FC = () => {
    const [inputValue, setInputValue] = useState('');
    /*---------------------------*/
    const handleEventSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    const handleEventBool = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target)
    }
    const handleEventCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target)
    }
    return (
        <div className='product-filter'>
            <div className="product-filter-title">
                Filter
            </div>
            <div className="product-filter-content">
                <div className="filter-content-search">
                    <TextField label="Search..." variant="filled" color='success' onChange={handleEventSearch} value={inputValue}/>
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
                    <div className="filter-content-item">
                        <Switch name='price' onChange={handleEventBool}/>
                        <p>Price</p>
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