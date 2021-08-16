import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {
  myForm!: FormGroup;
  nuevoFavorito!: FormControl;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      favoritos: this.fb.array(
        [
          ['Metal Gear', Validators.required],
          ['Resident Evil', Validators.required],
        ],
        Validators.required
      ),
    });

    // Este campo no está relacionado con el formulario (myForm), es independiente,
    // para relacionarlo con el template, colocarlo entre corchetes [formControl]="nuevoFavorito"
    this.nuevoFavorito = this.fb.control('', Validators.required);
  }

  ngOnInit(): void {}

  validarCampos(value: string) {
    return (
      this.myForm.controls[value].errors && this.myForm.controls[value].touched
    );
  }

  get favoritosArr(): FormArray {
    return this.myForm.get('favoritos') as FormArray;
  }

  agregarAFavoritos() {
    if (this.nuevoFavorito.invalid) return;
    // Crear nuevo elemento en "myForm" con el dato "nuevoFavorito"
    this.favoritosArr.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );

    // Otra forma
    /*  this.favoritosArr.push(
      new FormControl(this.nuevoFavorito.value, Validators.required)
    ); */

    this.nuevoFavorito.reset();
  }

  guardar() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    //  this.myForm.reset();
    console.log(this.myForm.value);
  }

  borrarFavorito(index: number) {
    this.favoritosArr.removeAt(index);
  }
}
