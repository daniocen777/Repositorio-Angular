import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'yd-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email'];
  dataSource = new MatTableDataSource<Cliente>();
  /* clientes: Cliente[] = []; */

  constructor(private _clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this._clienteService.getClientes().subscribe(
      (data: Cliente[]) => {
        this.dataSource.data = data;
      }
    );

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
