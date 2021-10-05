import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() displayResponsive: boolean;
  @Input() customer: Customer = { name: '', email: '', age: 0 };
  @Output() hideDialog = new EventEmitter<boolean>();

  myForm: FormGroup;
  @Input() isUpdateEnable: boolean = false;

  constructor(private _fb: FormBuilder) {
    this.displayResponsive = false;
    this.myForm = this._fb.group({
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

  save(): void {
    console.log('GUARDAR:', this.customer);
    this.cancel();
  }

  update(): void {
    console.log('ACTUALIZAR:', this.customer);
    this.cancel();
  }

}
