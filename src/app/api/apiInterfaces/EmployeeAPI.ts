import { Employee } from 'src/app/Models/Employee';

export interface EmployeeAPI {
    getEmployeeUrl: string;
    addEmployeeUrl: string;
    deleteEmployeeUrl: string;
    updateEmployeeUrl: string;
    getAllEmployeesUrl: string;

    getAllEmployees(): Employee[];
    getEmployee(employee: Employee): Employee;
    addEmployee(employee: Employee): number;
    deleteEmployee(employee: Employee): number;
    updateEmployee(employee: Employee): number;
}

