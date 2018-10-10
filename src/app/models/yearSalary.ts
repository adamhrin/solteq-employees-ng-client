import { ITableDataItem } from "../ITableDataItem";

export class YearSalary implements ITableDataItem {

    //which year it is
    year: number;

    //which employee it is
    idEmployee: number;

    //salaries for each month in this year
    jan: number;
    feb: number;
    mar: number;
    apr: number;
    may: number;
    jun: number;
    jul: number;
    aug: number;
    sep: number;
    okt: number;
    nov: number;
    dec: number;
}