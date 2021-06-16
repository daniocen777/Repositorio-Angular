import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private _authService: AuthService) {}

  canLoad(): Observable<boolean> {
    return this._authService.isAuth();
  }

  canActivate(): Observable<boolean> {
    return this._authService.isAuth().pipe(take(1));
  }
}
