export class User {
  public uid: string;
  public name: string;
  public email: string;

  constructor(obj: DataObj) {
    this.uid = (obj && obj.uid) || '';
    this.name = (obj && obj.name) || '';
    this.email = (obj && obj.email) || '';
  }
}

interface DataObj {
  uid: string;
  name: string;
  email: string;
}
