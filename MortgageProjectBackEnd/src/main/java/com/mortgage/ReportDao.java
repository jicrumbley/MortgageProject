package com.mortgage;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.mortgage.model.*;

@Repository
public class ReportDao {
	@Autowired
	JdbcTemplate jdbc;
	
	@Lazy
	@Autowired
	EmployeeDao ed;
	
	@Lazy
	@Autowired
	LoanDao ld;
	
	public ReportDao()
	{
		
	}
	
	public List<Report> getAllReports() {
		List<Report> rList;
		try {
			rList = jdbc.query("select * from mortgagereport", new RowMapper<Report>() {
				@Override
				public Report mapRow(ResultSet rs, int rowNum) throws SQLException {
					Report r = new Report();
					
					r.setReportId(rs.getInt(1));
					r.setReportData(rs.getString(2));
					r.setE(ed.getEmployeeById(rs.getInt(3)));
					
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
	public Report getReportById(Integer reportId) {
		if(reportId == null)
			return null;
		
		List<Report> rList;
		try {
			rList = jdbc.query("select * from mortgagereport where reportId =" + reportId, new RowMapper<Report>() {
				@Override
				public Report mapRow(ResultSet rs, int rowNum) throws SQLException {
					Report r = new Report();
					
					r.setReportId(rs.getInt(1));
					r.setReportData(rs.getString(2));
					r.setE(ed.getEmployeeById(rs.getInt(3)));
					
					return r;
				}
			});
		}catch(Exception e)
		{
			System.out.println(e.getMessage());
			rList = null;
		}
		System.out.println("-------------" + rList.get(0).getReportId());
		return rList.get(0);
	}
}
