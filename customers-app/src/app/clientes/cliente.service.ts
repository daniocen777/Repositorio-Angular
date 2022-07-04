import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndpoint: string = 'http://localhost:8090/api/clientes';

  constructor(private _http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this._http.get<Cliente[]>(`${this.urlEndpoint}/all`);
  }
}
