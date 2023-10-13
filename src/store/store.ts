import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import productsReducer from '../store/reducers/Products/ProductsSlice';
import productReducer from "../store/reducers/Product/ProductSlice";
import shoppingCartProductReducer from '../store/reducers/Shopping-cart/ShoppingCartSlice';
const rootReducer = combineReducers({
    productsReducer,
    productReducer,
    shoppingCartProductReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];










// import {createStore, applyMiddleware} from "@reduxjs/toolkit";
// import {combineReducers} from "redux";
// import createSagaMiddleware from 'redux-saga';
// import nvidiaSlice from "./reducers/nvidiaSlice";
// import {nvidiaSagas} from "./reducers/nvidiaSlice";
// import {all, fork} from 'redux-saga/effects'
// /*--------------------Reducer--------------------*/
// const rootReducer = combineReducers({
//     nvidiaSlice,
// })
// /*--------------------Reducer--------------------*/
// /*--------------------Saga--------------------*/
// const sagaMiddleware = createSagaMiddleware();
// /*--------------------Saga--------------------*/
// const configureStore = () => {
//     const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
//     sagaMiddleware.run(function* () {
//         yield all([
//             fork(nvidiaSagas),
//         ])
//     });
//     return store;
// }
//
// export default configureStore;