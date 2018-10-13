import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './models/employee';
import { tap, catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { YearSalary } from './models/yearSalary';
import { User } from './models/user';
import { TokenHolder } from './models/tokenHolder';
import * as jwt_decode from 'jwt-decode';

const HTTP_OPTIONS = {      
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private httpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    })
  };

  private baseUrl = environment.ApiBaseUrl;
  private employeesUrl = this.baseUrl + 'api/Employees';
  private salaryUrl = this.baseUrl + 'api/YearSalaries';
  private tokenUrl = this.baseUrl + 'api/Token';


  constructor(private http: HttpClient) { }
  

  // #region EMPLOYEE


  /**
   * GET employees from the server
   */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl, this.httpOptionsAuth)
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
    return this.http.get<Employee>(`${this.employeesUrl}/${employeeId}`, this.httpOptionsAuth)
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
    return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptionsAuth)
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
    return this.http.put<Employee>(`${this.employeesUrl}/${employee.id}`, employee, this.httpOptionsAuth)
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

    return this.http.delete<Employee>(`${this.employeesUrl}/${id}`, this.httpOptionsAuth).pipe(
      tap(_ => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>(`deleteEmployee() id=${id}`))
    );
  }

  // #endregion EMPLOYEE




  // #region SALARY


  /**
   * GET all years in db 
   */
  getAllYears(): Observable<any[]> {
    return this.http.get<any>(`${this.salaryUrl}/allYears`, this.httpOptionsAuth).
    pipe(
      map(data => {
        this.log('fetched all years');
        return data;
      }),
      catchError(this.handleError('getAllYears()', []))
    )
  }

  /**
   * GET average salary 
   */ 
  getAverageMonthsSalary(year): Observable<any[]> {
    return this.http.get<any[]>(`${this.salaryUrl}/average/${year}`, this.httpOptionsAuth)
      .pipe(
        map(data => {
          this.log('fetched average months salary');
          return data;
        }),
        catchError(this.handleError('getAverageMonthsSalary()', []))
      );
  }

  /**
   * POST new yearSalary to server
   */
  addSalary(salary: YearSalary): Observable<YearSalary> {
    return this.http.post<YearSalary>(this.salaryUrl, salary, this.httpOptionsAuth)
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
  updateSalary(salary: YearSalary, oldYear: number): Observable<YearSalary> {
    // if user doesn’t enter any value, that value will become "" (empty string)
    // here I set this value to 0, so it can be stored to db
    Object.keys(salary).forEach(key => {
      if(salary[key] === "") {
        salary[key] = 0;
      }
    });

    return this.http.put<YearSalary>(`${this.salaryUrl}/${oldYear}/${salary.idEmployee}`, salary, this.httpOptionsAuth)
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
    return this.http.delete<YearSalary>(`${this.salaryUrl}/${salary.year}/${salary.idEmployee}`, this.httpOptionsAuth)
    .pipe(
      tap(_ => this.log(`deleted salary year=${salary.year}, idEmployee=${salary.idEmployee}`)),
      catchError(this.handleError<YearSalary>(`deleteSalary() year=${salary.year}, idEmployee=${salary.idEmployee}`))
    );
  }

  // #endregion SALARY




  // #region LOGIN


  login(user: User) {
    return this.http.post(this.tokenUrl, user, HTTP_OPTIONS)
      .pipe(
        map((tokenObj: TokenHolder) => {
          localStorage.setItem('auth_token', tokenObj.token);
          this.httpOptionsAuth.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
          });
          return true;
        }),
        catchError(this.handleError(`login()`))
      );
  }

  logout() {
    localStorage.setItem('auth_token', '');
  }


  // #endregion LOGIN




  // #region HANDLE ERROR/LOG


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
  

  // #endregion HANDLE ERROR/LOG




  // #region TOKEN

  /**
   * returns true if token doesn’t exist or if the token is expired
   */
  isTokenExpired(token?: string): boolean {
    if(!token) token = localStorage.getItem('auth_token');
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  private getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  // #endregion TOKEN



}
