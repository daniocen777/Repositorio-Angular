import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  miFormulario!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _validatorService: ValidatorService
  ) {
    this.miFormulario = this._fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this._validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this._validatorService.emailPattern),
        ],
      ],
      username: [
        '',
        [Validators.required, this._validatorService.validarStrider],
      ],
    });
  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Dani Ocean',
      email: 'daniocean@mail.com',
      username: 'No soy strider',
    });
  }

  validarCampo(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  grabar() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
