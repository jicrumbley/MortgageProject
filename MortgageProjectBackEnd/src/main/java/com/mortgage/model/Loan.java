package com.mortgage.model;

public class Loan {
	
	private int loanId;
	
	private Report rep;

	private Customer cust;
	
	private double askedAmount;
	private double approvedAmount;
	private double downPayment;
	
	private String location;
	private String propertyType;
	private String proofOfIncome;
	
	private String status;
	
	public Loan(Customer cust, double askedAmount, double downPayment,
			String location, String propertyType, String proofOfIncome, String status) {
		super();
		this.cust = cust;
		this.askedAmount = askedAmount;
		this.approvedAmount = 0.00;
		this.downPayment = downPayment;
		this.location = location;
		this.propertyType = propertyType;
		this.proofOfIncome = proofOfIncome;
		this.status = status;
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

	public Customer getCust() {
		return cust;
	}

	public void setCust(Customer cust) {
		this.cust = cust;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
