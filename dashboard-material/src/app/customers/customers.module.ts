import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
// Redux
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomersRoutingModule } from './customers-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/list/list.component';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot(effects)
  ]
})
export class CustomersModule { }
