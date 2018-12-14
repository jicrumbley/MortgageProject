import { Loan } from 'src/app/Models/Loan';

export interface LoanAPI {
    getLoanUrl: string;
    addLoanUrl: string;
    deleteLoanUrl: string;
    updateLoanUrl: string;
    getAllLoansUrl: string;

    getAllLoans(): Loan[];
    getLoan(loan: Loan): Loan;
    addLoan(loan: Loan): number;
    deleteLoan(loan: Loan): number;
    updateLoan(loan: Loan): number;
}

