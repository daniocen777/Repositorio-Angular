import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth.service';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styles: [],
})
export class RegiterComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  /* Para evitar fugas de memoria */
  private _suscription?: Subscription;

  constructor(
    private _authService: AuthService,
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    /* Suscribirse al estado */
    this._suscription = this._store.select('ui').subscribe((ui) => {
      this.loading = ui.isLoading;
    });
  }

  ngOnDestroy(): void {
    this._suscription?.unsubscribe();
  }

  onSubmit(data: any) {
    console.log(data);
    this._authService.createUser(data.email, data.password, data.nombre);
  }
}
