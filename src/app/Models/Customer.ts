export class Customer {
    public username: string;
    public password: string;
    public ssn: number;
    public fname: string;
    public lname: string;
    public dob: Date;
    public phone: number;
    // constructor(public username: string,
    //     public password: string,
    //     public ssn: number,
    //     public fname: string,
    //     public lname: string,
    //     public dob: Date,
    //     public phone: number) {
    // }

    constructor(jsonResponse: any) {
        this.username = jsonResponse.username;
        this.password = jsonResponse.password;
        this.ssn = jsonResponse.ssn;
        this.fname = jsonResponse.fname;
        this.lname = jsonResponse.lname
        this.dob = jsonResponse.dob
        this.phone = jsonResponse.phone
    }

}
