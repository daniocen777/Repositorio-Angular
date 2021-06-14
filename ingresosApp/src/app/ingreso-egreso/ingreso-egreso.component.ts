import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IngresoEgreso } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';

import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import {
  ActivateLoadingAction,
  DeactivateLoadingAction,
} from '../shared/ui.actions';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.css'],
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  tipo: string = 'ingreso';
  loadingSubscription: Subscription = new Subscription();
  loading: boolean = false;

  constructor(
    private _ingresoEgresoService: IngresoEgresoService,
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loadingSubscription = this._store.select('ui').subscribe((ui) => {
      this.loading = ui.isLoading;
    });

    this.form = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      monto: new FormControl(0, Validators.min(0)),
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  crearIngresoEgreso(): void {
    this._store.dispatch(new ActivateLoadingAction());
    const ingresoEgreso = new IngresoEgreso({
      ...this.form.value,
      tipo: this.tipo,
    });
    this._ingresoEgresoService.crearIngresoEgreso(ingresoEgreso).then(() => {
      this._store.dispatch(new DeactivateLoadingAction());
      Swal.fire({
        title: 'Mensaje',
        text: `El ${this.tipo} fue creado correctamente`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
      this.form.reset({
        monto: 0,
      });
    });
  }
}
