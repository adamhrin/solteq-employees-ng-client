import { YearSalary } from "./yearSalary";
import { ITableDataItem } from "../ITableDataItem";

export class Employee implements ITableDataItem {
    id: number;
    name: string;
    email: string;
    phone: string;
    salaries: YearSalary[] | undefined;
}