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

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static port = 8080;

  constructor(private http: HttpClient, private customerService: CustomerAPIImplService,
    private employeeService: EmployeeAPIImplService, private loanService: LoanAPIImplService,
    private reportService: ReportAPIImplService) { }

  // CUSTOMER
  getAllCustomers() {
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
    return this.employeeService.deleteEmployee(employee);
  }
  updateEmployee(employee: Employee): number {
    return this.employeeService.updateEmployee(employee);
  }

  // LOAN
  getAllLoans(): Loan[] {
    return this.loanService.getAllLoans();
  }
  getLoan(loan: Loan): Loan {
    return this.loanService.getLoan(loan);
  }
  addLoan(loan: Loan): number {
    return this.loanService.addLoan(loan);
  }
  deleteLoan(loan: Loan): number {
    return this.loanService.deleteLoan(loan);
  }
  updateLoan(loan: Loan): number {
    return this.loanService.updateLoan(loan);
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
