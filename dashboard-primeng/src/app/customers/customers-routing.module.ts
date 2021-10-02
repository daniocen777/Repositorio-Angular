import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerMainComponent } from './pages/customer-main/customer-main.component';

const routes: Routes = [
  { path: '', component: CustomerMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
