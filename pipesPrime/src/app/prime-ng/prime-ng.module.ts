import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
