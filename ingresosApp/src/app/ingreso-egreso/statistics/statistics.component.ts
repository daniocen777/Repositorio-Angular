import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../ingreso-egreso.model';

import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  subscription: Subscription = new Subscription();
  ingresos!: number;
  egresos!: number;
  cantidadIngresos!: number;
  cantidadEgresos!: number;

  /* Estadística */
  public doughnutChartLabels: Label[] = ['Ingresos', 'Egresos'];
  public doughnutChartData: MultiDataSet | number[] = [];

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this._store
      .select('ingresoEgreso')
      .subscribe((ingresoEgreso) => {
        this.contarIngresoEgreso(ingresoEgreso.items);
      });
  }

  contarIngresoEgreso(items: IngresoEgreso[]) {
    this.ingresos = 0;
    this.egresos = 0;
    this.cantidadIngresos = 0;
    this.cantidadEgresos = 0;

    items.forEach((item) => {
      if (item.tipo === 'ingreso') {
        this.cantidadIngresos += 1;
        this.ingresos += item.monto;
      } else {
        this.cantidadEgresos += 1;
        this.egresos += item.monto;
      }
    });
    this.doughnutChartData = [this.ingresos, this.egresos];
  }
}
