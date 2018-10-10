import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './models/employee';
import { tap, catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { YearSalary } from './models/yearSalary';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = environment.ApiBaseUrl;
  private employeesUrl = this.baseUrl + 'api/Employees';
  private salaryUrl = this.baseUrl + 'api/YearSalaries';

  constructor(private http: HttpClient) { }


  // #region EMPLOYEE


  /**
   * GET employees from the server
   */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        map(data => {
          this.log('fetched employees');
          return data;
        }),
        catchError(this.handleError('getEmployees()', []))
      );
  }

  /**
   * GET employee from the server
   * @param employeeId 
   */
  getEmployee(employeeId): Observable<Employee> {
    return this.http.get<Employee>(`${this.employeesUrl}/${employeeId}`)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError<Employee>(`getHero() id=${employeeId}`))
      );
  }

  /**
   * POST new employee to server
   */
  addEmployee(employee: Employee) {
    return this.http.post<Employee>(this.employeesUrl, employee, HTTP_OPTIONS)
      .pipe(
        tap((employee: Employee) => this.log(`added employee w/ id=${employee.id}`)),
        catchError(this.handleError<Employee>(`addEmployee() id=${employee.id}`))
      );
  }

  /**
   * PUT the employee to the server
   * @param employee
   */
  updateEmployee(employee: Employee) {
    // here I update only personal info about employee => no need to send salaries
    employee.salaries = [];
    console.log(JSON.stringify(employee));
    return this.http.put<Employee>(`${this.employeesUrl}/${employee.id}`, employee, HTTP_OPTIONS)
      .pipe(
        tap(_ => this.log(`updated employee id=${employee.id}`)),
        catchError(this.handleError<any>(`updateEmployee() id=${employee.id}`))
    );
  }

   /**
    * DELETE employee with this id
    */
  deleteEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;

    return this.http.delete<Employee>(`${this.employeesUrl}/${id}`, HTTP_OPTIONS).pipe(
      tap(_ => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>(`deleteEmployee() id=${id}`))
    );
  }

  // #endregion EMPLOYEE

  // #region SALARY

  /**
   * POST new yearSalary to server
   */
  addSalary(salary: YearSalary) {
    console.log(JSON.stringify(salary));
    return this.http.post<YearSalary>(this.salaryUrl, salary, HTTP_OPTIONS)
      .pipe(
        map((newRow: YearSalary) => {
          this.log(`added salary w/ year=${newRow.year}, idEmployee=${newRow.idEmployee}`);
          return newRow;
        }),
        catchError(this.handleError<YearSalary>(`addEmployee() year=${salary.year}, idEmployee=${salary.idEmployee}`))
      );
  }

  /**
   * PUT the salary to the server
   * @param salary 
   */
  updateSalary(salary: YearSalary, oldYear: number) {
    // if user doesn’t enter any value, that value will become "" (empty string)
    // here I set this value to 0, so it can be stored to db
    Object.keys(salary).forEach(key => {
      if(salary[key] === "") {
        salary[key] = 0;
      }
    });

    return this.http.put<YearSalary>(`${this.salaryUrl}/${oldYear}/${salary.idEmployee}`, salary, HTTP_OPTIONS)
      .pipe(
        map((updatedRow: YearSalary) => {
          this.log(`updated salary oldYear=${oldYear}, newYear=${updatedRow.year}, idEmployee=${updatedRow.idEmployee}`);
          return updatedRow;
        }),
        catchError(this.handleError<YearSalary>(`updateSalary() oldYear=${oldYear}, newYear=${salary.year}, idEmployee=${salary.idEmployee}`))
    );
  }

  /**
    * DELETE salary with this year and idEmployee
    */
   deleteSalary(salary: YearSalary): Observable<YearSalary> {
    return this.http.delete<YearSalary>(`${this.salaryUrl}/${salary.year}/${salary.idEmployee}`, HTTP_OPTIONS)
    .pipe(
      tap(_ => this.log(`deleted salary year=${salary.year}, idEmployee=${salary.idEmployee}`)),
      catchError(this.handleError<YearSalary>(`deleteSalary() year=${salary.year}, idEmployee=${salary.idEmployee}`))
    );
  }

  // #endregion SALARY

  getPosts(): Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`DataService: ${message}`);
  }
  
}
