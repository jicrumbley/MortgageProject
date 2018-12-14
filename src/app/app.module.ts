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
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';




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
    BrowserAnimationsModule,  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
