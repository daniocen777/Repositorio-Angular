import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

/* https://valor-software.com/ng2-charts/ */
import { ChartsModule } from 'ng2-charts';

import { GraficosRoutingModule } from './graficos-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { BarraComponent } from './components/barra/barra.component';

@NgModule({
  declarations: [
    MainComponent,
    MainMenuComponent,
    BarrasComponent,
    BarrasDoblesComponent,
    DonaComponent,
    DonaHttpComponent,
    BarraComponent,
  ],
  imports: [CommonModule, GraficosRoutingModule, MaterialModule, ChartsModule],
})
export class GraficosModule {}
