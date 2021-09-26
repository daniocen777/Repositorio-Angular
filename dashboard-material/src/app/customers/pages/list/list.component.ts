import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _store: Store<fromStore.CustomerModuleState>) {
    this._store.select("customers").subscribe(response => {
      console.log("ENTRANDO AL COMPONENTE DE LISTA DE CUSTOMERS", response);
    });
  }

  ngOnInit(): void {
  }

}
