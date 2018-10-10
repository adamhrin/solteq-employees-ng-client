export class SearchHelper {
    static getSearchStringForEmployee(emp: any): string {
        //TOOD
        var s = emp.year;
        console.log("search string for employee = " + s);
        return s;
    }

    static getSearchStringForYearSalary(sal: any): string {
        //TOOD
        var s = sal.id + sal.name + sal.email + sal.year;
        console.log("search string for year salary = " + s);
        return s;
    }


} 