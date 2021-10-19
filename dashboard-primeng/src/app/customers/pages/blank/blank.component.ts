import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../../models/customer.model';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  selectedCustomer: Customer = {};
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

  showCustomer(customer: Customer): void {
    this.selectedCustomer = customer;
    console.log(this.selectedCustomer);
  }
}
