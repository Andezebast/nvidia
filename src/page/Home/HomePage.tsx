import React, {FC} from 'react';
import HomeSlider from "../../component/Home/HomeSlider/HomeSlider";
import HomeInfoProduct from "../../component/Home/HomeInfo/HomeInfoProduct";
import HomeInfoDriver from "../../component/Home/HomeInfo/HomeInfoDriver";
/*-----------------------------*/
const HomePage: FC = () => {

    return (
        <div className='home-page'>
            <HomeSlider />
            <HomeInfoProduct />
            <HomeInfoDriver />
        </div>
    );
};

export default HomePage;