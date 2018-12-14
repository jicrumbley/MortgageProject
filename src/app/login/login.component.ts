import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _loggedIn = false;
  _type: string;
  registerView = false;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    ssn: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    datePicker: new FormControl(''),
    phone: new FormControl(''),
  });

  get loggedIn(): boolean {
    return this.service._loggedIn;
  }

  get type(): string {
    return this.service.type;
  }


  constructor(private router: Router, private service: LoginService) { }

  ngOnInit() {
  }

  toggleViews() {
    this.registerView = !this.registerView;
  }


  loginSuccess(type: string) {
    console.log(type);
    this._loggedIn = this.service.logIn(type, this.router);
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    // check if login is correct
    // const myType = get type from db
    // this.loginSuccess(type);
  }

}
