import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';

import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, TemplateComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, RouterModule],
  exports: [HeaderComponent, SidenavComponent, TemplateComponent],
})
export class SharedModule {}
