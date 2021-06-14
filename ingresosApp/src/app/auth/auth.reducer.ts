import { Action, createReducer, on } from '@ngrx/store';
import * as fromAuth from './auth.actions';

import { User } from './user.model';

export interface AuthState {
  user: User;
}

export const initialState: AuthState = {
  user: {
    uid: '',
    name: '',
    email: '',
  },
};

export function autReducer(
  state = initialState,
  action: fromAuth.actions
): AuthState {
  switch (action.type) {
    case fromAuth.SEt_USER:
      return {
        user: {
          ...action.user,
        },
      };

    case fromAuth.UNSET_USER:
      return {
        user: {
          uid: '',
          name: '',
          email: '',
        },
      };
    default:
      return state;
  }
}
