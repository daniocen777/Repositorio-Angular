import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { MainComponent } from './pages/main/main.component';

/* https://www.mapbox.com/ */

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'fullscreen', component: FullScreenComponent },
      { path: 'zoon-range', component: ZoomRangeComponent },
      { path: 'markers', component: MarkersComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
