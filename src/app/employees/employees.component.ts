import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  // $ is convention for async object instances
  employees$: Employee[];

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log("employees ngOnInit() called");
    this.data.getEmployees().subscribe(data => this.employees$ = data);
  }

  onDeleteClicked(employee: Employee) {
    if(confirm("Are you sure you want to delete this employee?")) {
      this.employees$ = this.employees$.filter(e => e !== employee);
      this.data.deleteEmployee(employee.id).subscribe();
    }
  }

}
