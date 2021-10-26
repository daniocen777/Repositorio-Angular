import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './pages/blank/blank.component';
import { CustomerMainComponent } from './pages/customer-main/customer-main.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '', component: CustomerMainComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'blank' },
      { path: 'list', component: ListComponent },
      { path: 'blank', component: BlankComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
