import { Injectable } from '@angular/core';
import { CustomerAPI } from '../apiInterfaces/customerAPI';
import { Customer } from 'src/app/Models/Customer';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CustomerAPIImplService implements CustomerAPI {

  constructor(private http: HttpClient) { }

  getCustomerUrl = 'http://localhost:' + ApiService.port + '/...';
  addCustomerUrl = 'http://localhost:' + ApiService.port + '/...';
  deleteCustomerUrl = 'http://localhost:' + ApiService.port + '/...';
  updateCustomerUrl = 'http://localhost:' + ApiService.port + '/...';
  getAllCustomersUrl = 'http://localhost:' + ApiService.port + '/...';


  //  // CUSTOMER
  //  getCustomer() {
  //   // return this.http.get('/api/contacts').map(result => JSON.stringify(result)).subscribe(result => this.result = result);
  //   return this.http.get('/api/contacts');
  // }

  // addCustomer(newCustomer: Customer) {
  //   console.log(`adding customer...`);
  //   const headers = new HttpHeaders()
  //     // .set('Authorization', 'my-auth-token')
  //     .set('Content-Type', 'application/json');
  //   return this.http.post('/api/contacts/add', JSON.stringify(newCustomer), { headers }).subscribe(data => {
  //     console.log('customer added ' + console.log(data));
  //   }
  //   );
  // }

  // delete(contact: Customer) {
  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/json');
  //   return this.http.post('/api/contacts/delete', JSON.stringify(contact), { headers }).subscribe();
  // }
  getAllCustomers(): Customer[] {
    return this.http.get<Customer[]>(this.getAllCustomersUrl).map(item => {
      return new Customer(
        item.username,
        item.password,
        item.ssn,
        item.fname,
        item.lname,
        item.date,
        item.phone
      );
    });

    // subscribe(data => { this.notes = data; });
  }

  getCustomer(customer: Customer): Customer {
    return null;
  }
  addCustomer(customer: Customer): number {
    return null;
  }
  deleteCustomer(customer: Customer): number {
    return null;
  }
  updateCustomer(customer: Customer): number {
    return null;
  }
}
