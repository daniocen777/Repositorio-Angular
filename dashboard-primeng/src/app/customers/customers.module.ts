import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';

// Redux
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';

import { CustomerMainComponent } from './pages/customer-main/customer-main.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeModule } from '../prime/prime.module';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { BlankComponent } from './pages/blank/blank.component';

@NgModule({
  declarations: [
    CustomerMainComponent,
    ListComponent,
    CreateComponent,
    BlankComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, CustomersRoutingModule, 
    PrimeModule, SharedModule,
    StoreModule.forRoot(reducers), EffectsModule.forRoot(effects)]
})
export class CustomersModule { }
