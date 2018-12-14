package com.mortgage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mortgage.model.*; 

@Controller
public class MortgageController {

	@Autowired
	CustomerDao cd;
	
	@Autowired
	UserDao ud;
	
	@Autowired
	EmployeeDao ed;
	
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
	
	//Employee Request Mappings
	@GetMapping("/getAllEmployees")
	@ResponseBody
	public List<Employee> getEmployees()
	{
		return ed.getAllEmployees();
	}
	
	//User Request Mappings
	
	@PostMapping("/login")
	@ResponseBody
	public String login(@RequestBody User u)
	{
		return ud.loginCheck(u);
	}
}
