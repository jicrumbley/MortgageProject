package com.digi.model;
import java.util.*;

import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		StandardServiceRegistry ssr = new StandardServiceRegistryBuilder().configure("hibernate.cfg.xml").build();
		Metadata md = new MetadataSources(ssr).getMetadataBuilder().build();
		SessionFactory sf = md.getSessionFactoryBuilder().build();
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		
		Customer c = new Customer("test", "test123", 234432345, "Tom", "Test", "05-05-1970", "555-555-5555", "ttest@gmail.com");
		Employee e = new Employee("admin", "admin", 001, "admin", "Billy", "Boss");
		Employee e1 = new Employee("will@gmail.com", "pass123", 002, "io", "Will", "Williams");
		
		s.persist(c);
		s.persist(e);
		s.persist(e1);
		
		Loan l = new Loan(c, 200000.00, 15000.00, "123 Road Way", "apartment", "Self-Employed");
		
		Report r = new Report(e, l, "This loan is approved");
		
		s.persist(l);
		s.persist(r);
		
		t.commit();
		
		s.close();
		sf.close();
		
		
	}

}
