import {Employee} from './employee';
import {Department} from './department'
export class EmployeeDetails implements Employee
{   
        fname:string;
        lname:string;
        sal:number;
        dept:Department;

        constructor(f:string,l:string,sal:number,role:string){
            this.fname=f;
            this.lname=l;
            this.sal=sal;
            this.dept=new Department(role);
        }

        Display(){
            console.log(`
                -----Employee Details------------
                First Name  :: ${this.fname}
                Last Name   :: ${this.lname}
                Salary      :: ${this.sal}
                Department  :: ${this.dept.getRole()}
            `)
        }
}
