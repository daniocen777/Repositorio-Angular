import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';
import { Documento } from '../interfaces/documento';
import { Paciente } from '../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private _urlBase = "http://localhost:8090/api";

  constructor(private _http: HttpClient) { }

  listarTipoDeDocumento(): Observable<Documento[]> {
    const url: string = `${this._urlBase}/tipoDocumento`;
    return this._http.get<Documento[]>(url);
  }

  listarPacientes(): Observable<Paciente[]> {
    const url: string = `${this._urlBase}/paciente`;
    return this._http.get<Paciente[]>(url);
  }
}
