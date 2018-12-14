import { Report } from 'src/app/Models/Report';

export interface ReportAPI {
    getReportUrl: string;
    addReportUrl: string;
    deleteReportUrl: string;
    updateReportUrl: string;
    getAllReportsUrl: string;

    getAllReports(): Report[];
    getReport(report: Report): Report;
    addReport(report: Report): number;
    deleteReport(report: Report): number;
    updateReport(report: Report): number;
}

