import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { CustomersRoutingModule } from './customers-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialModule
  ]
})
export class CustomersModule { }
