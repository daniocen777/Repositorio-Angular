import { ActionReducerMap, Action } from '@ngrx/store';
import * as fromUI from './shared';
import * as fromAuth from './auth/auth.reducer';
import * as fromIngresoEgreso from './ingreso-egreso/ingreso-egreso.reducer';

export interface AppState {
  ui: fromUI.State;
  auth: fromAuth.AuthState;
  ingresoEgreso: fromIngresoEgreso.IngresoEgresoState;
}

export const appReducers: ActionReducerMap<AppState, any> = {
  ui: fromUI.uiReducer,
  auth: fromAuth.autReducer,
  ingresoEgreso: fromIngresoEgreso.reducer,
};
