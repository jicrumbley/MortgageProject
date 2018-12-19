import { Employee } from 'src/app/Models/Employee';

export interface EmployeeAPI {
    getEmployeeUrl: string;
    addEmployeeUrl: string;
    inactiveEmployeeUrl: string;
    activeEmployeeUrl: string;
    getAllEmployeesUrl: string;

    getAllEmployees(): Employee[];
    getEmployee(employee: Employee): Employee;
    addEmployee(employee: Employee): number;
    inactiveEmployee(employee: Employee): number;
    activeEmployee(employee: Employee): number;
}

