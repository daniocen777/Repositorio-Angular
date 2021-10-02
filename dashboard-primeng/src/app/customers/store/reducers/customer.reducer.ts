import { Action, createReducer, on } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import * as fronCustomerActions from '../actions/customer.actions';

export interface CustomerState {
    data: Customer[];
    loaded: boolean;
    loading: boolean;
    error: string;
};

export const initialState: CustomerState = {
    data: [],
    loaded: false,
    loading: false,
    error: ''
};

export function reducer(state: CustomerState = initialState, action: fronCustomerActions.CustomerActions): CustomerState {
    switch (action.type) {
        case fronCustomerActions.LOAD_CUSTOMERS: {
            return {
                ...state,
                loading: true
            };
        }
        case fronCustomerActions.LOAD_CUSTOMERS_SUCCESS: {
            const customers: Customer[] = action.payload;
            return {
                ...state,
                loading: false,
                loaded: false,
                data: customers
            };
        }
        case fronCustomerActions.LOAD_CUSTOMERS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

/* Selectores => para acceder a los datos de manera directa */
// Acceso directo a la propiedad data: Customer[]
export const getCustomers = (state: CustomerState) => state.data;
// Acceso directo a la propiedad loaded: boolean
export const getCustomersLoaded = (state: CustomerState) => state.loaded;
// Acceso directo a la propiedad loading: boolean
export const getCustomersLoading = (state: CustomerState) => state.loading;
// Acceso directo a la propiedad error: string
export const getCustomersError = (state: CustomerState) => state.error;