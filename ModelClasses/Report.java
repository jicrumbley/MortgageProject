package com.digi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name="mortgagereport")
public class Report {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int reportId;
	
	private String reportData;
	
	@ManyToOne
	@JoinColumn(name="eid", referencedColumnName="eid")
	private Employee e;
	
	@OneToOne
	@JoinColumn(name="loanId", referencedColumnName="loanId")
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
