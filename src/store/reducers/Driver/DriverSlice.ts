import {IDriver} from '../../../models/IDriver';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface DriverState {
    drivers: IDriver[],
    isLoading: boolean,
    error: string,
}

const initialState: DriverState = {
    drivers: [],
    isLoading: false,
    error: '',
}

export const driverSlice = createSlice({
    name: 'driver',
    initialState,
    reducers: {
        driverFetching(state){
            state.isLoading = true;
        },
        productsFetchingSuccess(state, action: PayloadAction<IDriver[]>){
            state.isLoading = false;
            state.error = '';
            state.drivers = action.payload;
        },
        driverFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default driverSlice.reducer;