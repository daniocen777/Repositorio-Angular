import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { PrimeModule } from '../prime/prime.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [CommonModule, PrimeModule],
  exports: [MainComponent]
})
export class SharedModule { }
