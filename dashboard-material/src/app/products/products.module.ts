import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { ProductsRoutingModule } from './products-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [MainComponent, ProductsListComponent],
  imports: [CommonModule, ProductsRoutingModule, MaterialModule],
})
export class ProductsModule {}
