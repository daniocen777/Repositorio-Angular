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

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      favoritos: this.fb.array(
        [
          ['Metal Gear', Validators.required],
          ['Death Stranding', Validators.required],
        ],
        Validators.required
      ),
    });
  }

  ngOnInit(): void {}

  validarCampos(value: string) {
    return (
      this.myForm.controls[value].errors && this.myForm.controls[value].touched
    );
  }

  get favoritosArr() {
    return this.myForm.get('favoritos') as FormArray;
  }

  guardar() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset();
    console.log(this.myForm.value);
  }
}
