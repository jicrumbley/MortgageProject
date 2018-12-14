import { Customer } from 'src/app/Models/Customer';
import { Observable } from 'rxjs';

export interface CustomerAPI {
    getCustomerUrl: string;
    addCustomerUrl: string;
    deleteCustomerUrl: string;
    updateCustomerUrl: string;
    getAllCustomersUrl: string;

    getAllCustomers(): Customer[];
    getCustomer(customer: Customer): Customer;
    addCustomer(customer: Customer): number;
    deleteCustomer(customer: Customer): number;
    updateCustomer(customer: Customer): number;
}

