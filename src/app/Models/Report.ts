import { Employee } from './Employee';

export class Report {
    loanId: number;
    inspectionOfficerId: number;
    // emp: Employee;
    reportData: string;
    constructor(jsonResponse: any) {
        this.loanId = jsonResponse.eid;
        this.inspectionOfficerId = jsonResponse.role;
        this.reportData = jsonResponse.fname;
        // this.emp = jsonResponse.emp;
    }
}
