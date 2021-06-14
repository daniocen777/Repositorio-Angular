import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  items: IngresoEgreso[] = [];
  subscription: Subscription = new Subscription();
  constructor(
    private _store: Store<AppState>,
    private _ingresoEgresoService: IngresoEgresoService
  ) {}

  ngOnInit(): void {
    this.subscription = this._store
      .select('ingresoEgreso')
      .subscribe((ingresoEgreso) => {
        this.items = ingresoEgreso.items;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  borrarItem(item: IngresoEgreso): void {
    this._ingresoEgresoService.borrarIngresoEgreso(item).then(() => {
      Swal.fire({
        title: 'Mensaje',
        text: `El item ${item.descripcion} fue eliminado`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    });
  }
}
