import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../services/country.service';
import { Pais, PaisInfo } from '../interfaces/pais.inteeface';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements OnInit {
  miFormulario!: FormGroup;
  regiones: string[] = [];
  paises: Pais[] = [];
  fronteras: Pais[] = [];
  cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _countryService: CountryService
  ) {
    this.miFormulario = this.fb.group({
      region: ['', Validators.required],
      pais: ['', Validators.required],
      frontera: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.regiones = this._countryService.regiones;
    // Escuchando el cambio del primer selector (region)
    /* this.miFormulario
      .get('region')
      ?.valueChanges.subscribe((region: string) => {
        this._countryService
          .listarPaisesPorRegion(region)
          .subscribe((paises: Pais[]) => {
            this.paises = paises;
          });
      }); */
    // Mejor opción cuando hay dos o más observables
    this.miFormulario
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        switchMap((region) =>
          this._countryService.listarPaisesPorRegion(region)
        )
      )
      .subscribe((paises: Pais[]) => {
        this.paises = paises;
        this.cargando = false;
      });

    // Escuchando el cambio del segundo selector (pais)
    this.miFormulario
      .get('pais')
      ?.valueChanges.pipe(
        tap((_) => {
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
        }),
        switchMap((codigo) =>
          this._countryService.mostrarPaisePorCodigo(codigo)
        ),
        switchMap((pais) =>
          this._countryService.obtenerPaisesPorCodigo(pais?.borders!)
        )
      )
      .subscribe((paises: Pais[]) => {
        // this.fronteras = pais?.borders || [];
        this.fronteras = paises;
        this.cargando = false;
      });
  }

  guardar() {}
}
