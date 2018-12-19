package com.mortgage;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.mortgage.model.User;

@Repository
public class UserDao {
	
	@Autowired
	JdbcTemplate jdbc;
	
	public UserDao()
	{
		
	}
	
	public String loginCheck(User u)
	{
		String ret = "";
		try {
			List<User> uList = jdbc.query("select * from mortgageuser where username = '" + u.getUsername() + "' and password = '" + u.getPassword() + "'", new RowMapper<User>()
			{
				public User mapRow(ResultSet r, int numR) throws SQLException
				{
					User u = new User();
					u.setUsername(r.getString(1));
					u.setPassword(r.getString(2));
					u.setType(r.getString(3));
					return u;
				}
			});
			
			ret = uList.get(0).getType();
		}catch(Exception e)
		{
			ret = "invalid";
		}
		return ret;
	}
}
