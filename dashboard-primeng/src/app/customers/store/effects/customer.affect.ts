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

    /* Effect para listar clientes */
    loadCutomers$: Observable<Action> = createEffect(() => this.action$.pipe(
        // ofType => Escuchar el action
        ofType(fromCustomersActions.LOAD_CUSTOMERS),
        // Interactiar con el api
        switchMap(() => this._customerService.getCustomersJavaApi().pipe(
            map(response => {
                return new fromCustomersActions.LoadCustomersSuccess(response);
            },
                catchError(error => of(new fromCustomersActions.LoadCustomersFail(`***** ERROR ***** => ${error}`)))
            )
        )
        )
    ));

    /* Effect para actualizar clientes */
    updateCustomer: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(fromCustomersActions.UPDATE_CUSTOMER),
        // Optener los datos del payload
        map((action: fromCustomersActions.UpdateCustomer) => action.payload),
        // Ejecutar el servicio
        switchMap((payload) => this._customerService.update(payload).pipe(
            map(response => new fromCustomersActions.UpdateCustomerSuccess(response)
            ),
            catchError(error => of(new fromCustomersActions.UpdateCustomerFail(error)))
        )
        )));

    /* Effect para Agregar nuevo clientes */
    addCustomer: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(fromCustomersActions.ADD_CUSTOMER),
        // Optener los datos del payload
        map((action: fromCustomersActions.AddCustomer) => action.payload),
        // Ejecutar el servicio
        switchMap((payload) => this._customerService.addCustomer(payload).pipe(
            map(response => new fromCustomersActions.AddCustomerSuccess(response)
            ),
            catchError(error => of(new fromCustomersActions.AddCustomerFail(error)))
        )
        )));
    /* Effect para Eliminar nuevo clientes */
    deleteCustomer: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(fromCustomersActions.DELETE_CUSTOMER),
        // Optener los datos del payload
        map((action: fromCustomersActions.DeleteCustomer) => action.payload),
        // Ejecutar el servicio
        switchMap((payload: number) => this._customerService.deleteCustomer(payload).pipe(
            map(response => new fromCustomersActions.DeleteCustomerSuccess(response)
            ),
            catchError(error => of(new fromCustomersActions.DeleteCustomerFail(error)))
        )
        )));
}