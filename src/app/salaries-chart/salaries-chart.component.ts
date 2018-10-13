import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { DataService } from '../data.service';

@Component({
  selector: 'app-salaries-chart',
  templateUrl: './salaries-chart.component.html',
  styleUrls: ['./salaries-chart.component.scss']
})
export class SalariesChartComponent {

  @Input() source$: any[];

  //options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = true;
  yAxisLabel = 'Average salary';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private data: DataService) { }

  onSelect(event) {
    console.log(event);
  }

}