import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html',
  styleUrls: ['./list-main.component.scss']
})
export class ListMainComponent implements OnInit, OnDestroy {
  private customerSubscription: Subscription = new Subscription;

  constructor(private _store: Store<fromStore.CustomerModuleState>) {
    this.customerSubscription = this._store.select(fromStore.getCustomers).subscribe((customers) => {
      console.log('LISTA', customers);
    });
  }

  ngOnInit(): void {
    console.log('ANTES DE SISPRAR fromStore.LoadCustomers()');
    this._store.dispatch(new fromStore.LoadCustomers());
    console.log('DISPARANDO ACCCIÓN fromStore.LoadCustomers()');
  }

  ngOnDestroy(): void {
    this.customerSubscription.unsubscribe();
  }
}
