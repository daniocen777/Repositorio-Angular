import { Injectable } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import * as fromCustomersActions from '../actions/customer.actions';

// import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

//import all requried services or any dependencies

@Injectable()
export class CustomerEffects {
    constructor(private action$: Actions, private _customerService: CustomerService) { 
        console.log('ENTRA CustomerEffects');
    }

    loadCutomers$: Observable<Action> = createEffect(() => this.action$.pipe(
        // ofType => Escuchar el action
        ofType(fromCustomersActions.LOAD_CUSTOMERS),
        // Interactiar con el api
        switchMap(() => this._customerService.getCustomers().pipe(
            map(response => {
                return new fromCustomersActions.LoadCustomersSuccess(response);
            },
                catchError(error => of(new fromCustomersActions.LoadCustomersFail(`***** ERROR ***** => ${error}`)))
            )
        )
        )
    ));


}