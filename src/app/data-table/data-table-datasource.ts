import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { ITableDataItem } from '../ITableDataItem';
import { Sorter } from '../sorter';

  /**
   * Data source for the TableSalary view. This class should
   * encapsulate all logic for fetching and manipulating the displayed data
   * (including sorting, pagination, and filtering).
   */
  export class DataTableSource extends DataSource<ITableDataItem> {
  
    constructor(private paginator: MatPaginator, private sort: MatSort, private data: ITableDataItem[]) {
      super();
    }
  
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<ITableDataItem[]> {
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
     * Paginate the data (client-side).
     */
    private getPagedData(data: ITableDataItem[]) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    }
  
    /**
     * Sort the data (client-side).
     */
    private getSortedData(data) {
      return Sorter.sort(this.sort, data);
    }
  }
  
  
  