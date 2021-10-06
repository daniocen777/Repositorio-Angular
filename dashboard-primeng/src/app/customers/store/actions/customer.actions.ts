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

export type CustomerActions = LoadCustomers | LoadCustomersSuccess |
    LoadCustomersFail | UpdateCustomer | UpdateCustomerSuccess | UpdateCustomerFail;