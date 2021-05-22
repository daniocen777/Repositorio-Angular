import { Injectable } from '@angular/core';
import { Exercise } from '../model/exercise';
import { Subject, Subscription } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  private avaibleExcercise: Exercise[] = [];
  private runningExercise: Exercise;
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedExcercisesChanged = new Subject<Exercise[]>();
  private firebaseSubscriptions: Subscription[] = [];

  constructor(private _firestore: AngularFirestore) {}

  fetchAvaibleExcercise() {
    this.firebaseSubscriptions.push(
      this._firestore
        .collection('avaibleExercises')
        .snapshotChanges()
        .pipe(
          map((docData) => {
            return docData.map((doc: any) => {
              return {
                id: doc.payload.doc.id,
                ...doc.payload.doc.data(),
              };
            });
          })
        )
        .subscribe((exercises: Exercise[]) => {
          this.avaibleExcercise = exercises;
          this.exercisesChanged.next([...this.avaibleExcercise]);
        })
    );
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.avaibleExcercise.find(
      (ex) => ex.id === selectedId
    );
    this.exerciseChanged.next({
      ...this.runningExercise,
    });
  }

  getRunningExercise(): Exercise {
    return { ...this.runningExercise };
  }

  completeExercise(): void {
    this._addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number): void {
    this._addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  fetchCompletedOrCancelExercise() {
    this.firebaseSubscriptions.push(
      this._firestore
        .collection('finishedExercises')
        .valueChanges()
        .subscribe((exercises: Exercise[]) => {
          this.finishedExcercisesChanged.next(exercises);
        })
    );
  }

  cancelSubscriptions(): void {
    this.firebaseSubscriptions.forEach((subscription) =>
      subscription.unsubscribe()
    );
  }

  private _addDataToDatabase(exercise: Exercise) {
    this._firestore.collection('finishedExercises').add(exercise);
  }
}
