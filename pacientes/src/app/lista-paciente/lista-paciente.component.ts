import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { Documento } from '../interfaces/documento';
import { Paciente } from '../interfaces/paciente';
import { PacienteService } from '../services/paciente.service';

import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';


import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.scss']
})
export class ListaPacienteComponent implements OnInit, OnDestroy {
  checked: boolean = true;
  mensaje?: string;
  tiposDeDocumentos: Documento[] = [];
  pacientes: Paciente[] = [];
  // Formulario
  formulario!: FormGroup;
  // Cabecera de la tabla
  cabecera: string[] = [
    'nombre',
    'tipoDeDoc',
    'numeroDeDoc',
    'fechaNac',
    'estado',
    'editar',
    'eliminar'
  ];
  /* Datos para la tabla */
  dataSource = new MatTableDataSource<Paciente>();

  private _subs: Subscription = new Subscription;


  constructor(private fb: FormBuilder, private _pacienteService: PacienteService) {
    this.formulario = this.fb.group({
      idTipoDocide: ["", [Validators.required]],
      noDocide: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      nombres: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    this._pacienteService.listarTipoDeDocumento().subscribe((data: Documento[]) => {
      this.tiposDeDocumentos = data;
    });
  }

  validarCampos(value: string) {
    return (
      this.formulario.controls[value].errors && this.formulario.controls[value].touched
    );
  }


  cargarpacientes(): void {

    if (this.formulario.value.idTipoDocide && this.formulario.value.noDocide) {
      this._subs = this._pacienteService.listarPacientes().pipe(
        map((items: Paciente[]) => items.filter(
          item => item.idTipoDocide == this.formulario.value.idTipoDocide && item.noDocide == this.formulario.value.noDocide)
        )
      ).subscribe((data: Paciente[]) => this.dataSource.data = data);
    } else if (this.formulario.value.apellido) {
      this._subs = this._pacienteService.listarPacientes().pipe(
        map((items: Paciente[]) => items.filter(
          item => item.noApepat.toLowerCase().includes(this.formulario.value.apellido.toLowerCase()))
        )
      ).subscribe((data: Paciente[]) => this.dataSource.data = data);
    } else if (this.formulario.value.nombres) {
      this._subs = this._pacienteService.listarPacientes().pipe(
        map((items: Paciente[]) => items.filter(
          item => item.noNombres.toLowerCase().includes(this.formulario.value.nombres.toLowerCase()))
        )
      ).subscribe((data: Paciente[]) => this.dataSource.data = data);
    } else {
      this.mensaje = "Debe seleccionar un criterio de búsqueda";
    }
  }
  
  limpiar(): void {
     this.formulario.reset();
  }

  test(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    //  this.myForm.reset();
    console.log(this.formulario.value);
    console.log("ID", this.formulario.value.idTipoDocide);
    console.log("No", this.formulario.value.noDocide);
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe()
  }

}
