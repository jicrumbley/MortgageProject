import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api/api.service';
import { Customer } from '../Models/Customer';
import * as $ from 'jquery';


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
    passwordConfirm: new FormControl(''),
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

  constructor(private router: Router, private service: LoginService, private api: ApiService) { 
    api.getAllCustomers();
  }

  ngOnInit() {
  }

  toggleViews() {
    this.registerView = !this.registerView;
  }


  loginSuccess(type: string) {
    console.log(type);
    this._loggedIn = this.service.logIn(type, this.router);
  }

  onLoginSubmit() {
    console.log(this.loginForm.value);
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
  }

  checkIfPasswordsAreEqual(): boolean {
    if (this.registerForm.value.password === this.registerForm.value.passwordConfirm) {
      return true;
    }
    else return false;
  }

  onRegisterSubmit() {
    // register
    const newCustomer = new Customer({
      "username": this.registerForm.value.username,
      "password": this.registerForm.value.password,
      "ssn": this.registerForm.value.ssn,
      "fname": this.registerForm.value.fname,
      "lname": this.registerForm.value.lname,
      "dob": this.registerForm.value.dob,
      "phone": this.registerForm.value.phone
    });

    this.api.addCustomer(newCustomer);
    
  }

  checkIfUsernameExists() {

  }
  // check if login is correct
  // const myType = get type from db
  // this.loginSuccess(type);
}


