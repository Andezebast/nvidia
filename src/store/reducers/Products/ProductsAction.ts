import {AppDispatch} from "../../store";
import axios from "axios";
import {IProduct} from "../../../models/IProduct";
import {productsSlice} from './ProductsSlice';

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

export const fetchProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productsSlice.actions.productsFetching())
        const response = await axios.get<IProduct[]>('https://649952ff79fbe9bcf83f012e.mockapi.io/nvidia-products')
        setTimeout(()=>{
            dispatch(productsSlice.actions.productsFetchingSuccess(response.data));
        }, 1000)
    } catch (error) {
        dispatch(productsSlice.actions.productsFetchingError(getErrorMessage(error)));
    }
}


//import {createAsyncThunk} from "@reduxjs/toolkit";
// export const fetchProducts = createAsyncThunk(
//     'product/fetchAll',
//     async (_, thunkApi) =>{
//         try {
//             const response = await axios.get<IProduct[]>('https://649952ff79fbe9bcf83f012e.mockapi.io/nvidia-products')
//             return response.data
//         } catch (e) {
//             return thunkApi.rejectWithValue('Ошибка загрузки товара')
//         }
//     }
// )