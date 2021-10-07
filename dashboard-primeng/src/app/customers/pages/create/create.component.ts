import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() displayResponsive: boolean;
  @Input() customer: Customer = { name: '', email: '', age: 18 };
  @Output() hideDialog = new EventEmitter<boolean>();

  myForm: FormGroup;
  @Input() isUpdateEnable: boolean = false;

  constructor(private _fb: FormBuilder, private _store: Store<fromStore.CustomerModuleState>) {
    this.displayResponsive = false;
    this.myForm = this._fb.group({
      id: [this.customer?.id, [Validators.required]],
      name: [this.customer?.name, [Validators.required]],
      email: [this.customer?.email, [Validators.required]],
      age: [this.customer?.age, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  hideResponsiveDialog(): void {
    this.hideDialog.emit(false);
  }

  cancel(): void {
    this.displayResponsive = false;
  }

  save(myForm: FormGroup): void {
    let customerId = new Date().getTime();
    let newCustomer = myForm.value;
    newCustomer['id'] = customerId;
    if (newCustomer.name != null && newCustomer != undefined) {
      this._store.dispatch(new fromStore.AddCustomer(newCustomer));
    }
    this.cancel();
  }

  update(myForm: FormGroup): void {
    this._store.dispatch(new fromStore.UpdateCustomer(myForm.value));
    this.cancel();
  }

}
