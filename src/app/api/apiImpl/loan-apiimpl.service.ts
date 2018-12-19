import { Injectable } from '@angular/core';
import { LoanAPI } from '../apiInterfaces/LoanAPI';
import { Loan } from 'src/app/Models/Loan';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Employee } from 'src/app/Models/Employee';
import { Customer } from 'src/app/Models/Customer';

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
    return null;
  }
  statusLoan(loan: Loan): number {
    return null;
  }
  approvedAmountLoan(loan: Loan): number {
    return null;
  }
}
