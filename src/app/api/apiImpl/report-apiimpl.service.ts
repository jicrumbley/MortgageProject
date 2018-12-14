import { Injectable } from '@angular/core';
import { ReportAPI } from '../apiInterfaces/ReportAPI';
import { Report } from 'src/app/Models/Report';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ReportAPIImplService implements ReportAPI {

  constructor() { }

  getReportUrl: string;
  addReportUrl: string;
  deleteReportUrl: string;
  updateReportUrl: string;
  getAllReportsUrl: string;

  getAllReports(): Report[] {
    return null;
  }
  getReport(report: Report): Report {
    return null;
  }
  addReport(report: Report): number {
    return null;
  }
  deleteReport(report: Report): number {
    return null;
  }
  updateReport(report: Report): number {
    return null;
  }
}
