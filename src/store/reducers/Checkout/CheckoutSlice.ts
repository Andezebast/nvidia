import {IProduct} from "../../../models/IProduct";
import {IAccount} from "../../../models/IAccount";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CheckoutState {
    products: IProduct[],
    account: IAccount[],
    quantity: number,
    summary: number,
}

const initialState: CheckoutState = {
    products: [],
    account: [],
    quantity: 1,
    summary: 1,
}

export const CheckoutSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        AddCheckoutAccount(state, action: PayloadAction<IAccount>){
            state.account.push(action.payload)
        },
        AddCheckoutProducts(state, action: PayloadAction<IProduct[]>){
            state.products = action.payload;
        },
        AddCheckoutQuantity(state, action: PayloadAction<number>){
            state.quantity = action.payload
        },
        AddCheckoutSummary(state, action: PayloadAction<number>){
            state.summary = action.payload
        },
    }
})

export default CheckoutSlice.reducer;