import { Action, createReducer, on } from '@ngrx/store';
import * as fromIngresoEgreso from './ingreso-egreso.actions';
import { IngresoEgreso } from './ingreso-egreso.model';
import { AppState } from '../app.reducer';

export interface IngresoEgresoState {
  items: IngresoEgreso[];
}

export const initialState: IngresoEgresoState = {
  items: [],
};

/* Exportar AppState para usar el reducer*/
export interface IngresoEgresoStateState extends AppState {
  ingresoEgreso: IngresoEgresoState;
}

export function ingresoEgresoReducer(
  state = initialState,
  action: fromIngresoEgreso.actions
): IngresoEgresoState {
  switch (action.type) {
    case fromIngresoEgreso.SET_ITEMS:
      return {
        items: [
          ...action.items.map((item) => {
            return { ...item };
          }),
        ],
      };

    case fromIngresoEgreso.UNSET_ITEMS:
      return {
        items: [],
      };

    default:
      return state;
  }
}
