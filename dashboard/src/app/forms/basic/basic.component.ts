import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  myForm!: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      product: new FormControl("Laptop HP"),
    });
  }

  ngOnInit(): void {}
}
