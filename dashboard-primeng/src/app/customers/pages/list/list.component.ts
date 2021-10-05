import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

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
  displayDialog: boolean = false;
  isEdit: boolean = false;
  selectedCustomer: Customer = { name: '', email: '', age: 0 };

  private customerSubscription: Subscription = new Subscription;

  constructor(private _store: Store<fromStore.CustomerModuleState>) {
    this.customerSubscription = this._store.select(fromStore.getCustomers).subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
  }

  ngOnInit(): void {
    this._store.dispatch(new fromStore.LoadCustomers());
  }

  ngOnDestroy(): void {
    this.customerSubscription.unsubscribe();
  }

  clear(table: Table) {
    table.clear();
  }

  /* showResponsiveDialog(): void {
    this.displayDialog = true;
  } */

  hideResponsiveDialog(event: boolean) {
    this.displayDialog = event;
  }

  editCustomer(customer: Customer): void {
    this.selectedCustomer = { ...customer };
    this.displayDialog = true;
    this.isEdit = true;
  }

  save() {
    this.displayDialog = true;
    this.isEdit = false;
    this.selectedCustomer = {
      name: '',
      email: '',
      age: 0
    }
  }

}
