import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection-officer',
  templateUrl: './inspection-officer.component.html',
  styleUrls: ['./inspection-officer.component.css']
})
export class InspectionOfficerComponent implements OnInit {
  _loggedIn = false;
  _type: string;

  get loggedIn(): boolean {
    return this.service._loggedIn;
  }

  get type(): string {
    return this.service.type;
  }
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.service.type !== 'inspectionOfficer') {
      this.router.navigateByUrl('/invalidCredentials');
    }
  }
  logout() {
    this.service.logOut(this.router);
  }
}
