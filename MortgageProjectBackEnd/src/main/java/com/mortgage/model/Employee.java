package com.mortgage.model;

import java.util.List;


public class Employee extends User {
	
	private int eid;
	private String role;
	private String fname;
	private String lname;
	
	private List<Report> repList;
	
	public Employee(String username, String password, int eid, String role, String fname, String lname) {
		super(username, password);
		this.eid = eid;
		this.role = role;
		this.fname = fname;
		this.lname = lname;
	}

	public Employee(String username, String password) {
		super(username, password);
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
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
	
	
}
