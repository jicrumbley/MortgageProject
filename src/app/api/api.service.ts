import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../Models/Customer';
import { CustomerAPIImplService } from './apiImpl/customer-apiimpl.service';
import { EmployeeAPIImplService } from './apiImpl/employee-apiimpl.service';
import { LoanAPIImplService } from './apiImpl/loan-apiimpl.service';
import { ReportAPIImplService } from './apiImpl/report-apiimpl.service';
import { Employee } from '../Models/Employee';
import { Report } from '../Models/Report';
import { Loan } from '../Models/Loan';
import { forEach } from '@angular/router/src/utils/collection';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static port = 8090;
  currentUser: any = null;
  allCustomers: Customer[] = [];
  constructor(private http: HttpClient, private customerService: CustomerAPIImplService,
    private employeeService: EmployeeAPIImplService, private loanService: LoanAPIImplService,
    private reportService: ReportAPIImplService) {
    this.allCustomers = this.getAllCustomers();
  }

  // private extractData(res: Response) {
  //   if (res.status < 200 || res.status >= 300) {
  //     throw new Error('Bad response status: ' + res.status);
  //   }
  //   const body = res.json();
  //   return body.data || {};
  // }
  // CHECK LOGIN
  checkLogin(username: string, password: string): string {
    let type: string = 'invalid';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post("http://localhost" + ApiService.port + "/login",
      "{'username': " + username
      + ", 'password: " + password + "}",
      { headers }).subscribe((res: any) => { type = res });

    //check if failure
    if (type === 'invalid') {
      return type;
    }


    //assign currentUser
    if (type === 'customer') {
      this.currentUser = this.customerService.getCustomerByEmail(username);
    }


    return type;
  }

  getCurrentUser() {
    return this.currentUser;
  }


  // CUSTOMER
  getAllCustomers() {
    console.log(this.customerService.getAllCustomers());
    return this.customerService.getAllCustomers();
  }
  getCustomer(customer: Customer): Customer {
    return this.customerService.getCustomer(customer);
  }
  addCustomer(customer: Customer): number {
    return this.customerService.addCustomer(customer);
  }
  deleteCustomer(customer: Customer): number {
    return this.customerService.deleteCustomer(customer);
  }
  updateCustomer(customer: Customer): number {
    return this.customerService.updateCustomer(customer);
  }

  // EMPLOYEE
  getAllEmployees(): Employee[] {
    return this.employeeService.getAllEmployees();
  }
  getEmployee(employee: Employee): Employee {
    return this.employeeService.getEmployee(employee);
  }
  addEmployee(employee: Employee): number {
    return this.employeeService.addEmployee(employee);
  }
  deleteEmployee(employee: Employee): number {
    return this.employeeService.inactiveEmployee(employee);
  }
  updateEmployee(employee: Employee): number {
    return this.employeeService.activeEmployee(employee);
  }

  // LOAN
  getAllLoans(): Loan[] {
    return this.loanService.getAllLoans();
  }
  getLoanByCust(cust: Customer): Loan {
    return this.loanService.getLoanByCust(cust);
  }
  getLoanByEmp(emp: Employee): Loan[] {
    return this.loanService.getLoanByEmp(emp);
  }
  addLoan(loan: Loan): number {
    return this.loanService.addLoan(loan);
  }
  statusLoan(loan: Loan): number {
    return this.loanService.statusLoan(loan);
  }
  approvedAmountLoan(loan: Loan): number {
    return this.loanService.approvedAmountLoan(loan);
  }

  // REPORT
  getAllReports(): Report[] {
    return this.reportService.getAllReports();
  }
  getReport(report: Report): Report {
    return this.reportService.getReport(report);
  }
  addReport(report: Report): number {
    return this.reportService.addReport(report);
  }
  deleteReport(report: Report): number {
    return this.reportService.deleteReport(report);
  }
  updateReport(report: Report): number {
    return this.reportService.updateReport(report);
  }

}
