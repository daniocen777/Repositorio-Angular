import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../services/training.service';
import { Exercise } from '../model/exercise';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  excercises: Exercise[];
  excercisesSubscription: Subscription;

  constructor(private _trainingService: TrainingService) {}

  ngOnInit(): void {
    /* this.excercises = this._trainingService.getAvaibleExcercise(); */
    this.excercisesSubscription = this._trainingService.exercisesChanged.subscribe(
      (ex) => {
        this.excercises = ex;
      }
    );
    this._trainingService.fetchAvaibleExcercise();
  }

  ngOnDestroy(): void {
    this.excercisesSubscription.unsubscribe();
  }

  onStartTraining(form: NgForm) {
    this._trainingService.startExercise(form.value.exercise);
  }
}
