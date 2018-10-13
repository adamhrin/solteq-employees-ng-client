// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


// my components
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailsComponent } from './details/details.component';
import { EmployeesComponent } from './employees/employees.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { ChartsComponent } from './charts/charts.component';
import { SalariesChartComponent } from './salaries-chart/salaries-chart.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

// npm packages (modules)
import { MatButtonModule, MatDialogModule, MatInputModule, 
  MatFormFieldModule, MatDividerModule, MatProgressSpinnerModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DetailsComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    AddEmployeeComponent,
    DatatableComponent,
    MyDialogComponent, 
    SalariesChartComponent,
    ChartsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxChartsModule
  ],
  entryComponents: [MyDialogComponent],
  bootstrap: [AppComponent],
  providers: [AuthGuard]
})
export class AppModule { }
