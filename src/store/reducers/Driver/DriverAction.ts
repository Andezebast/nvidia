import {AppDispatch} from "../../store";
import axios from 'axios';
import {IDriver} from '../../../models/IDriver';
import {driverSlice} from './DriverSlice';

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

interface IFormMass{
    product: string,
    series: string,
    model: string,
    OS: string
}

export const fetchDriver = (formMass: IFormMass) => async (dispatch: AppDispatch) => {
    try{
        dispatch(driverSlice.actions.driverFetching())
        const response = await axios.get<IDriver[]>('https://649952ff79fbe9bcf83f012e.mockapi.io/nvidia-driver')
        const filterDriverMass: IDriver[] = [];
        response.data.forEach(driver => {
            if(formMass.model === driver.model && formMass.series === driver.series && formMass.product === driver.productType && formMass.OS === driver.OS){
                filterDriverMass.push(driver)
            }
        })
        setTimeout(()=>{
            dispatch(driverSlice.actions.productsFetchingSuccess(filterDriverMass));
        }, 1500)
    } catch (e) {
        dispatch(driverSlice.actions.driverFetchingError(getErrorMessage(e)))
    }
}