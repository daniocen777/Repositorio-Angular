import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [RegisterComponent, ListComponent],
  imports: [CommonModule, UsersRoutingModule, MaterialModule],
})
export class UsersModule {}
