import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss'],
})
export class FullScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.03095501815203, -12.046334367145977],
      zoom: 17
    });
  }
}
