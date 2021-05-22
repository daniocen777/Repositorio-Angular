import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  maxDate: Date;
  loginForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private _snackBar: MatSnackBar
  ) {
    /* this._snackBar.open('LOGIN', null, {
      duration: 2000,
    }); */
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }

  onSubmit() {
    this._authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    });
  }
}
