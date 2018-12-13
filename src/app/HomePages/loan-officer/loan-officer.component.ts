import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-officer',
  templateUrl: './loan-officer.component.html',
  styleUrls: ['./loan-officer.component.css']
})
export class LoanOfficerComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) { }
  _loggedIn = false;
  _type: string;

  get loggedIn(): boolean {
    return this.service._loggedIn;
  }

  get type(): string {
    return this.service.type;
  }
  ngOnInit() {
    if (this.service.type !== 'loanOfficer') {
      this.router.navigateByUrl('/invalidCredentials');
    }
  }
  logout() {
    this.service.logOut(this.router);
  }
}
