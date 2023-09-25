import {IProduct} from "../../../models/IProduct";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductState {
    product: IProduct[],
    isLoading: boolean,
    error: string,
}

const initialState: ProductState = {
    product: [],
    isLoading: false,
    error: '',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productsFetching(state){
            state.isLoading = true;
        },
        productsFetchingSuccess(state, action: PayloadAction<IProduct[]>){
            state.isLoading = false;
            state.error = '';
            state.product = action.payload;
        },
        productsFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
    },
    // extraReducers: {
    //     [fetchProducts.pending.type]: (state) =>{
    //         state.isLoading = true;
    //
    //     },
    //     [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) =>{
    //         state.isLoading = false;
    //         state.error = '';
    //         state.products = action.payload;
    //     },
    //     [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) =>{
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    // }
})

export default productSlice.reducer;