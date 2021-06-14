import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  nombre!: String;
  subscription: Subscription = new Subscription();

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this._store
      .select('auth')
      .pipe(filter((auth) => auth.user.name != null))
      .subscribe((auth) => {
        this.nombre = auth.user.name;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
