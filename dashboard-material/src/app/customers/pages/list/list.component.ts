import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';

import { Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

import * as fromStore from '../../store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'age',
    'acciones',
  ];

  /* Datos para la tabla */
  dataSource = new MatTableDataSource<Customer>();
  /* Para conectar tabla con el ordenamiento => se necesita IMPORTAR MatSortModule */
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  private customerSubscription: Subscription = new Subscription;

  constructor(private _store: Store<fromStore.CustomerModuleState>) {
    this.customerSubscription = this._store.select('customers').subscribe(result => {
      this.dataSource.data = result.data;
    });
  }

  ngOnInit(): void {
    /* this._store

    this.customerSubscription = this._customerService.getCustomers().subscribe((response: Customer[]) => {
      
    }); */
    this._store.dispatch(new fromStore.LoadCustomers());

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  ngOnDestroy(): void {
    this.customerSubscription.unsubscribe();
    console.log('DESTRUYENDO CUSTOMERS');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
