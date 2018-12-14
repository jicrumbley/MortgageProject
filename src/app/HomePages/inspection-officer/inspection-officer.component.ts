import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-inspection-officer',
  templateUrl: './inspection-officer.component.html',
  styleUrls: ['./inspection-officer.component.css']
})
export class InspectionOfficerComponent implements OnInit {
  _loggedIn = false;
  _type: string;

  get loggedIn(): boolean {
    return this.loginService._loggedIn;
  }

  get type(): string {
    return this.loginService.type;
  }
  constructor(private loginService: LoginService, private router: Router, private api: ApiService) { }

  ngOnInit() {
    if (this.loginService.type !== 'inspectionOfficer') {
      this.router.navigateByUrl('/invalidCredentials');
    }
  }
  logout() {
    this.loginService.logOut(this.router);
  }
}
