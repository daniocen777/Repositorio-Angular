import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { SignupComponent } from './signup/signup.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
/* import { AuthService } from './auth.service'; */

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  /* providers: [AuthService], */
  imports: [
    CommonModule,
    FlexLayoutModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
})
export class AuthModule {}
