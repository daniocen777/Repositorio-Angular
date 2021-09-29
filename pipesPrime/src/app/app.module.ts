import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* PrimeModule */
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
