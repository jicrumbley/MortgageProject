import { Injectable } from '@angular/core';
import { longStackSupport } from 'q';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _loggedIn = false;
  type: string;
  constructor() { }

  logIn(type: string, router: Router): boolean {
    switch (type) {
      case 'customer':
        router.navigateByUrl('/customerHome'); this._loggedIn = true; this.type = 'customer'; return this._loggedIn;
      case 'admin':
        router.navigateByUrl('/adminHome'); this._loggedIn = true; this.type = 'admin'; return this._loggedIn;
      case 'loanOfficer':
        router.navigateByUrl('/loanOfficerHome'); this._loggedIn = true; this.type = 'loanOfficer'; return this._loggedIn;
      case 'inspectionOfficer':
        router.navigateByUrl('/inspectionOfficerHome');
        this._loggedIn = true; this.type = 'inspectionOfficer'; return this._loggedIn;
      default:
        this._loggedIn = false; return this._loggedIn;
    }
  }

  logOut(router: Router) {
    this._loggedIn = false;
    this.type = null;
    router.navigateByUrl('/');
  }

}

