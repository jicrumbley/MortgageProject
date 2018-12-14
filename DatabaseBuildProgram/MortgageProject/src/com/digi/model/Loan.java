package com.digi.model;

import javax.persistence.*;

@Entity
@Table(name="mortgageloan")
public class Loan {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int loanId;
	
	@OneToOne
	@JoinColumn(name = "reportId", referencedColumnName = "reportId")
	private Report rep;
	
	@OneToOne
	@JoinColumn(name="ssn", referencedColumnName = "ssn")
	private Customer cust;
	
	private double askedAmount;
	private double approvedAmount;
	private double downPayment;
	
	private String location;
	private String propertyType;
	private String proofOfIncome;
	
	public Loan(Customer cust, double askedAmount, double downPayment,
			String location, String propertyType, String proofOfIncome) {
		super();
		this.cust = cust;
		this.askedAmount = askedAmount;
		this.approvedAmount = 0.00;
		this.downPayment = downPayment;
		this.location = location;
		this.propertyType = propertyType;
		this.proofOfIncome = proofOfIncome;
	}

	public Loan() {
		super();
	}

	public int getLoanId() {
		return loanId;
	}

	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}

	public Customer getCust() {
		return cust;
	}

	public void setCust(Customer cust) {
		this.cust = cust;
	}

	public double getAskedAmount() {
		return askedAmount;
	}

	public void setAskedAmount(double askedAmount) {
		this.askedAmount = askedAmount;
	}

	public double getApprovedAmount() {
		return approvedAmount;
	}

	public void setApprovedAmount(double approvedAmount) {
		this.approvedAmount = approvedAmount;
	}

	public double getDownPayment() {
		return downPayment;
	}

	public void setDownPayment(double downPayment) {
		this.downPayment = downPayment;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}

	public String getProofOfIncome() {
		return proofOfIncome;
	}

	public void setProofOfIncome(String proofOfIncome) {
		this.proofOfIncome = proofOfIncome;
	}

	public Report getRep() {
		return rep;
	}

	public void setRep(Report rep) {
		this.rep = rep;
	}
	
	
}
