import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _loggedIn = false;
  _type: string;

  get loggedIn(): boolean {
    return this.service._loggedIn;
  }

  getType(): string {
    return this.service.type;
  }

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit( ) {
  }


  loginSuccess(type: string) {
    console.log(type);
    this._loggedIn = this.service.logIn(type, this.router);
  }

}
