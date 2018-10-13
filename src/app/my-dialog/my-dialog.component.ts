import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }

  onSubmit() {
    // not used
  }

  onSave() {
    //check if new value of year already exists in employee’s salaries
    //if yes, don’t allow to save

    //do it only if the array of otherYears exists
    if (this.data.otherYears) {
      if (this.data.otherYears.indexOf(+this.data.data.year) > -1) {
        alert("Salary for given year already exists");
      } else {
        // onSave() successful => going to save");
        this.dialogRef.close(this.data);
      }
    }
    
  }
}
