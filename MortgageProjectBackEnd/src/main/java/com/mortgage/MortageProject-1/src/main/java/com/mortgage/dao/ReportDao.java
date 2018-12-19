package com.mortgage.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.mortgage.model.*;

@Repository
public class ReportDao {
	@Autowired
	JdbcTemplate jdbc;
	
	@Autowired
	EmployeeDao ed = new EmployeeDao();
	
	@Autowired
	LoanDao ld = new LoanDao();
	
	public List<Report> getAllReports() {
		List<Report> rList;
		try {
			rList = jdbc.query("select * from mortgagereport", new RowMapper<Report>() {
				@Override
				public Report mapRow(ResultSet rs, int rowNum) throws SQLException {
					Report r = new Report();
					Employee e = new Employee();
					Loan l = new Loan();
					e = ed.getEmployeeById(e.getEid());
					l = ld.getLoanById(l.getLoanId());
					r.setReportId(rs.getInt(1));
					r.setReportData(rs.getString(2));
					r.setE(e);
					r.setL(l);
					
					return r;
				}
			});
		}catch(Exception e)
		{
			System.out.println(e.getMessage());
			rList = null;
		}
		return rList;
	}
	public List<Report> getReportById(int reportId, int eId, int loanId) {
		List<Report> rList;
		try {
			rList = jdbc.query("select * from mortgagereport where reportId =" + reportId, new RowMapper<Report>() {
				@Override
				public Report mapRow(ResultSet rs, int rowNum) throws SQLException {
					Report r = new Report();
					Employee e = new Employee();
					Loan l = new Loan();
					e = ed.getEmployeeById(e.getEid());
					l = ld.getLoanById(l.getLoanId());
					r.setReportId(rs.getInt(1));
					r.setReportData(rs.getString(2));
					r.setE(e);
					r.setL(l);
					
					return r;
				}
			});
		}catch(Exception e)
		{
			System.out.println(e.getMessage());
			rList = null;
		}
		return rList;
	}
}