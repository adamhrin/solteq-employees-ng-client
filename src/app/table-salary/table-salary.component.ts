import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableSalaryDataSource } from './table-salary-datasource';

@Component({
  selector: 'app-table-salary',
  templateUrl: './table-salary.component.html',
  styleUrls: ['./table-salary.component.scss']
})
export class TableSalaryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableSalaryDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['year', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

  ngOnInit() {
    this.dataSource = new TableSalaryDataSource(this.paginator, this.sort);
  }
}
