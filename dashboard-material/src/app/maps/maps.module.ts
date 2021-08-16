import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';

import { MaterialModule } from '../material/material.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { MainComponent } from './pages/main/main.component';

/* https://www.mapbox.com/ */

@NgModule({
  declarations: [
    MiniMapaComponent,
    FullScreenComponent,
    ZoomRangeComponent,
    PropertiesComponent,
    MenuComponent,
    MarkersComponent,
    MainComponent,
  ],
  imports: [CommonModule, MapsRoutingModule, MaterialModule],
})
export class MapsModule {}
