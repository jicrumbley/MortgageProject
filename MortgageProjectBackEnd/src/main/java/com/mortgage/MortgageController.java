package com.mortgage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mortgage.model.*;

import oracle.jdbc.proxy.annotation.Post; 

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
	
	@Autowired
	ReportDao rd;
	
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
	public Customer getCustBySsn(@RequestBody Customer cust)
	{
		return cd.getCustomerBySsn(cust.getSsn());
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
	
	@PostMapping("/addLoan")
	@ResponseBody
	public int addLoan(Loan l)
	{
		return ld.addLoan(l);
	}
	
	@GetMapping("/getAllLoans")
	@ResponseBody
	public List<Loan> getAllLoans()
	{
		return ld.getAllLoans();
	}
	
	@GetMapping("/getLoanByEmp")
	@ResponseBody
	public List<Loan> getLoanByEmp(@RequestBody Employee e)
	{
		System.out.println(e.getEid());
		return ld.getLoanByEmployee(e.getEid());
	}
	
	@GetMapping("/getLoanByCust")
	@ResponseBody
	public Loan getLoanByCust(@RequestBody Customer cust)
	{
		return ld.getLoanByCust(cust.getSsn());
	}
	
	@PostMapping("/setStatus")
	@ResponseBody
	public void updateStatus(@RequestBody Loan l)
	{
		ld.updateStatus(l);
	}
	
	@PostMapping("/setApprovedAmount")
	@ResponseBody
	public void updateApprovedAmount(@RequestBody Loan l)
	{
		ld.updateApprovedAmout(l);
	}
	
	//Report Request Mappings
	
	@GetMapping("/getReportById")
	@ResponseBody
	public Report getRepById()
	{
		return rd.getReportById(13);
	}
	
	@PostMapping("/addReport")
	@ResponseBody
	public void addReport(@RequestBody Report r)
	{
		rd.newReport(r);
	}
}
