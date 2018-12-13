import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  _loggedIn = false;
  _type: string;

  get loggedIn(): boolean {
    return this.service._loggedIn;
  }

  get type(): string {
    return this.service.type;
  }
  constructor(private service: LoginService, private router: Router) {
    console.log('type: ' + this.service.type);
    if (this.service.type !== 'customer') {
      this.router.navigateByUrl('/invalidCredentials');
  }}

  ngOnInit() {
  }
  logout() {
    this.service.logOut(this.router);
  }
}
