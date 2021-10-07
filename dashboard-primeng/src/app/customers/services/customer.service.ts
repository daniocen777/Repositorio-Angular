import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _apiUrl = 'http://localhost:3000/usuarios';
  public httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain'
    })
  };

  constructor(private _http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this._http.get<Customer[]>(`${this._apiUrl}`);
  }

  update(customer: Customer): Observable<any> {
    return this._http.put(`${this._apiUrl}/${customer.id}`, JSON.stringify(customer), this.httpHeader);
  }

  addCustomer(customer: Customer): Observable<any> {
    return this._http.post(`${this._apiUrl}`, JSON.stringify(customer), this.httpHeader);
  }
}