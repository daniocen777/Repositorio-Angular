import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TemplateComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [TemplateComponent],
})
export class TemplateModule {}
