import { ITableDataItem } from "../ITableDataItem";

export class YearSalary implements ITableDataItem {
    


    //which year it is
    year: number;

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

    constructor(yearSalaryResponse?: any) {
        if(yearSalaryResponse) {
            this.year = yearSalaryResponse.year;
            this.jan = yearSalaryResponse.jan;
            this.feb = yearSalaryResponse.feb;
            this.mar = yearSalaryResponse.mar;
            this.apr = yearSalaryResponse.apr;
            this.may = yearSalaryResponse.may;
            this.jun = yearSalaryResponse.jun;
            this.jul = yearSalaryResponse.jul;
            this.aug = yearSalaryResponse.aug;
            this.sep = yearSalaryResponse.sep;
            this.okt = yearSalaryResponse.okt;
            this.nov = yearSalaryResponse.nov;
            this.dec = yearSalaryResponse.dec;
        }
    }
    
    getSearchString() {
        console.log("getSearchString() from YearSalary");
        return this.year + 
            " " + this.jan +
            " " + this.feb +
            " " + this.mar +
            " " + this.apr +
            " " + this.may +
            " " + this.jun +
            " " + this.jul +
            " " + this.aug +
            " " + this.sep +
            " " + this.okt +
            " " + this.nov +
            " " + this.dec;
    }
}