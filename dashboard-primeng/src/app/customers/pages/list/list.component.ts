import { Component, OnInit, OnDestroy } from '@angular/core';

import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { Subscription } from 'rxjs';
import { Customer } from '../../models/customer.model';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ListComponent implements OnInit, OnDestroy {

  customers: Customer[] = [];
  displayDialog: boolean = false;
  isEdit: boolean = false;
  selectedCustomer: Customer = { name: '', email: '', age: 0 };

  private customerSubscription: Subscription = new Subscription;

  constructor(private _store: Store<fromStore.CustomerModuleState>,
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService) {
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
      id: 0,
      name: '',
      email: '',
      age: 18
    }
  }

  deleteConfirm(customer: Customer) {
    this._confirmationService.confirm({
      message: `¿Está seguro de eliminar a ${customer.name}?`,
      header: 'Confirmar Eliminación',
      icon: 'pi pi-info-circle',
      accept: () => {
        // this._messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Cliente eliminado' });
        this._store.dispatch(new fromStore.DeleteCustomer(customer.id!));
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this._messageService.add({ severity: 'error', summary: 'Rechazado', detail: 'Ha rechazado la operación' });
            break;
          case ConfirmEventType.CANCEL:
            this._messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Usted a cancelado la operación' });
            break;
        }
      }
    });
  }

}
