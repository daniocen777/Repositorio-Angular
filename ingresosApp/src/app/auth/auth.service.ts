import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { Observable, Subscription } from 'rxjs';

import { User } from './user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { SetUserAction } from './auth.actions';
import {
  ActivateLoadingAction,
  DeactivateLoadingAction,
} from '../shared/ui.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /* Controlar las subcripciones */
  private _userSubscription: Subscription = new Subscription();

  constructor(
    private _auth: AngularFireAuth,
    private _angularFirestore: AngularFirestore,
    private _router: Router,
    private _store: Store<AppState>
  ) {}

  /* Solo se ejecuta una vez en toda la aplicación */
  iniAuthListener() {
    this._auth.authState.subscribe((fbUser) => {
      /* console.log('===========', fbUser); */
      if (fbUser) {
        this._userSubscription = this._angularFirestore
          .doc(`${fbUser.uid}/user`)
          .valueChanges()
          .subscribe((userObj: any) => {
            const newUser = new User(userObj);
            this._store.dispatch(new SetUserAction(newUser));
          });
      } else {
        this._userSubscription?.unsubscribe();
      }
    });
  }

  createUser(email: string, password: string, name: string): void {
    /* Disparar la acción de cargar*/
    this._store.dispatch(new ActivateLoadingAction());

    this._auth
      .createUserWithEmailAndPassword(email, password)
      .then((fbUser) => {
        const user: User = {
          uid: fbUser.user!.uid,
          name: name,
          email: fbUser.user!.email!,
        };
        this._angularFirestore
          .doc(`${user.uid}/user`)
          .set(user)
          .then(() => {
            this._router.navigate(['/']);
            /* Disparar la acción de desactivar la carga*/
            this._store.dispatch(new DeactivateLoadingAction());
          });
      })
      .catch((error) => {
        /* Disparar la acción de desactivar la carga*/
        this._store.dispatch(new DeactivateLoadingAction());
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      });
  }

  login(email: string, password: string): void {
    /* Disparar la acción de cargar*/
    this._store.dispatch(new ActivateLoadingAction());
    this._auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this._router.navigate(['/']);
        /* Disparar la acción de desactivar la carga*/
        this._store.dispatch(new DeactivateLoadingAction());
      })
      .catch((error) => {
        /* Disparar la acción de desactivar la carga*/
        this._store.dispatch(new DeactivateLoadingAction());
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      });
  }

  logout(): void {
    this._router.navigate(['/login']);
    this._auth.signOut();
  }

  isAuth(): Observable<boolean> {
    return this._auth.authState.pipe(
      map((fbUser) => {
        if (fbUser == null) {
          this._router.navigate(['/login']);
        }

        return fbUser != null;
      })
    );
  }
}

/* test1@test.com */
