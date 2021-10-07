import { Action, createReducer, on } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import * as fromCustomerActions from '../actions/customer.actions';

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

export function reducer(state: CustomerState = initialState, action: fromCustomerActions.CustomerActions): CustomerState {
    switch (action.type) {
        case fromCustomerActions.LOAD_CUSTOMERS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromCustomerActions.LOAD_CUSTOMERS_SUCCESS: {
            const customers: Customer[] = action.payload;
            return {
                ...state,
                loading: false,
                loaded: false,
                data: customers
            };
        }
        case fromCustomerActions.LOAD_CUSTOMERS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload
            };
        }
        case fromCustomerActions.UPDATE_CUSTOMER_SUCCESS: {
            let customerForUpdate = state.data.map(customer => {
                if (customer.id === action.payload.id) {
                    return action.payload;
                } else {
                    return customer;
                }
            });

            return {
                ...state,
                data: customerForUpdate,
                loaded: true,
                loading: false
            };
        }
        case fromCustomerActions.UPDATE_CUSTOMER_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }
        case fromCustomerActions.ADD_CUSTOMER_SUCCESS: {
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        }
        case fromCustomerActions.ADD_CUSTOMER_FAIL: {
            return {
                ...state,
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