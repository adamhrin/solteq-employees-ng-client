import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Employee } from './models/employee';
import { tap, catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { YearSalary } from './models/yearSalary';
import { ITableDataItem } from './ITableDataItem';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = environment.ApiBaseUrl;
  private employeesUrl = this.baseUrl + 'api/Employees';

  dataChange: BehaviorSubject<ITableDataItem[]> = new BehaviorSubject<ITableDataItem[]>([]);
  // Temporarily stores data from dialogs
  dialogData: ITableDataItem;

  constructor(private http: HttpClient) { }

  /**
   * GET employees from the server
   */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        map(data => {
          let employees: Employee[] = [];
          let i = 0;
          data.forEach(employee => {
            employees[i] = new Employee(employee);
            i++;
          });
          this.log('fetched employees');
          return employees;
        }),
        catchError(this.handleError('getEmployees', []))
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
          return new Employee(data);
        }),
        catchError(this.handleError<Employee>(`getHero id=${employeeId}`))
      );
  }

  /**
   * PUSH new employee to server
   */
  addEmployee(employee: Employee) {
    return this.http.post<Employee>(this.employeesUrl, employee, HTTP_OPTIONS)
      .pipe(
        tap((employee: Employee) => this.log(`added employee w/ id=${employee.id}`)),
        catchError(this.handleError<Employee>(`addEmployee id=${employee.id}`))
      );
  }

  /**
   * PUT the employee to the server
   * @param employee 
   */
  updateEmployee(employee: Employee) {
    return this.http.put(`${this.employeesUrl}/${employee.id}`, employee, HTTP_OPTIONS)
      .pipe(
        tap(_ => this.log(`updated employee id=${employee.id}`)),
        catchError(this.handleError<any>(`updateEmployee id=${employee.id}`))
    );
  }
   /**
    * DELETE employee with this id
    */
  deleteEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;

    return this.http.delete<Employee>(`${this.employeesUrl}/${id}`, HTTP_OPTIONS).pipe(
      tap(_ => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>(`deleteEmployee id=${id}`))
    );
  }

  /**
   * to get data from dialog after it was submitted
   */
  getDialogData() {
    return this.dialogData;
  }

  /**
   * PUSH new YearSalary for Employee according to id
   * sets dialogData to new item
   */
  addYearSalary(yearSalary: YearSalary) {
    //TODO
    console.log("service addYearSalary()" + yearSalary);
    this.dialogData = yearSalary;
  }

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
