import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TemplateModule } from '../template/template.module';
import { BasicComponent } from './components/basic/basic.component';

@NgModule({
  declarations: [
    HomeComponent,
    BasicComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    MaterialModule,FlexLayoutModule,
    TemplateModule
  ]
})
export class ReactiveFormsModule { }
