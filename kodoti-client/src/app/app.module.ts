import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { OutcomeListComponent } from './components/outcome/outcome-list/outcome-list.component';
import { OutcomeCreateComponent } from './components/outcome/outcome-create/outcome-create.component';
import { OutcomeUpdateComponent } from './components/outcome/outcome-update/outcome-update.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    OutcomeListComponent,
    OutcomeCreateComponent,
    OutcomeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
