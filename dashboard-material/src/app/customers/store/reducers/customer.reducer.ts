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