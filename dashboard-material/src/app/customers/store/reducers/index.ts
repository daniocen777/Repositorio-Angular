import { ActionReducerMap } from '@ngrx/store';

import * as fromCustomerReducer from './customer.reducer';

export interface CustomerModuleState {
    customers: fromCustomerReducer.CustomerState
}

export const reducers: ActionReducerMap<CustomerModuleState, any> = {
    customers: fromCustomerReducer.reducer
}