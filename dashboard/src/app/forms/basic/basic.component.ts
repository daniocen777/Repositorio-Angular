import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.myForm = this._formBuilder.group({
      // key: [valor_por_defecto, validador síncrono, validador asíncrono]
      product: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(3)]],
      stock: [5, [Validators.required, Validators.min(4)]],
    });
  }

  ngOnInit(): void {
    this.myForm.reset({
      product: 'Laptop',
      price: 1590,
    });
  }

  validarCampos(value: string) {
    return (
      this.myForm.controls[value].errors && this.myForm.controls[value].touched
    );
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset();
    console.log(this.myForm.value);
  }
}
