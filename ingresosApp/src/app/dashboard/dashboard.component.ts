import { Component, OnInit } from '@angular/core';
import { IngresoEgresoService } from '../ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private _ingresoEgresoService: IngresoEgresoService) {}

  ngOnInit(): void {
    this._ingresoEgresoService.initIngresoEgresoListener();
  }
}
