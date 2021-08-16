import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BasicComponent } from './components/basic/basic.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, BasicComponent],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
  ],
})
export class MyReactiveFormsModule {}
