import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';

import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicComponent } from './dynamic/dynamic.component';
import { MainComponent } from './main/main.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [DynamicComponent, MainComponent, MultiSelectComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class FormsModule {}
