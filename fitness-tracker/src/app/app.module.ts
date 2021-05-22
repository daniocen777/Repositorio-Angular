import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/auth.guard';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
