package com.mortgage.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.mortgage.model.Customer;
import com.mortgage.model.Employee;


@Repository
public class EmployeeDao {

	@Autowired
	JdbcTemplate jdbc;
	
	public EmployeeDao()
	{
		
	}
	
	public List<Employee> getAllEmployees()
	{
		List<Employee> eList;
		try {
			eList = jdbc.query("select * from mortgageemployee where role != 'admin'", new RowMapper<Employee>() {
				@Override
				public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
					Employee e = new Employee();
					e.setActive(rs.getBoolean(1));
					e.setEid(rs.getInt(2));
					e.setFname(rs.getString(3));
					e.setLname(rs.getString(4));
					e.setRole(rs.getString(5));
					e.setUsername(rs.getString(6));
					return e;
				}
			});
		}catch(Exception e)
		{
			eList = null;
		}
		return eList;
	}
	
	public int changeActiveFalse(int eid)
	{
		int ret = 1;
		try {
			jdbc.execute("update mortgageemployee set active = 0 where eid = " + eid);
		}catch(Exception e)
		{
			ret = -1;
		}
		return ret;
	}
	
	public int changeActiveTrue(int eid)
	{
		int ret = 1;
		try {
			jdbc.execute("update mortgageemployee set active = 1 where eid = " + eid);
		}catch(Exception e)
		{
			ret = -1;
		}
		return ret;
	}
	
	public int createEmployee(Employee e)
	{
		int ret = 1;
		try {
			jdbc.execute("insert into mortgageuser values ( '" + e.getUsername() + "', '" + e.getPassword() + "', 'employee')");
			jdbc.execute("insert into mortgageemployee values (1, mortemp_seq.nextval, '" + e.getFname() + "', '" + e.getLname() + "', '" + e.getRole() + "', '" + e.getUsername() + "')");
		}catch(Exception ex)
		{
			ret = -1;
		}
		return ret;
	}
	
	public Employee getEmployeeById(int eId) {
		Employee employee = null;
		try {
			jdbc.query("select * from mortgageemployee where eId =" + eId, new RowMapper<Employee>() {
			@Override
			public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
				Employee e = new Employee();
				e.setActive(rs.getBoolean(1));
				e.setEid(rs.getInt(2));
				e.setFname(rs.getString(3));
				e.setLname(rs.getString(4));
				e.setRole(rs.getString(5));
				e.setUsername(rs.getString(6));
				return e;
				}
			});
			}catch (Exception e) {
				e.printStackTrace();
			}
			return employee;
		}
	}
