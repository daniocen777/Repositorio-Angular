import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  maxDate: Date;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    this._authService.registerUser({
      email: form.value.email,
      password: form.value.password,
    });
  }
}
