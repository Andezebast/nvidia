import {IProduct} from "../../../models/IProduct";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductsState {
    shoppingCartProducts: IProduct[],
}

const initialState: ProductsState = {
    shoppingCartProducts: [],
}

export const ShoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        AddToShoppingCart(state, action: PayloadAction<IProduct>) {
            state.shoppingCartProducts.push(action.payload);
        }
    }
})

export default ShoppingCartSlice.reducer;