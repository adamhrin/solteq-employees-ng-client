import { YearSalary } from "./yearSalary";
import { ITableDataItem } from "../ITableDataItem";

export class Employee implements ITableDataItem {
    id: number;
    name: string;
    email: string;
    phone: string;
    salaries: YearSalary[] | undefined;

    constructor(employeeResponse?: any) {
        if (employeeResponse) {
            this.id = employeeResponse.id;
            this.name = employeeResponse.name;
            this.email = employeeResponse.email;
            this.phone = employeeResponse.phone;
            this.salaries = [];
            let i = 0;
            employeeResponse.salaries.forEach(yearSalary => {
                this.salaries[i] = new YearSalary(yearSalary);
                i++;
            });
        }
    }
    
    getSearchString(): string {
        console.log("getSearchString() from Employee");
        return this.name + this.email + this.phone;
    }
}