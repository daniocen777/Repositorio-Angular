import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { IngresoEgreso } from './ingreso-egreso.model';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filter, map } from 'rxjs/operators';
import { SetItemsAction, UnsetItemsAction } from './ingreso-egreso.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngresoEgresoService {
  ingresoEgresoListenerSubscription: Subscription = new Subscription();
  ingresoEgresoItemsSubscription: Subscription = new Subscription();

  constructor(
    private _angularFirestore: AngularFirestore,
    private _auth: AuthService,
    private _store: Store<AppState>
  ) {}

  /* Escuchar loa cambios en firebase */
  initIngresoEgresoListener() {
    this.ingresoEgresoListenerSubscription = this._store
      .select('auth')
      .pipe(filter((auth) => auth.user.uid != ''))
      .subscribe((auth) => {
        this.ingresoEgresoItems(auth.user!.uid);
      });
  }

  private ingresoEgresoItems(uid: string) {
    // snapshotChanges => Me dá más información (incluído el uid del documento)
    this.ingresoEgresoItemsSubscription = this._angularFirestore
      .collection(`${uid}/ingreso-egresos/items`)
      .snapshotChanges()
      .pipe(
        map((docData) => {
          return docData.map((doc: DocumentChangeAction<any>) => {
            return {
              uid: doc.payload.doc.id,
              ...doc.payload.doc.data(),
            };
          });
        })
      )
      .subscribe((collection) => {
        this._store.dispatch(new SetItemsAction(collection));
      });
  }

  crearIngresoEgreso(ingresoEgreso: IngresoEgreso) {
    const user = this._auth.getUser();
    return this._angularFirestore
      .doc(`${user.uid}/ingreso-egresos`)
      .collection('items')
      .add({
        ...ingresoEgreso,
      });
  }

  borrarIngresoEgreso(item: IngresoEgreso): Promise<void> {
    const user = this._auth.getUser();
    return this._angularFirestore
      .doc(`${user.uid}/ingreso-egresos/items/${item.uid}`)
      .delete();
  }

  cancelSubscriptions() {
    this.ingresoEgresoListenerSubscription.unsubscribe();
    this.ingresoEgresoItemsSubscription.unsubscribe();
    this._store.dispatch(new UnsetItemsAction());
  }
}
