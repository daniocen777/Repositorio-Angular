import { Action } from '@ngrx/store';

export const ACTIVATE_LOADING = '[UI Loading] ACTIVATE_LOADING';
export const DEACTIVATE_LOADING = '[UI Loading] DEACTIVATE_LOADING';

export class ActivateLoadingAction implements Action {
  readonly type = ACTIVATE_LOADING;
}

export class DeactivateLoadingAction implements Action {
  readonly type = DEACTIVATE_LOADING;
}

export type actions = ActivateLoadingAction | DeactivateLoadingAction;
