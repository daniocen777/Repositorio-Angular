import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';

import { MaterialModule } from '../material/material.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    MaterialModule
  ]
})
export class TestModule { }
