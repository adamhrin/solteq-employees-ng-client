import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YearSalary } from '../models/yearSalary';
import { DataService } from '../data.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-salary-dialog',
  templateUrl: './add-salary-dialog.component.html',
  styleUrls: ['./add-salary-dialog.component.scss']
})
export class AddSalaryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSalaryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: YearSalary,
              public dataService: DataService) { }

  ngOnInit() { }

  formControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit() {
    // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    console.log(this.data);
    this.dataService.addYearSalary(this.data);
  }

}
