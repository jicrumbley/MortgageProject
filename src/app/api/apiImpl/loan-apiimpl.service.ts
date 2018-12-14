import { Injectable } from '@angular/core';
import { LoanAPI } from '../apiInterfaces/LoanAPI';
import { Loan } from 'src/app/Models/Loan';

@Injectable({
  providedIn: 'root'
})
export class LoanAPIImplService implements LoanAPI {

  constructor() { }

  getLoanUrl: string;
  addLoanUrl: string;
  deleteLoanUrl: string;
  updateLoanUrl: string;
  getAllLoansUrl: string;

  getAllLoans(): Loan[] {
    return null;
  }
  getLoan(loan: Loan): Loan {
    return null;
  }
  addLoan(loan: Loan): number {
    return null;
  }
  deleteLoan(loan: Loan): number {
    return null;
  }
  updateLoan(loan: Loan): number {
    return null;
  }
}
