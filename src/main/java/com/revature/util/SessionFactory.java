package com.revature.util;

import org.hibernate.Session;
import org.hibernate.cfg.Configuration;

public class SessionFactory {

	private static org.hibernate.SessionFactory sessionFactory;
	
	public static Session getSession() {
		if(sessionFactory == null) {
			sessionFactory = new Configuration().configure()
				.setProperty("hibernate.connection.url", "jdbc:postgresql://mypostgresdb.circwqjz1spo.us-east-2.rds.amazonaws.com/samplepostgres")
				.setProperty("hibernate.connection.username", "jose")
				.setProperty("hibernate.connection.password", "password")
				.buildSessionFactory();
		}
		return sessionFactory.getCurrentSession();
	}
}
