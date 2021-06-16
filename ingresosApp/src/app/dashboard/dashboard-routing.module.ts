import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
// import { AuthGuardService } from '../auth/auth-guard.service';
import { dasboardRoutes } from './dashboard.routing';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: dasboardRoutes,
    //canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DasboardRoutingModule {}
