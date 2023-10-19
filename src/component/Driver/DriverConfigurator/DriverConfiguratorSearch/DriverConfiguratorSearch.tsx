import React, {FC, useState} from 'react';
import './DriverConfiguratorSearch.scss';
import {SubmitHandler, useForm} from "react-hook-form";
/*-----------------------------------------*/
type Configurator = {
    example: string,
    exampleRequired: string,
};
const DriverConfiguratorSearch: FC = () => {
    const [geForce, setGeForce] = useState<boolean>(true);
    const [rtx20, setRtx20] = useState<boolean>(true);
    const [rtx30, setRtx30] = useState<boolean>(false);
    const [rtx40, setRtx40] = useState<boolean>(false);
    /*-------------------------------*/
    const {handleSubmit} = useForm<Configurator>();
    const onSubmit: SubmitHandler<Configurator> = (data) => {
        console.log(data);
    }
    /*-------------------------------*/
    const handleChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'GeForce') {
            setGeForce(true)
        } else {
            setGeForce(false)
        }
    }
    const handleChangeRTXEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        switch (event.target.value) {
            case 'GeForce RTX 20 Series':
                setRtx20(true)
                setRtx30(false)
                setRtx40(false)
                break;
            case 'GeForce RTX 30 Series':
                setRtx20(false)
                setRtx30(true)
                setRtx40(false)
                break;
            case 'GeForce RTX 40 Series':
                setRtx20(false)
                setRtx30(false)
                setRtx40(true)
                break;
        }
    }
    /*-------------------------------*/
    return (
        <div className="driver-page-configurator-search">
            <div className="driver-configurator-search-title">
                <p>Driver Search</p>
            </div>
            <div className="driver-configurator-search-subtitle">
                <p>Find all GeForce drivers by providing information about your system.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="driver-configurator-search-form">
                <div className="search-form-selector">
                    <p>Product: </p>
                    <select name="product" id="product" onChange={handleChangeEvent}>
                        <option value="GeForce">GeForce</option>
                        <option value="TITAN">TITAN</option>
                    </select>
                </div>
                <div className="search-form-selector">
                    <p>Series: </p>
                    {geForce
                        ? (
                            <select name="series" id="series" onChange={handleChangeRTXEvent}>
                                <option value="GeForce RTX 20 Series">GeForce RTX 20 Series</option>
                                <option value="GeForce RTX 30 Series">GeForce RTX 30 Series</option>
                                <option value="GeForce RTX 40 Series">GeForce RTX 40 Series</option>
                            </select>
                        )
                        : (
                            <select name="series" id="series">
                                <option value="NVIDIA TITAN Series">NVIDIA TITAN Series</option>
                            </select>
                        )
                    }
                </div>
                <div className="search-form-selector">
                    <p>Model: </p>
                    {geForce
                        ? (
                            <>
                                {rtx20 && (
                                    <select name="model" id="model">
                                        <option value="NVIDIA GeForce RTX 2080">NVIDIA GeForce RTX 2080</option>
                                        <option value="NVIDIA GeForce RTX 2070">NVIDIA GeForce RTX 2070</option>
                                        <option value="NVIDIA GeForce RTX 2060">NVIDIA GeForce RTX 2060</option>
                                    </select>
                                )}
                                {rtx30 && (
                                    <select name="model" id="model">
                                        <option value="NVIDIA GeForce RTX 3090">NVIDIA GeForce RTX 3090</option>
                                        <option value="NVIDIA GeForce RTX 3080">NVIDIA GeForce RTX 3080</option>
                                        <option value="NVIDIA GeForce RTX 3070">NVIDIA GeForce RTX 3070</option>
                                        <option value="NVIDIA GeForce RTX 3060">NVIDIA GeForce RTX 3060</option>
                                    </select>
                                )}
                                {rtx40 && (
                                    <select name="model" id="model">
                                        <option value="NVIDIA GeForce RTX 4090">NVIDIA GeForce RTX 4090</option>
                                        <option value="NVIDIA GeForce RTX 4080">NVIDIA GeForce RTX 4080</option>
                                        <option value="NVIDIA GeForce RTX 4070">NVIDIA GeForce RTX 4070</option>
                                        <option value="NVIDIA GeForce RTX 4060">NVIDIA GeForce RTX 4060</option>
                                    </select>
                                )}
                            </>)
                        : (
                            <select name="model" id="model">
                                <option value="NVIDIA TITAN V">NVIDIA TITAN V</option>
                                <option value="NVIDIA TITAN Xp">NVIDIA TITAN Xp</option>
                                <option value="NVIDIA TITAN X">NVIDIA TITAN X</option>
                                <option value="GeForce GTX TITAN">GeForce GTX TITAN</option>
                                <option value="GeForce GTX TITAN Black">GeForce GTX TITAN Black</option>
                                <option value="GeForce GTX TITAN Z">GeForce GTX TITAN Z</option>
                            </select>
                        )
                    }
                </div>
                <button type="submit">To Start Searching</button>
            </form>
        </div>
    );
};

export default DriverConfiguratorSearch;