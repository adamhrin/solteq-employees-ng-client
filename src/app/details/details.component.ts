import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router'
import { Employee } from '../models/employee';
import { YearSalary } from '../models/yearSalary';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { ObservableService } from '../observable-service.service';

enum DialogType {
  EDIT = "Edit Salary",
  ADD = "Add Salary"
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  
  employee$: Employee = new Employee();
  columns = ['Year', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec', 'Actions'];
  colKeys = [];

  constructor(
    private data: DataService, 
    private observableService: ObservableService,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
      this.route.params.subscribe(params => this.employee$.id = params.id);

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
    this.data.getEmployee(this.employee$.id).subscribe(data => {
      this.employee$ = data;
    });
  }

  onEditSalary(salary: YearSalary) {
    this.openDialog(salary, DialogType.EDIT);
  }

  onDeleteSalary(salary: YearSalary) {
    if(confirm("Are you sure you want to delete salary for year " + salary.year)) {
      this.data.deleteSalary(salary)
      .subscribe(
        () => {
          // this works too
          // this.employee$.salaries = this.employee$.salaries.filter(s => s !== salary);
          this.deleteSalaryLocally(salary.year);
          // let observable service broadcast data to subscribers
          // to rerender datatable
          this.observableService.broadcast(this.employee$.salaries);
        },
        () => console.log("Failed to delete salary")
      );
    }
  }

  onAddSalary() {
    var newSalary = new YearSalary();
    newSalary.idEmployee = this.employee$.id;
    this.openDialog(newSalary, DialogType.ADD);
  }

  private openDialog(salary: YearSalary, type: DialogType ): void {
    // create array of objects, which hold information about dialog options (placeholders, colKeys, required)
    var options = this.createOptions();
    
    // create a copy of salary for editing (because of two-way binding in dialog)
    var editSalary = Object.assign({}, salary);

    // this array will be used in dialog for checking if new(edited) year already exists
    // push there every year from all employee’s salaries, except for the one currently edited
    var otherYears = [];
    this.employee$.salaries.forEach(yearSalary => {
      if(yearSalary.year != salary.year) {
        otherYears.push(yearSalary.year);
      }
    });

    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
        title: type, 
        data: editSalary, 
        options: options, 
        oldYear: salary.year,
        otherYears: otherYears
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // don’t do anything if it was closed without saving (result==undefined)
      if (result) {
        if (type == DialogType.EDIT) {
          this.data.updateSalary(result.data, result.oldYear)
            .subscribe(
              updatedRow => {
                this.deleteSalaryLocally(result.oldYear);
                this.employee$.salaries.push(updatedRow);
                // let observable service broadcast data to subscribers
                this.observableService.broadcast(this.employee$.salaries);
              },
              () => { console.log("detailsComponent.dialogRef.afterClosed() -> Failed to update salary"); }
            );
        } else if (type == DialogType.ADD) {
          this.data.addSalary(result.data)
            .subscribe(
              addedRow => {
                this.employee$.salaries.push(addedRow);
                // let observable service broadcast data to subscribers
                this.observableService.broadcast(this.employee$.salaries);
              },
              () => { console.log("detailsComponent.dialogRef.afterClosed() -> Failed to add new salary"); }
            )
        }
      } 
    });
  }

  /**
   * deletes salary from employee’s salaries collection (only locally, not serverside)
   * @param year - year of salary to delete 
   */
  private deleteSalaryLocally(year: number) {
    // find the row
    var salaryToDelete = this.employee$.salaries.find(s => s.year == year);
    // find index of the row
    var indexOfSalaryToDelete = this.employee$.salaries.indexOf(salaryToDelete);
    // remove row
    this.employee$.salaries.splice(indexOfSalaryToDelete, 1);
  }

  /**
   * create array of objects, which hold information about dialog options 
   * (placeholders, colKeys, required, type)
   */
  private createOptions(): any[] {
    var options: any[] = [];

    // all of the inputs in the form are having type="number"
    var type = "number";

    for (let i = 0; i < this.colKeys.length; i++) {
      // put required flag only on "year" column
      // in case more columns need to be required => just add it to condition with ||
      var required = this.colKeys[i] == 'year';
      var option = {
        placeholder: this.columns[i], 
        colKey: this.colKeys[i], 
        required: required,
        type: type
      }
      options[i] = option;
    }
    return options;
  }

}
