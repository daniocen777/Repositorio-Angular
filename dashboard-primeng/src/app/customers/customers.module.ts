import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';

import { CustomerMainComponent } from './customer-main/customer-main.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeModule } from '../prime/prime.module';

@NgModule({
  declarations: [
    CustomerMainComponent
  ],
  imports: [CommonModule, CustomersRoutingModule, PrimeModule, SharedModule]
})
export class CustomersModule { }
