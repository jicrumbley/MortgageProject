export class Employee {
    eid: number;
    role: string;
    fname: string;
    lname: string;
    active: boolean;

constructor(jsonResponse: any) {
    this.eid = jsonResponse.eid;
    this.role = jsonResponse.role;
    this.fname = jsonResponse.fname;
    this.lname = jsonResponse.lname;
}

}
