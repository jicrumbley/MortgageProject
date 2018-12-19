package com.mortgage;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import com.mortgage.model.Customer;
import com.mortgage.model.Loan;

@Repository
public class LoanDao {
	
	@Autowired
	JdbcTemplate jdbc;
	
	@Lazy
	@Autowired
	CustomerDao cd;
	
	@Lazy
	@Autowired
	ReportDao rd;
	
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
					
					if(rs.getInt(9) != 0)
						l.setRep(rd.getReportById(rs.getInt(9)));
					return l;
				}
			});
		}catch(Exception e)
		{
			System.out.println("Error ------");
			System.out.println(e.getMessage());
			lList = null;
		}
		return lList;
	}
	public Loan getLoanById(int loanId) {
		List<Loan> loan = null;
		try {
			loan = jdbc.query("select * from mortgageloan where loanId =" + loanId, new RowMapper<Loan>() {
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
				
				if(rs.getInt(9) != 0)
					l.setRep(rd.getReportById(rs.getInt(9)));
				return l;
				}
			});
			}catch (Exception e) {
				e.printStackTrace();
			}
		return loan.get(0);
		}
	
	public Loan getLoanByCust(int ssn)
	{
		Loan l = null;
		try {
			SqlRowSet rs = jdbc.queryForRowSet("select * from mortgageloan where ssn = " + ssn);
			rs.first();
			l = new Loan();
			l.setLoanId(rs.getInt(1));
			l.setApprovedAmount(rs.getFloat(2));
			l.setAskedAmount(rs.getFloat(3));
			l.setDownPayment(rs.getFloat(4));
			l.setLocation(rs.getString(5));
			l.setProofOfIncome(rs.getString(6));
			l.setPropertyType(rs.getString(7));
			if(rs.getInt(9) != 0)
				l.setRep(rd.getReportById(rs.getInt(9)));
			
		}catch(Exception e)
		{
			System.out.println(e.getMessage());
			l = null;
		}
		return l;
	}
	
	public List<Loan> getLoanByEmployee(int eid)
	{
		List<Loan> lList = null;
		try {
			lList = jdbc.query("select l.* from mortgageloan l join mortgagereport r on l.reportId = r.reportId where r.eid = " + eid, new RowMapper<Loan>() {

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
					
					if(rs.getInt(9) != 0)
						l.setRep(rd.getReportById(rs.getInt(9)));
					return l;
					}
			});
			
		}catch(Exception e)
		{
			System.out.println("Loan error");
			System.out.println(e.getMessage());
			lList = null;
		}
		
		return lList;
	}
	
	public void updateApprovedAmout(Loan l)
	{
		jdbc.execute("update mortgageloan set approvedamount = " + l.getApprovedAmount() + " where loanId = " + l.getLoanId());
	}
}
