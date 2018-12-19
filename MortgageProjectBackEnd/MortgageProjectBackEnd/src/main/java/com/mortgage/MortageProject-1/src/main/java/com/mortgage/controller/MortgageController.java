package com.mortgage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mortgage.dao.*;
import com.mortgage.model.*;

@Controller
public class MortgageController {

	@Autowired
	CustomerDao cd;
	
	@Autowired
	UserDao ud;
	
	@Autowired
	EmployeeDao ed;
	
	@Autowired
	LoanDao ld;
	
	//Customer Request Mappings
	
	@PostMapping("/register")
	@ResponseBody
	public int registerCustomer(@RequestBody Customer c)
	{
		return cd.register(c);
	}
	
	@PostMapping("/deleteCustomer")
	@ResponseBody
	public int deleteCustomer(@RequestBody Customer c)
	{
		return cd.delete(c);
	}
	
	@GetMapping("/getAllCustomers")
	@ResponseBody
	public List<Customer> getCustomers()
	{
		return cd.getAllCustomers();
	}
	
	@GetMapping("/getCustBySsn")
	@ResponseBody
	public Customer getCustBySsn()
	{
		return cd.getCustomerBySsn(234432345);
	}
	
	//Employee Request Mappings
	
	@GetMapping("/getAllEmployees")
	@ResponseBody
	public List<Employee> getEmployees()
	{
		return ed.getAllEmployees();
	}
	
	@PostMapping("/createEmployee")
	@ResponseBody
	public int createEmployee(@RequestBody Employee e)
	{
		return ed.createEmployee(e);
	}
	
	@PostMapping("/activeFalse")
	@ResponseBody
	public int setActiveFalse(@RequestBody Employee e)
	{
		return ed.changeActiveFalse(e.getEid());
	}
	
	@PostMapping("/activeTrue")
	@ResponseBody
	public int setActiveTrue(@RequestBody Employee e)
	{
		return ed.changeActiveTrue(e.getEid());
	}
	
	//User Request Mappings
	
	@PostMapping("/login")
	@ResponseBody
	public String login(@RequestBody User u)
	{
		return ud.loginCheck(u);
	}
	
	//Loan Request Mappings
	@GetMapping("/getAllLoans")
	@ResponseBody
	public List<Loan> getAllLoans()
	{
		return ld.getAllLoans();
	}
}