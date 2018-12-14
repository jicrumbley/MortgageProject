import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './HomePages/admin/admin.component';
import { CustomerComponent } from './HomePages/customer/customer.component';
import { LoanOfficerComponent } from './HomePages/loan-officer/loan-officer.component';
import { InspectionOfficerComponent } from './HomePages/inspection-officer/inspection-officer.component';
import { LoginService } from './login.service';
import { InvalidCredentialsComponent } from './invalid-credentials/invalid-credentials.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api/api.service';
import { CustomerAPIImplService } from './api/apiImpl/customer-apiimpl.service';
import { EmployeeAPIImplService } from './api/apiImpl/employee-apiimpl.service';
import { LoanAPIImplService } from './api/apiImpl/loan-apiimpl.service';
import { ReportAPIImplService } from './api/apiImpl/report-apiimpl.service';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CustomerComponent,
    LoanOfficerComponent,
    InspectionOfficerComponent,
    InvalidCredentialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [LoginService, ApiService, CustomerAPIImplService, EmployeeAPIImplService, LoanAPIImplService, ReportAPIImplService],
  bootstrap: [AppComponent]
})
export class AppModule { }
