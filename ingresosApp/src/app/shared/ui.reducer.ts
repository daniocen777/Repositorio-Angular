import { Action, createReducer, on } from '@ngrx/store';

import * as fromUI from './ui.actions';

export interface State {
  isLoading: boolean;
}

export const initialState = {
  isLoading: false,
};

export function uiReducer(state = initialState, action: fromUI.actions): State {
  switch (action.type) {
    case fromUI.ACTIVATE_LOADING:
      return {
        isLoading: true,
      };
    case fromUI.DEACTIVATE_LOADING:
      return {
        isLoading: false,
      };

    default:
      return state;
  }
}
