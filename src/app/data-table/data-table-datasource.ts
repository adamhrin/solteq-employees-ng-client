import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { ITableDataItem } from '../ITableDataItem';
import { Sorter } from '../sorter';

  /**
   * Data source for the TableSalary view. This class should
   * encapsulate all logic for fetching and manipulating the displayed data
   * (including sorting, pagination, and filtering).
   */
  export class DataTableSource extends DataSource<ITableDataItem> {
  
    filterChange = new BehaviorSubject('');

    get filter(): string {
      return this.filterChange.value;
    }
  
    set filter(filter: string) {
      this.filterChange.next(filter);
    }

    filteredData: ITableDataItem[] = [];
    renderedData: ITableDataItem[] = [];

    constructor(private paginator: MatPaginator, private sort: MatSort, private data: ITableDataItem[]) {
      super();
      console.log(this.data);
      // Reset to the first page when the user changes the filter.
      this.filterChange.subscribe(() => this.paginator.pageIndex = 0);
    }
  
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<ITableDataItem[]> {
      // Listen for any changes in the base data, sorting, filtering, or pagination
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      const dataMutations = [
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange,
        this.filterChange
      ];
  
      // // Set the paginators length
      // this.paginator.length = this.data.length;
      
  
      return merge(...dataMutations).pipe(map(() => {
        // Filter data
        this.filteredData = this.data.slice().filter((item: ITableDataItem) => {
          const searchStr = item.getSearchString().toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });

        // Sort filtered data
        const sortedData = this.getSortedData(this.filteredData.slice());

        // Grab the page's slice of the filtered sorted data.
        return this.getPagedData(this.getSortedData([...sortedData]));
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
      this.renderedData = data.splice(startIndex, this.paginator.pageSize);
      return this.renderedData;
    }
  
    /**
     * Sort the data (client-side).
     */
    private getSortedData(data) {
      return Sorter.sort(this.sort, data);
    }
  }
  
  
  