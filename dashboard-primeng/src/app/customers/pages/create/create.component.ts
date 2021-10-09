import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { Customer } from '../../models/customer.model';
import { ValidatorsService } from 'src/app/shared/validator/validators.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() displayResponsive: boolean;
  @Input() customer: Customer = { name: '', email: '', age: 18 };
  @Input() isUpdateEnable: boolean = false;
  @Output() hideDialog = new EventEmitter<boolean>();

  myForm: FormGroup;

  constructor(private _fb: FormBuilder, private _store: Store<fromStore.CustomerModuleState>,
    private _validatorsService: ValidatorsService) {
    this.displayResponsive = false;
    this.myForm = this._fb.group({
      id: [this.customer?.id, [Validators.required]],
      name: [this.customer?.name, [Validators.required, Validators.pattern(this._validatorsService.namePattern)]],
      email: [this.customer?.email, [Validators.required, Validators.pattern(this._validatorsService.emailPattern)]],
      age: [this.customer?.age, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  hideResponsiveDialog(): void {
    this.hideDialog.emit(false);
  }

  validateField(field: string): boolean | undefined {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  get emailErrorsMessages(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'El correo es obligatorio';
    } else if (errors?.pattern) {
      return 'El correo no tiene un formato válido';
    }
    return '';
  }

  /* validateEmail(): boolean | undefined {
    return this.myForm.get('email')?.errors?.required && this.myForm.get('email')?.touched;
  }

  validateEmailPattern(): boolean | undefined {
    return this.myForm.get('email')?.errors?.pattern && this.myForm.get('email')?.touched;
  } */

  cancel(): void {
    this.displayResponsive = false;
    console.log('Canelassadaadsad');
  }

  save(myForm: FormGroup): void {
    let customerId = new Date().getTime();
    let newCustomer = myForm.value;
    newCustomer.id = customerId;

    /* if (newCustomer.id === null) {
      console.log('CLIENTE NO HAY');
    } else {
      console.log('CLIENTE', newCustomer.id);
    } */
    if (newCustomer.name != null && newCustomer != undefined) {
      this._store.dispatch(new fromStore.AddCustomer(newCustomer));
    } else {

    }
    this.cancel();
  }

  update(myForm: FormGroup): void {
    this._store.dispatch(new fromStore.UpdateCustomer(myForm.value));
    this.cancel();
  }

  submit(): void {
    if (this.myForm.valid) {
      if (this.isUpdateEnable) {
        this.update(this.myForm);
      } else {
        this.save(this.myForm);
      }
      this.myForm.markAsPristine();
      this.myForm.markAsUntouched();
    } else {
      this.myForm.markAllAsTouched();

      console.log('FORMULARIO INVÁLIDO');
    }
  }

}
