import { Customer } from './Customer';
import { Report } from './Report';

export class Loan {
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
}
