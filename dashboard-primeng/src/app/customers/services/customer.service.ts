import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    console.log('¿HAY DATA?', this._http.get<Customer[]>(`http://localhost:3000/usuarios`));
    return this._http.get<Customer[]>(`http://localhost:3000/usuarios`);
  }
}