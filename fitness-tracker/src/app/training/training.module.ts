import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { TrainingRoutingModule } from './training-routing.module';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { HomeTrainingComponent } from './home-training/home-training.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { StopTrainingComponent } from './current-training/stop-training';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    HomeTrainingComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent,
    TrainingComponent,
    StopTrainingComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class TrainingModule {}
