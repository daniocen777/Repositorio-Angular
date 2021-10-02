import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { Customer } from '../../models/customer.model';
import * as fromCustomerReducer from './customer.reducer';

export interface CustomerModuleState {
    customers: fromCustomerReducer.CustomerState
}

export const reducers: ActionReducerMap<CustomerModuleState, any> = {
    customers: fromCustomerReducer.reducer
}

/* Selectores*/
// Para acceder a todo el estado del módulo "customers"
export const getState = (state: CustomerModuleState) => state;
// Para acceder al state "customers"
export const getCustomersState = createFeatureSelector<fromCustomerReducer.CustomerState>('customers');
// Para acceder a la propiedad "data" del state "customers" (selector que esta en customer.reducer)
export const getCustomers = createSelector(getCustomersState, fromCustomerReducer.getCustomers);
// Para seleccionar un cliente por ID
export const getCustomerById = (id: number) => createSelector(getCustomers, (customers: Customer[]) => {
    if (customers) {
        var customerFound = customers.find(customer => customer.id === id);
        return customerFound || {};
    } else {
        return {};
    }
})