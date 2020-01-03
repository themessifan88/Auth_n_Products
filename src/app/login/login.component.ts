import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';
import { oneCapLetterValidator } from '../validators/OneCapLetter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  submitted = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, oneCapLetterValidator()])
  });

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    console.log('form', this.loginForm);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.authenticate(this.loginForm.value)
      .then(result => {
        this.router.navigate(['/home']);
      }, error => {

      });
  }
}
