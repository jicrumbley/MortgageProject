import { Customer } from './Customer';
import { Report } from './Report';

export class Loan {
    cust: Customer;
    rep: Report = null;
    askedAmount: number;
    downPayment: number;
    location: string;
    propertyType: string;
    proofOfIncome: string;
    status: string;
    // json: string;

    // Customer cust, double askedAmount, double downPayment,
    //         String location, String propertyType, String proofOfIncome, String status

    constructor(jsonResponse: any) {
        // this.json = jsonResponse;
        this.askedAmount = jsonResponse.askedAmount;
        this.downPayment = jsonResponse.downPayment;
        this.location = jsonResponse.location;
        this.propertyType = jsonResponse.propertyType;
        this.proofOfIncome = jsonResponse.proofOfIncome;
        this.cust = new Customer(jsonResponse.cust);
        this.status = jsonResponse.status;
    }
}
