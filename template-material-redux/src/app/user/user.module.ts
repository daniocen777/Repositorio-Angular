import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';

import { Routes, RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { UserItemComponent } from './components/user-item/user-item.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: UserComponent }];

@NgModule({
  declarations: [UserComponent, UserItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FlexLayoutModule,
  ],
})
export class UserModule {}
