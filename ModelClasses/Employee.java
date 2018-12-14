package com.digi.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="mortgageemployee")
@PrimaryKeyJoinColumn(name="username")
public class Employee extends User {
	
	private int eid;
	private String role;
	private String fname;
	private String lname;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name = "eid")
	private List<Report> repList;
	
	public Employee(String username, String password, int eid, String role, String fname, String lname) {
		super(username, password, "employee");
		this.eid = eid;
		this.role = role;
		this.fname = fname;
		this.lname = lname;
	}

	public Employee(String username, String password) {
		super(username, password, "employee");
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
