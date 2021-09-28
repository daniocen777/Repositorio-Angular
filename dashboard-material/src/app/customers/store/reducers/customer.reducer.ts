import { Customer } from '../../models/customer.model';
import * as fromCustomerActions from '../actions/customer.action';

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

/* const featureReducer = createReducer(
    initialState,
    on(aliasaction, state => ({ ...state, prop: newValue })),
); */
export function reducer(state: CustomerState = initialState, action: fromCustomerActions.CustomerActions): CustomerState {
    switch (action.type) {
        case fromCustomerActions.LOAD_CUSTOMERS: {
            return {
                ...state, // copia del estado anterior
                loading: true
            };
        }
        case fromCustomerActions.LOAD_CUSTOMERS_SUCCESS: {
            const customers: Customer[] = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data: customers
            };
        }
        case fromCustomerActions.LOAD_CUSTOMERS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        }
        default: {
            console.log('ESTADO ANTES DE IR A CUSTOMERS DEFAULT', state);
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