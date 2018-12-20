import { Injectable } from '@angular/core';
import { LoanAPI } from '../apiInterfaces/LoanAPI';
import { Loan } from 'src/app/Models/Loan';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Customer } from 'src/app/Models/Customer';
import { Employee } from 'src/app/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class LoanAPIImplService implements LoanAPI {

  constructor(private http: HttpClient) { }

  getLoanByCustUrl: string = "http://localhost" + ApiService.port + "/getLoanByCust";
  getLoanByEmpUrl: string = "http://localhost" + ApiService.port + "/getLoanByEmp";
  addLoanUrl: string = "http://localhost" + ApiService.port + "/addLoan";
  statusLoanUrl: string = "http://localhost" + ApiService.port + "/setStatus";
  approvedAmountLoanUrl: string = "http://localhost" + ApiService.port + "/setApprovedAmount";
  getAllLoansUrl: string = "http://localhost" + ApiService.port + "/getAllLoans";

  getAllLoans(): Loan[] {
    let list: Loan[] = [];
    try {
      // console.log('origin: ' + JSON.stringify((res as Customer[]))
      this.http.get(this.getAllLoansUrl).subscribe((res: any) => {
        for (let index = 0; index < res.length; index++) {
          list.push(new Loan(res[index]));
        }
      });
      console.log('list: ' + list);
    } catch (error) {
      console.log(error);
    }
    return list;

  }
  getLoanByCust(cust: Customer): Loan {
    let l: Loan;
    try{
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const params = new HttpParams().append('ssn', ''+cust.ssn);
      this.http.get(this.getLoanByCustUrl, {headers, params}).subscribe((res:any) => {
        l = new Loan(res);
      })
    }catch(error)
    {
      console.log(error);
    }
    return l;
  }
  getLoanByEmp(emp: Employee): Loan[] {
    let list: Loan[] = [];
    try {
      // console.log('origin: ' + JSON.stringify((res as Customer[]))
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const params = new HttpParams().append('eid', ''+emp.eid);
      this.http.get(this.getLoanByEmpUrl,  { headers, params }).subscribe((res: any) => {
        for (let index = 0; index < res.length; index++) {
          list.push(new Loan(res[index]));
        }
      });
      console.log('list: ' + list);
    } catch (error) {
      console.log(error);
    }
    return list;

  }
  addLoan(loan: Loan): number {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // const loanJsonObj = {
    //   "askedAmount": loan.askedAmount,
    //   "downPayment": loan.downPayment,
    //   "location": loan.location,
    //   "propertyType": loan.propertyType,
    //   "proofOfIncome": loan.proofOfIncome,
    //   "cust":  {cu},
    //   "rep": null,
    //   "status": loan.status
    // };
    this.http.post(this.addLoanUrl, JSON.stringify(loan), { headers }).subscribe();
    return 1;
    // {
    //   "rep": null,

    //   "cust": {
    //     "username": "test",
    //     "password": null,
    //     "ssn": 234432345,
    //     "fname": "Tom",
    //     "lname": "Test",
    //     "dob": "05-05-1970",
    //     "phone": "555-555-5555",
    //     "email": "ttest@gmail.com",
    //     "type": null
    //   },
    //   "downPayment": 2000,
    //     "location": "ATL",
    //     "propertyType": "house",
    //     "proofOfIncome": "myProofOfIncome",
    //     "status": "pending",
    //     "askedAmount": 4000
    // }


  }
  statusLoan(loan: Loan): number {
    this.http.post(this.statusLoanUrl, JSON.stringify(loan)).subscribe();
    return 1;
  }
  approvedAmountLoan(loan: Loan): number {
    this.http.post(this.approvedAmountLoanUrl, JSON.stringify(loan)).subscribe();

    return 1;
  }
}
