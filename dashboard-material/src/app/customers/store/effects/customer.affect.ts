import { Injectable } from '@angular/core';
import {
    Actions, createEffect
    , ofType
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

// import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CustomerService } from '../../services/customer.service';

import * as fromCustomersActions from '../actions/customer.action';
//import all requried services or any dependencies

@Injectable()
export class CustomerEffects {
    constructor(private action$: Actions, private _customerService: CustomerService) { }


    loadCutomers$: Observable<Action> = createEffect(() => this.action$.pipe(
        // ofType => Escuchar el action
        ofType(fromCustomersActions.LOAD_CUSTOMERS),
        // Interactiar con el api
        switchMap(() => this._customerService.getCustomers().pipe(
            map(response => {
                return new fromCustomersActions.LoadCustomersSuccess(response);
            },
                catchError(error => of(new fromCustomersActions.LoadCustomersFail(error)))
            )
        )
        )
    ));


}