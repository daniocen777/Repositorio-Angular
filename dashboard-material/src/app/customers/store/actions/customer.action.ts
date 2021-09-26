import { Action } from "@ngrx/store";

export const LOAD_CUSTOMERS = "[Customer] LOAD_CUSTOMERS"

export class LoadCustomers implements Action {
    readonly type = LOAD_CUSTOMERS;
}

export type CustomerActions = LoadCustomers;
