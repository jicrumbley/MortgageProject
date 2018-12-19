import { Injectable } from '@angular/core';
import { EmployeeAPI } from '../apiInterfaces/EmployeeAPI';
import { Employee } from 'src/app/Models/Employee';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAPIImplService implements EmployeeAPI {

  constructor(private http: HttpClient) { }

  getEmployeeUrl:string = "http://localhost" + ApiService.port + "/";
  addEmployeeUrl: string = "http://localhost" + ApiService.port + "/createEmployee";
  inactiveEmployeeUrl: string = "http://localhost" + ApiService.port + "/activeFalse";
  activeEmployeeUrl: string = "http://localhost" + ApiService.port + "/activeTrue";
  getAllEmployeesUrl: string = "http://localhost" + ApiService.port + "/getAllEmployees";

  getAllEmployees(): Employee[] {
    let list: Employee[] = [];
    try {
      // console.log('origin: ' + JSON.stringify((res as Customer[]))
      this.http.get(this.getAllEmployeesUrl).subscribe((res: any) => {
        for (let index = 0; index < res.length; index++) {
          list.push(new Employee(res[index]));
        }
      });
      console.log('list: ' + list);
    } catch (error) {
      console.log(error);
    }
    return list;

  }

  //NOT USED
  getEmployee(employee: Employee): Employee {
    return null;
  }
  addEmployee(employee: Employee): number {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(this.addEmployeeUrl, JSON.stringify(employee), { headers }).subscribe();
    return 1;
  }
  inactiveEmployee(employee: Employee): number {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    employee.active = false;
    this.http.post(this.inactiveEmployeeUrl, JSON.stringify(employee), { headers}).subscribe();
    return 1;
  }
  activeEmployee(employee: Employee): number {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    employee.active = true;
    this.http.post(this.activeEmployeeUrl, JSON.stringify(employee), { headers}).subscribe();
    return 1;
  }
}
