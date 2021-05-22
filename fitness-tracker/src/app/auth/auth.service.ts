import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { TrainingService } from '../training/services/training.service';
import Swal from 'sweetalert2';
/* import { MatSnackBar } from '@angular/material/snack-bar';
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authChange = new Subject<boolean>();

  private isAuthenticated = false;
  private _message = '';

  constructor(
    /* private _snackBar: MatSnackBar, */
    private router: Router,
    private _angularFireAuth: AngularFireAuth,
    private _trainingService: TrainingService
  ) {}

  initAuthListener(): void {
    /* Si existe error de autenticación */
    this._angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this._trainingService.cancelSubscriptions();
        this.isAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['/auth']);
      }
    });
  }

  registerUser(authData: AuthData): void {
    /*  this._user = {
      userId: Math.round(Math.random() * 1000).toString(),
      email: authData.email,
    }; */

    this._angularFireAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(
          '************************* ERROR REGISTER *************************'
        );
        /* this._snackBar.open(error.message, null, {
          duration: 2000,
        }); */
      });
  }

  login(authData: AuthData): void {
    /* this._user = {
      userId: Math.round(Math.random() * 1000).toString(),
      email: authData.email,
    }; */

    this._angularFireAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.isAuthenticated = true;
        this.authChange.next(true);

        this.router.navigate(['/training']);
      })
      .catch((error) => {
        console.log('ENTRA AL ERROR');
        this._message = error.message;
        console.log('SALE DEL ERROR', this._message);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: this._message,
        });
        /*    this._snackBar.open(this._message, null, {
          duration: 2500,
        }); */
      });
  }

  logout(): void {
    this._angularFireAuth.signOut();
    this._trainingService.cancelSubscriptions();
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['/auth']);
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }
}
