import { Injectable } from '@angular/core';
import { ReportAPI } from '../apiInterfaces/ReportAPI';
import { Report } from 'src/app/Models/Report';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportAPIImplService implements ReportAPI {

  constructor(private http: HttpClient) { }

  getReportByIdUrl: string;
  addReportUrl: string = "http://localhost:" + ApiService.port + "/addReport";
  deleteReportUrl: string;
  updateReportUrl: string = "http://localhost:" + ApiService.port + "/updateReportData";
  getAllReportsUrl: string;

  getAllReports(): Report[] {
    return null;
  }
  //NOT USED
  getReport(report: Report): Report {
    return null;
  }
  addReport(report: Report): number {
    
    this.http.post(this.addReportUrl, JSON.stringify(report)).subscribe();

    return 1;
  }
  deleteReport(report: Report): number {
    return null;
  }
  updateReport(report: Report): number {
    
    this.http.post(this.updateReportUrl, JSON.stringify(report)).subscribe();
    
    return 1;

  }
}
