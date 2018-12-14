package com.mortgage;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

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
}
