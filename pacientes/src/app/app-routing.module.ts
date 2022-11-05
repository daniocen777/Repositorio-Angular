import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';

const routes: Routes = [
  { path: "", component: ListaPacienteComponent },
  { path: "ListarPaciente", component: ListaPacienteComponent },
  { path: "CrearPaciente", component: RegistroPacienteComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
