export class IngresoEgreso {
  uid?: string;
  descripcion: string;
  monto: number;
  tipo: string;

  constructor(obj: DataObj) {
    /* this.uid = (obj && obj.uid) || ''; */
    this.descripcion = (obj && obj.descripcion) || '';
    this.monto = (obj && obj.monto) || 0.0;
    this.tipo = (obj && obj.tipo) || '';
  }
}

interface DataObj {
  uid: string;
  descripcion: string;
  monto: number;
  tipo: string;
}
