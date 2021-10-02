import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMainComponent } from './components/list-main/list-main.component';
import { CustomerMainComponent } from './pages/customer-main/customer-main.component';

const routes: Routes = [
  {
    path: '', component: CustomerMainComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', component: ListMainComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
