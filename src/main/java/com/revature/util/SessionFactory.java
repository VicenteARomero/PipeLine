package com.revature.util;

import org.hibernate.Session;
import org.hibernate.cfg.Configuration;


public class SessionFactory {

	private static org.hibernate.SessionFactory sessionFactory;
	
	public static Session getSession() {
		if(sessionFactory == null) {
			sessionFactory = new Configuration().configure()
				.setProperty("hibernate.connection.url", "jdbc:postgresql://mypostgresql.cvikgdrlzy9l.us-east-2.rds.amazonaws.com/mydb")
				.setProperty("hibernate.connection.username", "Vicente")
				.setProperty("hibernate.connection.password", "password")
				.buildSessionFactory();
		}
		return sessionFactory.getCurrentSession();
	}
}
