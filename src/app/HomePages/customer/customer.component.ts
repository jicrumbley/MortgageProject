import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { Loan } from 'src/app/Models/Loan';
import { Customer } from 'src/app/Models/Customer';
import { FormGroup, FormControl } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),
      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(0, style({ opacity: 0 })))
    ])
  ]
})
export class CustomerComponent implements OnInit {
  // Dummy data
  loans = [{ 'loanId': 1, 'status': 'Pending' },
  { 'loanId': 2, 'status': 'Pending' },
  { 'loanId': 3, 'status': 'Approved' },
  { 'loanId': 4, 'status': 'Denied' }];

  loanModel = `export class Loan {
    cust: Customer;
    rep: Report;
    askedAmount: number;
    downPayment: number;
    location: string;
    propertyType: string;
    proofOfIncome: string;
    status: string;

    constructor(jsonResponse: any) {
        this.askedAmount = jsonResponse.askedAmount;
        this.downPayment = jsonResponse.downPayment;
        this.location = jsonResponse.location;
        this.propertyType = jsonResponse.propertyType;
        this.proofOfIncome = jsonResponse.proofOfIncome;
        this.cust = new Customer(jsonResponse.cust);
        this.rep = new Report(jsonResponse.rep);
        this.status = jsonResponse.status;
    }
}`;

  loanForm = new FormGroup({
    // cust: Customer;
    // rep: Report;
    askedAmount: new FormControl(''),
    downPayment: new FormControl(''),
    location: new FormControl(''),
    propertyType: new FormControl(''),
    proofOfIncome: new FormControl(''),
    // status: string;
  });

  _loggedIn = false;
  _type: string;
  tempLoan: Loan;
  showLoansView = true;
  applyView = true;

  get loggedIn(): boolean {
    return this.loginService._loggedIn;
  }

  get type(): string {
    return this.loginService.type;
  }
  constructor(private loginService: LoginService, private router: Router, private api: ApiService) {
    console.log('type: ' + this.loginService.type);
    if (this.loginService.type !== 'customer') {
      this.router.navigateByUrl('/invalidCredentials');
    }
  }

  // TODO: get this customers loans from database
  ngOnInit() {
    let cust1: Customer = new Customer(`{
      "username" : "username1"
      "password" : "pword123"
      "ssn" : "2231121121"
      "fname" : "fnamehere"
      "lname" : "lnamehere"
      "dob" : "dobhere"
      "phone" : "phonehere"
    }`);

  }
  logout() {
    this.loginService.logOut(this.router);
  }

  tempLoanStore(loan: Loan) {
    console.log(loan);
    this.tempLoan = loan;
  }

  // todo: Store this users loan into the database
  submit() {
    let myLoan = new Loan({
      "askedAmount": this.loanForm.value.askedAmount,
      "location": this.loanForm.value.location,
      "propertyType": this.loanForm.value.propertyType,
      "proofOfIncome": this.loanForm.value.proofOfIncome,
      "cust": this.api.getCurrentUser(),
      "status": "pending"
    });

    // this.api.addLoan();

    // "downPayment": 2000,
    // "location": "ATL",
    // "propertyType": "house",
    // "proofOfIncome": "myProofOfIncome",
    // "status": "pending",
  }
}
