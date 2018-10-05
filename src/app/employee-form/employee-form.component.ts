import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  @Input() employee: Employee;
  @Input() isAddingMode: boolean;

  constructor(private data: DataService, private location: Location) { }

  ngOnInit() {
  }

  /**
   * adds or edits employee according to isAddingMode value set by parent component
   */
  onSubmit() {
    if (this.isAddingMode) {
      this.data.addEmployee(this.employee)
      .subscribe(
        () => {
          console.log("Employee added");
          this.location.back();
        },
        () => { console.log("Failed to add employee") }
      );
    } else {
      this.data.updateEmployee(this.employee)
      .subscribe(
        () => {
          console.log("Employee updated");
          this.location.back();
        },
        () => { console.log("Failed to update employee") }
      );
    }
    
  }

  onBack() {
    this.location.back();
  }

}
