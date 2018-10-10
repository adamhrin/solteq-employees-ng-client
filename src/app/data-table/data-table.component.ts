import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DataTableSource } from './data-table-datasource';
import { ITableDataItem } from '../ITableDataItem';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AddSalaryDialogComponent } from '../add-salary-dialog/add-salary-dialog.component';
import { DataService } from '../data.service';
import { YearSalary } from '../models/yearSalary';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;
  dataSource: DataTableSource;
  @Input() source: ITableDataItem[];


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec', 'actions'];

  ngOnInit() {
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  constructor(public dialog: MatDialog, private data: DataService) {}

  addNew(salary: YearSalary) {
    const dialogRef = this.dialog.open(AddSalaryDialogComponent, {
      data: {salary: salary}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.refreshTable();
      }
    });
  }

  private refreshTable() {
    // if there's a paginator active we're using it for refresh
    if (this.paginator.hasNextPage()) {
      this.paginator.nextPage();
      this.paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.paginator.hasPreviousPage()) {
      this.paginator.previousPage();
      this.paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }
  }

  public loadData() {
    this.dataSource = new DataTableSource(this.paginator, this.sort, this.source);
    fromEvent(this.filter.nativeElement, 'keyup')
    .pipe(
      debounceTime(150),
      distinctUntilChanged(),
    ).subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }


}