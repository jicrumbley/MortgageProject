import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  _loggedIn = false;
  _type: string;

  get loggedIn(): boolean {
    return this.service._loggedIn;
  }

  get type(): string {
    return this.service.type;
  }
  constructor(private service: LoginService, private router: Router) {  if (this.service.type !== 'admin') {
    this.router.navigateByUrl('/invalidCredentials');
  }}

  ngOnInit() {

  }

  logout() {
    this.service.logOut(this.router);
  }

}
