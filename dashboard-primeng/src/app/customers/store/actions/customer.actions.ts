import { Action } from "@ngrx/store";
import { Customer } from "../../models/customer.model";

/* Lita */
export const LOAD_CUSTOMERS = "[Customer] LOAD_CUSTOMERS"

export const LOAD_CUSTOMERS_SUCCESS = "[Customer] LOAD_CUSTOMERS_SUCCESS"

export const LOAD_CUSTOMERS_FAIL = "[Customer] LOAD_CUSTOMERS_FAIL"

/* Upadate */
export const UPDATE_CUSTOMER = " [Customer] UPDATE_CUSTOMER"

export const UPDATE_CUSTOMER_SUCCESS = " [Customer] UPDATE_CUSTOMER_SUCCESS"

export const UPDATE_CUSTOMER_FAIL = " [Customer] UPDATE_CUSTOMER_FAIL"

/* Add */
export const ADD_CUSTOMER = " [Customer] ADD_CUSTOMER"

export const ADD_CUSTOMER_SUCCESS = " [Customer] ADD_CUSTOMER_SUCCESS"

export const ADD_CUSTOMER_FAIL = " [Customer] UPDATE_CUSTOMER_FAIL"

/* Delete */
export const DELETE_CUSTOMER = " [Customer] DELETE_CUSTOMER"

export const DELETE_CUSTOMER_SUCCESS = " [Customer] DELETE_CUSTOMER_SUCCESS"

export const DELETE_CUSTOMER_FAIL = " [Customer] DELETE_CUSTOMER_FAIL"

/* Lista */
export class LoadCustomers implements Action {
    readonly type = LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action {
    readonly type = LOAD_CUSTOMERS_SUCCESS;
    constructor(public payload: Customer[]) { }
}

export class LoadCustomersFail implements Action {
    readonly type = LOAD_CUSTOMERS_FAIL;
    constructor(public payload: any) { }
}

/* Update */
export class UpdateCustomer implements Action {
    readonly type = UPDATE_CUSTOMER;
    constructor(public payload: Customer) { }
}

export class UpdateCustomerSuccess implements Action {
    readonly type = UPDATE_CUSTOMER_SUCCESS;
    constructor(public payload: any) { }
}

export class UpdateCustomerFail implements Action {
    readonly type = UPDATE_CUSTOMER_FAIL;
    constructor(public payload: any) { }
}

/* Add */
export class AddCustomer implements Action {
    readonly type = ADD_CUSTOMER;
    constructor(public payload: Customer) { }
}

export class AddCustomerSuccess implements Action {
    readonly type = ADD_CUSTOMER_SUCCESS;
    constructor(public payload: any) { }
}

export class AddCustomerFail implements Action {
    readonly type = ADD_CUSTOMER_FAIL;
    constructor(public payload: any) { }
}

/* Delete */
export class DeleteCustomer implements Action {
    readonly type = DELETE_CUSTOMER;
    constructor(public payload: number) { }
}

export class DeleteCustomerSuccess implements Action {
    readonly type = DELETE_CUSTOMER_SUCCESS;
    constructor(public payload: any) { }
}

export class DeleteCustomerFail implements Action {
    readonly type = DELETE_CUSTOMER_FAIL;
    constructor(public payload: any) { }
}


export type CustomerActions = LoadCustomers | LoadCustomersSuccess |
    LoadCustomersFail | UpdateCustomer | UpdateCustomerSuccess | UpdateCustomerFail |
    AddCustomer | AddCustomerSuccess | AddCustomerFail |
    DeleteCustomer | DeleteCustomerSuccess | DeleteCustomerFail;