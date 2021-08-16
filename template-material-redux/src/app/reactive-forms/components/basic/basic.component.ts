import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  validateName(): boolean {
    return (
      this.form?.controls.product?.invalid &&
      this.form?.controls.product?.touched
    );
  }

  validatePrice(): boolean {
    return (
      this.form?.controls.price?.touched &&
      this.form?.controls.price?.value < 15
    );
  }

  save(): void {
    console.log('Posteo correcto');
    this.form.resetForm({
      price: 15,
      stock: 0,
    });
  }
}
