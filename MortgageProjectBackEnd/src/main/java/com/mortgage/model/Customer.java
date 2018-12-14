package com.mortgage.model;

import com.fasterxml.jackson.annotation.JsonCreator;

public class Customer extends User {
	
	private int ssn;
	private String fname;
	private String lname;
	private String dob;
	private String phone;
	private String email;
	
	@JsonCreator
	public Customer(String username, String password, int ssn, String fname, String lname, String dob, String phone,
			String email) {
		super(username, password);
		this.ssn = ssn;
		this.fname = fname;
		this.lname = lname;
		this.dob = dob;
		this.phone = phone;
		this.email = email;
	}

	public Customer(String username, String password) {
		super(username, password);
	}
	
	public Customer()
	{
		
	}

	public int getSsn() {
		return ssn;
	}

	public void setSsn(int ssn) {
		this.ssn = ssn;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
}
