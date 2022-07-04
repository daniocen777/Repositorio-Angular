import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'yd-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  cliente: Cliente = new Cliente();

  constructor() { }

  ngOnInit(): void {
  }

  create(): void {
    console.log('Guradando', this.cliente);
  }

}
