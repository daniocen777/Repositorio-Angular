import { Action } from "@ngrx/store";
import { Customer } from "../../models/customer.model";

export const LOAD_CUSTOMERS = "[Customer] LOAD_CUSTOMERS"

export const LOAD_CUSTOMERS_SUCCESS = "LOAD_CUSTOMERS_SUCCESS"

export const LOAD_CUSTOMERS_FAIL = "LOAD_CUSTOMERS_FAIL"

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

export type CustomerActions = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail;
