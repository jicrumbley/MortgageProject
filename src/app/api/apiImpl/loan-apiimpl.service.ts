import { Injectable } from '@angular/core';
import { LoanAPI } from '../apiInterfaces/LoanAPI';
import { Loan } from 'src/app/Models/Loan';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanAPIImplService implements LoanAPI {

  constructor() { }

  getLoanByCustUrl: string = "http://localhost" + ApiService.port + "/getLoanByCust";
  getLoanByEmpUrl: string = "http://localhost" + ApiService.port + "/getLoanByEmp";
  addLoanUrl: string = "http://localhost" + ApiService.port + "/addLoan";
  statusLoanUrl: string = "http://localhost" + ApiService.port + "/setStatus";
  approvedAmountLoanUrl: string = "http://localhost" + ApiService.port + "/setApprovedAmount";
  getAllLoansUrl: string = "http://localhost" + ApiService.port + "/getAllLoans";

  getAllLoans(): Loan[] {
    return null;
  }
  getLoanByCust(loan: Loan): Loan {
    return null;
  }
  getLoanByEmp(loan: Loan): Loan {
    return null;
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
