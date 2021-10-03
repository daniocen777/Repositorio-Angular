import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';

// Redux
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';

import { CustomerMainComponent } from './pages/customer-main/customer-main.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeModule } from '../prime/prime.module';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [
    CustomerMainComponent,
    ListComponent
  ],
  imports: [CommonModule, CustomersRoutingModule, PrimeModule, SharedModule,
    StoreModule.forRoot(reducers), EffectsModule.forRoot(effects)]
})
export class CustomersModule { }
