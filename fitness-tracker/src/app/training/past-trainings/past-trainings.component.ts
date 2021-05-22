import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../model/exercise';
import { TrainingService } from '../services/training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css'],
})
export class PastTrainingsComponent
  implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    'date',
    'name',
    'duration',
    'calories',
    'state',
  ];
  /* Datos para la tabla */
  dataSource = new MatTableDataSource<Exercise>();
  /* Para conectar tabla con el ordenamiento => se necesita IMPORTAR MatSortModule */
  @ViewChild(MatSort) sort: MatSort;
  /* Para conectar tabla con la paginación => se necesita IMPORTAR MatSortModule */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private exChabgedSubscription: Subscription;

  constructor(private _trainingService: TrainingService) {}

  ngOnInit(): void {
    this.exChabgedSubscription = this._trainingService.finishedExcercisesChanged.subscribe(
      (exercises: Exercise[]) => {
        this.dataSource.data = exercises;
      }
    );
    this._trainingService.fetchCompletedOrCancelExercise();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.exChabgedSubscription.unsubscribe();
  }

  /* Para filtrar */
  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
