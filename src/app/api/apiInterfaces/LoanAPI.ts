import { Loan } from 'src/app/Models/Loan';
import { Employee } from 'src/app/Models/Employee';
import { Customer } from 'src/app/Models/Customer';

export interface LoanAPI {
    getLoanByCustUrl: string;
    getLoanByEmpUrl: string;
    addLoanUrl: string;
    statusLoanUrl: string;
    approvedAmountLoanUrl: string;
    getAllLoansUrl: string;

    getAllLoans(): Loan[];
    getLoanByCust(cust: Customer): Loan;
    getLoanByEmp(emp: Employee): Loan[];
    addLoan(loan: Loan): number;
    statusLoan(loan: Loan): number;
    approvedAmountLoan(loan: Loan): number;
}

