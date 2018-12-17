package com.mortgage;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.mortgage.model.Customer;
import com.mortgage.model.Loan;

@Repository
public class LoanDao {
	
	@Autowired
	JdbcTemplate jdbc;
	
	@Autowired
	CustomerDao cd;
	
	public LoanDao()
	{
		
	}
	
	public List<Loan> getAllLoans()
	{
		List<Loan> lList;
		try {
			lList = jdbc.query("select * from mortgageloan", new RowMapper<Loan>() {
				@Override
				public Loan mapRow(ResultSet rs, int rowNum) throws SQLException {
					Loan l = new Loan();
					l.setLoanId(rs.getInt(1));
					l.setApprovedAmount(rs.getFloat(2));
					l.setAskedAmount(rs.getFloat(3));
					l.setDownPayment(rs.getFloat(4));
					l.setLocation(rs.getString(5));
					l.setProofOfIncome(rs.getString(6));
					l.setPropertyType(rs.getString(7));
					l.setCust(cd.getCustomerBySsn(rs.getInt(8)));
					
					return l;
				}
			});
		}catch(Exception e)
		{
			System.out.println(e.getMessage());
			lList = null;
		}
		return lList;
	}
	public Loan getLoanById(int loanId) {
		Loan loan = null;
		try {
			jdbc.query("select * from mortgageloan where loanId =" + loanId, new RowMapper<Loan>() {
			@Override
			public Loan mapRow(ResultSet rs, int rowNum) throws SQLException {
				Loan l = new Loan();
				l.setLoanId(rs.getInt(1));
				l.setApprovedAmount(rs.getFloat(2));
				l.setAskedAmount(rs.getFloat(3));
				l.setDownPayment(rs.getFloat(4));
				l.setLocation(rs.getString(5));
				l.setProofOfIncome(rs.getString(6));
				l.setPropertyType(rs.getString(7));
				l.setCust(cd.getCustomerBySsn(rs.getInt(8)));
				
				return l;
				}
			});
			}catch (Exception e) {
				e.printStackTrace();
			}
		return loan;
		}
}
