import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { ObservableService } from '../observable-service.service'

declare var $: any;

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements AfterViewInit, OnDestroy, OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  @Input() source: any[];
  @Input() columns: string[];
  @Input() colKeys: string[];

  // to cede handling events for parent components
  @Output() editEmitter = new EventEmitter<any>();
  @Output() deleteEmitter = new EventEmitter<any>();

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  //for subscribing of observableService
  subscription: Subscription;

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    // exclude last column Actions from export and print
    var options = {columns: 'th:not(:last-child)'};
    var btnClasses = 'btn btn-outline-success';
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      // Declare the use of the extension in the dom parameter
      dom: 'Blftip',
      // Configure the buttons
      buttons: [
        {
          extend: 'excel',
          className: btnClasses,
          exportOptions: options
        }, 
        {
          extend: 'csv',
          className: btnClasses,
          exportOptions: options
        }, 
        {
          extend: 'print',
          className: btnClasses,
          exportOptions: options
        },
      ]
    };
    // listen to observableService to broadcast data after some change
    this.subscription = this.observableService.subjectToBroadcast$
      .subscribe(newData => {
        this.rerender(newData);
      });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  
  ngOnDestroy(): void {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
    this.dtTrigger.unsubscribe();
  }

  onEditClicked(item: any) {
    this.editEmitter.emit(item);
  }

  onDeleteClicked(item: any) {
    this.deleteEmitter.emit(item);
  }

  private rerender(newData): void {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // replace old source with new source data
        this.source = newData;
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    }
  }
}
