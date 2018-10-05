import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableSalaryItem {
  year: number,
  jan: number,
  feb: number,
  mar: number,
  apr: number,
  may: number,
  jun: number,
  jul: number,
  aug: number,
  sep: number,
  okt: number,
  nov: number,
  dec: number
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableSalaryItem[] = [
  { 
    year: 2013,
    jan: 123,
    feb: 456,
    mar: 759,
    apr: 147,
    may: 258,
    jun: 369,
    jul: 753,
    aug: 159,
    sep: 125,
    okt: 456,
    nov: 453,
    dec: 489
  },
  { 
    year: 2014,
    jan: 123,
    feb: 456,
    mar: 4129,
    apr: 147,
    may: 258,
    jun: 369,
    jul: 753,
    aug: 159,
    sep: 125,
    okt: 456,
    nov: 453,
    dec: 489
  },
  { 
    year: 2015,
    jan: 123,
    feb: 456,
    mar: 789123,
    apr: 147,
    may: 258,
    jun: 369,
    jul: 753,
    aug: 159,
    sep: 125,
    okt: 456,
    nov: 453,
    dec: 489
  },
  { 
    year: 2016,
    jan: 123,
    feb: 456,
    mar: 789753,
    apr: 147,
    may: 258,
    jun: 369,
    jul: 753,
    aug: 159,
    sep: 125,
    okt: 456,
    nov: 453,
    dec: 489
  },
  { 
    year: 2017,
    jan: 123,
    feb: 456,
    mar: 789,
    apr: 147,
    may: 258,
    jun: 369,
    jul: 753,
    aug: 159,
    sep: 125,
    okt: 456,
    nov: 453,
    dec: 489
  }
];

/**
 * Data source for the TableSalary view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableSalaryDataSource extends DataSource<TableSalaryItem> {
  data: TableSalaryItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableSalaryItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableSalaryItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableSalaryItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'year': return compare(+a.year, +b.year, isAsc);
        case 'jan': return compare(+a.jan, +b.jan, isAsc);
        case 'feb': return compare(+a.feb, +b.feb, isAsc);
        case 'mar': return compare(+a.mar, +b.mar, isAsc);
        case 'apr': return compare(+a.apr, +b.apr, isAsc);
        case 'jun': return compare(+a.jun, +b.jun, isAsc);
        case 'jul': return compare(+a.jul, +b.jul, isAsc);
        case 'aug': return compare(+a.aug, +b.aug, isAsc);
        case 'sep': return compare(+a.sep, +b.sep, isAsc);
        case 'okt': return compare(+a.okt, +b.okt, isAsc);
        case 'nov': return compare(+a.nov, +b.nov, isAsc);
        case 'dec': return compare(+a.dec, +b.dec, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
