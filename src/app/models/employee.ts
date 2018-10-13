import { YearSalary } from "./yearSalary";

export class Employee {
    id: number;
    name: string;
    email: string;
    phone: string;
    salaries: YearSalary[] | undefined;
}