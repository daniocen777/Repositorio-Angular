import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';

@NgModule({
  declarations: [
    ReactiveFormComponent,
    BasicComponent,
    DynamicComponent,
    SwitchesComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsRoutingModule],
})
export class FormsModule {}
