import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard-material';

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mabboxToken;
  }
}
