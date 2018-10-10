import { Component, OnInit } from '@angular/core';
import { YearSalary } from '../models/yearSalary';
import { DataService } from '../data.service';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrls: ['./salary-form.component.scss']
})
export class SalaryFormComponent implements OnInit {

  salary: YearSalary;
  colKeys: string[];

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
