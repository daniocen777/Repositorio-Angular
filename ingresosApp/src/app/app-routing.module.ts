import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegiterComponent } from './auth/regiter/regiter.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegiterComponent },
  {
    path: '',
    loadChildren: () =>
      import('./ingreso-egreso/ingreso-egreso.module').then(
        (m) => m.IngresoEgresoModule
      ),
    canLoad: [AuthGuardService],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
