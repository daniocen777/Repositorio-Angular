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
export function reducer(state: CustomerState = initialState, action: fromCustomerActions.CustomerActions) {
    switch (action.type) {
        case fromCustomerActions.LOAD_CUSTOMERS: {
            console.log('ESTADO ANTES DE IR A CUSTOMERS LOAD_CUSTOMERS', state);
            return {
                ...state, // copia del estado anterior
                loading: true
            };
        }
        default: {
            console.log('ESTADO ANTES DE IR A CUSTOMERS DEFAULT', state);
            return state;
        }
    }
}