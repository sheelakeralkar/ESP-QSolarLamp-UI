import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm = this.formBuilder.group({
  email: ['', Validators.required, Validators.email],
  password: ['', Validators.required, Validators.minLength(8), Validators.maxLength(25), Validators.pattern('[a-zA-Z0-9]*'), Validators.pattern('[!@#$%^&*(),.?":{}|<>]')]
});

constructor(private formBuilder: FormBuilder){}
}
