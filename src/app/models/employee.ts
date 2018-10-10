import { YearSalary } from "./yearSalary";
import { ITableDataItem } from "../ITableDataItem";

export class Employee implements ITableDataItem {
    id: number;
    name: string;
    email: string;
    phone: string;
    salaries: YearSalary[] | undefined;
    
    getSearchString(): string {
        console.log("getSearchString() from Employee");
        return this.name + this.email + this.phone;
    }
}