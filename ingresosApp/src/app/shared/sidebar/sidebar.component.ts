import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IngresoEgresoService } from '../../ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  nombre!: String;
  subscription: Subscription = new Subscription();

  constructor(
    private _authService: AuthService,
    private _store: Store<AppState>,
    private _ingresoEgresoService: IngresoEgresoService
  ) {}

  ngOnInit(): void {
    this.subscription = this._store
      .select('auth')
      .pipe(filter((auth) => auth.user.name != null))
      .subscribe((auth) => {
        this.nombre = auth.user.name;
      });
  }

  logout(): void {
    this._authService.logout();
    this._ingresoEgresoService.cancelSubscriptions();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
