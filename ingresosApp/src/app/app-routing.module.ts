import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegiterComponent } from './auth/regiter/regiter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dasboardRoutes } from './dashboard/dashboard.routing';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegiterComponent },
  { path: '', component: DashboardComponent, children: dasboardRoutes },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
