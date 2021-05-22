import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTrainingComponent } from './home-training/home-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTrainingComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'current', component: CurrentTrainingComponent },
      { path: 'new', component: NewTrainingComponent },
      { path: 'past', component: PastTrainingsComponent },
      { path: '**', redirectTo: 'training' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
