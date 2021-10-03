import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { Subscription } from 'rxjs';
import { Customer } from '../../models/customer.model';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];

  private customerSubscription: Subscription = new Subscription;

  constructor(private _store: Store<fromStore.CustomerModuleState>) {
    this.customerSubscription = this._store.select(fromStore.getCustomers).subscribe((customers: Customer[]) => {
      this.customers = customers;
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

  clear(table: Table) {
    table.clear();
  }

}
