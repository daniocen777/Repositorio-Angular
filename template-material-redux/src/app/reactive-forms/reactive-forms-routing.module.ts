import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BasicComponent } from './components/basic/basic.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'basic', component: BasicComponent },
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
