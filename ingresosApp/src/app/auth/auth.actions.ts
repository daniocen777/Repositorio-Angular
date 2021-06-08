import { Action } from '@ngrx/store';
import { User } from './user.model';

export const SEt_USER = '[Auth] SEt_USER';

export class SetUserAction implements Action {
  readonly type = SEt_USER;
  constructor(public user: User) {}
}

export type actions = SetUserAction;
