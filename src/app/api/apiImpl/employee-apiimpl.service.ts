import { Injectable } from '@angular/core';
import { EmployeeAPI } from '../apiInterfaces/EmployeeAPI';
import { Employee } from 'src/app/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAPIImplService implements EmployeeAPI {

  constructor() { }

  getEmployeeUrl: string;
  addEmployeeUrl: string;
  deleteEmployeeUrl: string;
  updateEmployeeUrl: string;
  getAllEmployeesUrl: string;

  getAllEmployees(): Employee[] {
    return null;
  }
  getEmployee(employee: Employee): Employee {
    return null;
  }
  addEmployee(employee: Employee): number {
    return null;
  }
  deleteEmployee(employee: Employee): number {
    return null;
  }
  updateEmployee(employee: Employee): number {
    return null;
  }
}
