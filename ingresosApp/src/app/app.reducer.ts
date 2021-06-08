import { ActionReducerMap, Action } from '@ngrx/store';
import * as fromUI from './shared';
import * as fromAuth from './auth/auth.reducer';

export interface AppState {
  ui: fromUI.State;
  auth: fromAuth.AuthState;
}

export const appReducers: ActionReducerMap<AppState, any> = {
  ui: fromUI.uiReducer,
  auth: fromAuth.autReducer,
};
