/* import { registerLocaleData } from '@angular/common'; */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';

import { Pais, PaisInfo } from '../interfaces/pais.inteeface';

// URL => https://restcountries.eu/#api-endpoints-region

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _utlBase = 'https://restcountries.eu/rest/v2';
  private _regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private _http: HttpClient) {}

  get regiones(): string[] {
    return [...this._regiones];
  }

  listarPaisesPorRegion(region: string): Observable<Pais[]> {
    const url: string = `${this._utlBase}/region/${region}?fields=name;alpha3Code`;
    return this._http.get<Pais[]>(url);
  }

  mostrarPaisePorCodigo(codigo: string): Observable<PaisInfo | null> {
    if (!codigo) return of(null);
    const url = `${this._utlBase}/alpha/${codigo}`;
    return this._http.get<PaisInfo>(url);
  }

  mostrarInfoPaisPorCodigo(codigo: string): Observable<Pais> {
    //if (!codigo) return of(null);
    const url = `${this._utlBase}/alpha/${codigo}?fields=name;alpha3Code`;
    return this._http.get<Pais>(url);
  }

  obtenerPaisesPorCodigo(borders: string[]): Observable<Pais[]> {
    if (!borders) return of([]);
    const peticiones: Observable<Pais>[] = [];
    borders.forEach((codigo: string) => {
      const peticion = this.mostrarInfoPaisPorCodigo(codigo);
      peticiones.push(peticion);
    });
    return combineLatest(peticiones);
  }
}
