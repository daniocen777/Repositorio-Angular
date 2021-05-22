import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from '../services/training.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {
  onGoiginTraining: boolean = false;
  exerciseSubcription: Subscription;

  constructor(
    private _trainingService: TrainingService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._authService.initAuthListener();

    this.exerciseSubcription = this._trainingService.exerciseChanged.subscribe(
      (exercise) => {
        if (exercise) {
          this.onGoiginTraining = true;
        } else {
          this.onGoiginTraining = false;
        }
      }
    );
  }
}
