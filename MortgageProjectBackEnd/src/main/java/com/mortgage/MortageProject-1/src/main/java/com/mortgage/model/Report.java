package com.mortgage.model;

public class Report {

	private int reportId;
	
	private String reportData;

	private Employee e;

	private Loan l;

	public Report(Employee e, Loan l, String reportData) {
		super();
		this.e = e;
		this.l = l;
		this.reportData = reportData;
	}

	public Report() {
		super();
	}

	public int getReportId() {
		return reportId;
	}

	public void setReportId(int reportId) {
		this.reportId = reportId;
	}
	
	public String getReportData() {
		return reportData;
	}

	public void setReportData(String reportData) {
		this.reportData = reportData;
	}

	public Employee getE() {
		return e;
	}

	public void setE(Employee e) {
		this.e = e;
	}

	public Loan getL() {
		return l;
	}

	public void setL(Loan l) {
		this.l = l;
	}
	
	
	
}