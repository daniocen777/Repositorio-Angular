import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  /* Para evitar fugas de memoria */
  private _suscription?: Subscription;
  constructor(
    private _authService: AuthService,
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this._suscription = this._store.select('ui').subscribe((ui) => {
      this.loading = ui.isLoading;
    });
  }

  ngOnDestroy(): void {
    this._suscription!.unsubscribe();
  }

  onSubmit(data: any) {
    this._authService.login(data.email, data.password);
  }
}
