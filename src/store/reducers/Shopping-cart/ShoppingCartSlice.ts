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
        },
        RemoveFromShoppingCart(state, action: PayloadAction<IProduct>) {
            let index = state.shoppingCartProducts.findIndex(product => product.id === action.payload.id)
            console.log(index)
            if (index > -1) {
                state.shoppingCartProducts.splice(index, 1);
            }
        },
        quantityShoppingCart(state, action) {
            let id = action.payload.id;
            let actions = action.payload.action
            switch (actions) {
                case 'minus':
                    state.shoppingCartProducts.forEach(product => {
                        if(product.id === id && product.quantity >= 2){
                            product.quantity--;
                            product.finalPrice = product.quantity * product.currentPrice;
                        }
                    })
                    break;
                case 'plus':
                    state.shoppingCartProducts.forEach(product => {
                        if(product.id === id){
                            product.quantity++;
                            product.finalPrice = product.quantity * product.currentPrice;
                        }
                    })
                    break;
            }
        }
    }
})

export default ShoppingCartSlice.reducer;