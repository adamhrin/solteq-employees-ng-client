import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EMPLOYEES } from './mock-data';
import { Employee } from './models/employee';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://localhost:44302/api/Employees';

  constructor(private http: HttpClient) { }

  /**
   * GET employees from the server
   */
  getEmployees(): Observable<Employee[]> {
    // TODO change 'values' to 'employees'
    return this.http.get<Employee[]>(this.url)
      .pipe(
        tap(employees => this.log('fetched employees')),
        catchError(this.handleError('getEmployees', []))
      );
    
  }

  getEmployee(employeeId): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${employeeId}`)
      .pipe(
        tap(_ => this.log(`fetched employee id=${employeeId}`)),
        catchError(this.handleError<Employee>(`getHero id=${employeeId}`))
      );
  }

  updateEmployee(employee: Employee) {
    return of(EMPLOYEES[0]);
    // return this.http.delete(
    //   this.baseUrl + "/" + id,
    //   { headers: this.getCommonHeaders() }
    // ).pipe(
    //   map(res => res.json()),
    //   catchError (this.handleErrors)
    // );
  }
  
  deleteEmployee(employee: Employee): Observable<Employee> {
    //TODO
    return of(new Employee());
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
