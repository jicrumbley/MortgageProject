package com.mortgage;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import com.mortgage.model.Customer;

@Repository
public class CustomerDao {
	
	@Autowired
	JdbcTemplate jdbc;
	
	public CustomerDao()
	{
		
	}
	
	public Customer getCustomerBySsn(int ssn)
	{
		Customer c = null;
		try {
			SqlRowSet rs = jdbc.queryForRowSet("select * from mortgagecustomer where ssn = " + ssn);
			c = new Customer();
			rs.first();
			c.setDob(rs.getString(1));
			c.setEmail(rs.getString(2));
			c.setFname(rs.getString(3));
			c.setLname(rs.getString(4));
			c.setPhone(rs.getString(5));
			c.setSsn(rs.getInt(6));
			c.setUsername(rs.getString(7));
		}catch(Exception e)
		{
			c = null;
		}
		return c;
	}
	
	public List<Customer> getAllCustomers()
	{
		List<Customer> cList;
		try {
			cList = jdbc.query("select * from mortgagecustomer", new RowMapper<Customer>() {
				@Override
				public Customer mapRow(ResultSet rs, int rowNum) throws SQLException {
					Customer c = new Customer();
					c.setDob(rs.getString(1));
					c.setEmail(rs.getString(2));
					c.setFname(rs.getString(3));
					c.setLname(rs.getString(4));
					c.setPhone(rs.getString(5));
					c.setSsn(rs.getInt(6));
					c.setUsername(rs.getString(7));
					return c;
				}
			});
		}catch(Exception e)
		{
			cList = null;
		}
		return cList;
		
	}
	
	public int register(Customer c)
	{
		int ret = 1;
		try {
			jdbc.execute("insert into mortgageuser values ( '" + c.getUsername() + "', '" + c.getPassword() + "', 'customer')");
			jdbc.execute("insert into mortgagecustomer values ( '" + c.getDob() + "', '" + c.getEmail() + "', '" + 
						c.getFname() + "', '" + c.getLname() + "', '" + c.getPhone() + "', " + c.getSsn() + ", '" + c.getUsername() + "')");
		}catch(Exception e)
		{
			ret = -1;
		}
		return ret;
	}
	
	public int delete(Customer c)
	{
		int ret = 1;
		try {
			jdbc.execute("delete from mortgagecustomer where ssn = " + c.getSsn());
			jdbc.execute("delete from mortgageuser where username = '" + c.getUsername() + "'");
		}catch(Exception e)
		{
			ret = -1;
		}
		return ret;
	}
	
}
