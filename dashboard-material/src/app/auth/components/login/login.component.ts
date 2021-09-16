import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  private validateLogin(user: User) {
    if ((user.username === 'admin', user.password === 'admin')) {
      this._router.navigate(['/users']);
    }
  }

  submit(): void {
    if (this.form.valid) {
      this.validateLogin(this.form.value);
    }
  }
}
