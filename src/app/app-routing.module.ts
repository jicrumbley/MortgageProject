import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './HomePages/customer/customer.component';
import { AdminComponent } from './HomePages/admin/admin.component';
import { LoanOfficerComponent } from './HomePages/loan-officer/loan-officer.component';
import { InspectionOfficerComponent } from './HomePages/inspection-officer/inspection-officer.component';
import { LoginComponent } from './login/login.component';
import { InvalidCredentialsComponent } from './invalid-credentials/invalid-credentials.component';

const routes: Routes = [
  { path: 'customerHome', component: CustomerComponent },
  { path: 'adminHome', component: AdminComponent },
  { path: 'loanOfficerHome', component: LoanOfficerComponent },
  { path: 'inspectionOfficerHome', component: InspectionOfficerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'invalidCredentials', component: InvalidCredentialsComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
