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
    AddSalaryDialogComponent
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
    ReactiveFormsModule
  ],
  entryComponents: [
    AddSalaryDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
