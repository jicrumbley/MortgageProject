import { Loan } from 'src/app/Models/Loan';

export interface LoanAPI {
    getLoanByCustUrl: string;
    getLoanByEmpUrl: string;
    addLoanUrl: string;
    statusLoanUrl: string;
    approvedAmountLoanUrl: string;
    getAllLoansUrl: string;

    getAllLoans(): Loan[];
    getLoanByCust(loan: Loan): Loan;
    getLoanByEmp(loan: Loan): Loan;
    addLoan(loan: Loan): number;
    statusLoan(loan: Loan): number;
    approvedAmountLoan(loan: Loan): number;
}

