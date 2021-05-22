import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'training',
    loadChildren: () =>
      import('./training/training.module').then(
        (module) => module.TrainingModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./test/test.module').then((module) => module.TestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
