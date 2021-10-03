import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerMainComponent } from './pages/customer-main/customer-main.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '', component: CustomerMainComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', component: ListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
