import { Action } from '@ngrx/store';
import { IngresoEgreso } from './ingreso-egreso.model';

export const SET_ITEMS = '[Ingreso Egreso] SET_ITEMS';
export const UNSET_ITEMS = '[Ingreso Egreso] UNSET_ITEMS';

export class SetItemsAction implements Action {
  readonly type = SET_ITEMS;
  constructor(public items: IngresoEgreso[]) {}
}

export class UnsetItemsAction implements Action {
  readonly type = UNSET_ITEMS;
  constructor() {}
}

export type actions = SetItemsAction | UnsetItemsAction;
