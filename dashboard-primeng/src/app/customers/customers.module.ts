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
import { ListMainComponent } from './components/list-main/list-main.component';

@NgModule({
  declarations: [
    CustomerMainComponent,
    ListMainComponent
  ],
  imports: [CommonModule, CustomersRoutingModule, PrimeModule, SharedModule,
    StoreModule.forRoot(reducers), EffectsModule.forRoot(effects)]
})
export class CustomersModule { }
