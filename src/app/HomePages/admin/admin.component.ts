import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  _loggedIn = false;
  _type: string;

  get loggedIn(): boolean {
    return this.loginService._loggedIn;
  }

  get type(): string {
    return this.loginService.type;
  }
  constructor(private loginService: LoginService, private router: Router, private api: ApiService) {
    if (this.loginService.type !== 'admin') {
      this.router.navigateByUrl('/invalidCredentials');
    }
  }

  ngOnInit() {

  }

  logout() {
    this.loginService.logOut(this.router);
  }

}
