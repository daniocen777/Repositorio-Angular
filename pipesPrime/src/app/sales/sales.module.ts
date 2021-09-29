import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule, PrimeNgModule
  ],
  exports: [NumbersComponent,
    NotCommonsComponent,
    BasicComponent,
    OrdersComponent]
})
export class SalesModule { }
