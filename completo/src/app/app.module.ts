import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Firebase */
import { AngularFireModule } from '@angular/fire';
/* import { AngularFirestore } from '@angular/fire/firestore'; */
/* import { AngularFireAuth } from '@angular/fire/auth'; */
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebase.config),
    /* AngularFirestore, */
    /* AngularFireAuth, */
    AngularFireStorageModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
