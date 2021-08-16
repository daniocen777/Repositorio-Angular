import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  validarStrider(control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    // console.log(valor);
    if (valor === 'strider') {
      // Error
      return {
        mensaje: 'Error - No puede ser strider',
      };
    }
    return null;
  }
}
