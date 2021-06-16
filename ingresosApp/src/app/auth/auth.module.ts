import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { LoginComponent } from './login/login.component';
import { RegiterComponent } from './regiter/regiter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, RegiterComponent],
  imports: [CommonModule, RouterModule, FormsModule, AngularFirestoreModule],
})
export class AuthModule {}
