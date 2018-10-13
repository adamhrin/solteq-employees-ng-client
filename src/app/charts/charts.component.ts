import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  years$: any[];
  source$: any[];
  currentYear: string;
  allYearsString = "All Years";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.currentYear = this.allYearsString;
    this.data.getAllYears().subscribe(data => this.years$ = data);
    //fetch data for all years at the beginning
    this.data.getAverageMonthsSalary("").subscribe(data => this.source$ = data);
  }

  onDropdownItemClicked(year?) {
    this.currentYear = year === undefined ? this.allYearsString : year;
    this.data.getAverageMonthsSalary(year === undefined ? "" : year).subscribe(data => this.source$ = data);
  }

}
