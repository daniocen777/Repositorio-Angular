import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';
import { DocumentoPipe } from './pipes/documento.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaPacienteComponent,
    RegistroPacienteComponent,
    DocumentoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
