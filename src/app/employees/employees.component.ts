import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../models/employee';
import { ObservableService } from '../observable-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  // $ is convention for async object instances
  employees$: Employee[];

  columns = ['Name', 'Email', 'Phone', 'Actions'];
  colKeys = [];

  constructor(private data: DataService, 
              private observableService: ObservableService,
              private router: Router) { 
    //converts columns to column keys by lower-casing the strings
    let i = 0;
    this.columns.forEach(element => {
      this.colKeys[i] = element.toLowerCase();
      i++;
    });
    // remove last array item = Actions
    this.colKeys.splice(-1,1);
  }

  ngOnInit() {
    console.log("employees ngOnInit() called");
    this.data.getEmployees().subscribe(data => this.employees$ = data);
  }

  onEditEmployee(employee: Employee) {
    this.router.navigate([`/details/${employee.id}`]);
  }

  onDeleteEmployee(employee: Employee) {
    console.log("employeesComponent onDeleteEmployee()");
    if(confirm("Are you sure you want to delete this employee?")) {
      this.data.deleteEmployee(employee.id)
        .subscribe(
          () => {
            // delete employee locally in employees$ collection
            this.employees$ = this.employees$.filter(e => e !== employee);
            // let observable service broadcast data to subscribers
            // to rerender datatable
            this.observableService.broadcast(this.employees$);
          },
          () => console.log("Failed to delete employee")
        );
    }
  }

}
