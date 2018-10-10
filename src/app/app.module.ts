import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import { TableSalaryComponent } from './table-salary/table-salary.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, 
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule,
  MatFormFieldModule } from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddSalaryDialogComponent } from './add-salary-dialog/add-salary-dialog.component';

import { DataTablesModule } from 'angular-datatables';
import { DatatableComponent } from './datatable/datatable.component';

import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ngx-datatable/ng2-table';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SalaryFormComponent } from './salary-form/salary-form.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    EmployeesComponent,
    TableSalaryComponent,
    DataTableComponent,
    EmployeeFormComponent,
    AddEmployeeComponent,
    AddSalaryDialogComponent,
    DatatableComponent,
    NgTableComponent,
    NgTableFilteringDirective, 
    NgTablePagingDirective, 
    NgTableSortingDirective, SalaryFormComponent, MyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    DataTablesModule,
    PaginationModule.forRoot()
  ],
  entryComponents: [
    MyDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
