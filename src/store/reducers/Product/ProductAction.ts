import {AppDispatch} from "../../store";
import axios from "axios";
import {IProduct} from "../../../models/IProduct";
import {productSlice} from './ProductSlice';

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

export const fetchProduct = (id: string | undefined) => async (dispatch: AppDispatch) => {
    try{
        dispatch(productSlice.actions.productsFetching())
        const response = await axios.get<IProduct[]>(`https://649952ff79fbe9bcf83f012e.mockapi.io/nvidia-products/${id}`)
        const mass: any[] = [];
        mass.push(response.data)
        setTimeout(()=>{
            dispatch(productSlice.actions.productsFetchingSuccess(mass));
        }, 1000)
    } catch (error) {
        dispatch(productSlice.actions.productsFetchingError(getErrorMessage(error)));
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