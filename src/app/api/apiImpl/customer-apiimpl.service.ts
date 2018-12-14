import { Injectable } from '@angular/core';
import { CustomerAPI } from '../apiInterfaces/customerAPI';
import { Customer } from 'src/app/Models/Customer';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CustomerAPIImplService implements CustomerAPI {

  constructor(private http: HttpClient) { }

  getCustomerUrl = 'http://localhost:' + ApiService.port + '/...';
  addCustomerUrl = 'http://localhost:' + ApiService.port + '/register';
  deleteCustomerUrl = 'http://localhost:' + ApiService.port + '/...';
  updateCustomerUrl = 'http://localhost:' + ApiService.port + '/...';
  getAllCustomersUrl = 'http://localhost:' + ApiService.port + '/getAllCustomers';


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
    let list: Customer[] = [];
    try {
      // console.log('origin: ' + JSON.stringify((res as Customer[]))
      this.http.get(this.getAllCustomersUrl).subscribe((res: any) => {
        for (let index = 0; index < res.length; index++) {
          list.push(new Customer(res[index]));
        }
      });
      console.log('list: ' + list);
    } catch (error) {
      console.log(error);
    }
    return list;

  }

  // NOT USED
  getCustomer(customer: Customer): Customer {
    this.http.get(this.getAllCustomersUrl).subscribe((res: any) => { customer = res; });
    return customer;
  }

  // register
  addCustomer(customer: Customer): number {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(this.addCustomerUrl, JSON.stringify(customer), { headers }).subscribe();
    return 1;
  }
  // delete
  deleteCustomer(customer: Customer): number {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(this.addCustomerUrl, JSON.stringify(customer), { headers }).subscribe();
    return 1;
    }

  updateCustomer(customer: Customer): number {
    return null;
  }
  
}
