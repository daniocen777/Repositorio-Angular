import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from '../ingreso-egreso/statistics/statistics.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { DetailComponent } from '../ingreso-egreso/detail/detail.component';

export const dasboardRoutes: Routes = [
  { path: '', component: StatisticsComponent },
  { path: 'ingreso-egreso', component: IngresoEgresoComponent },
  { path: 'detalle', component: DetailComponent },
];

/* @NgModule({
  imports: [RouterModule.forRoot(dasboardRoutes)],
  exports: [RouterModule],
})
export class DasboardRouting {} */
