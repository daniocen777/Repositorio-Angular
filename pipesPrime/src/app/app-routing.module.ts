import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './sales/pages/basic/basic.component';
import { NotCommonsComponent } from './sales/pages/not-commons/not-commons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrdersComponent } from './sales/pages/orders/orders.component';

const routes: Routes = [

  { path: '', component: BasicComponent, pathMatch: 'full' },
  { path: 'numbers', component: NumbersComponent },
  { path: 'not-commons', component: NotCommonsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
