package com.revature.repository;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import com.revature.model.Item;
import com.revature.model.Member;
import com.revature.util.SessionFactory;

@Repository("mr")
public class MemberRepo
{
	
	public Member getMemberByUsername(String username) {
		Member u = null;
		Session s = null;
		Transaction tx=null;
		
		try {
			s = SessionFactory.getSession();
			tx=s.beginTransaction();
			//This CriteriaBuilder will help us narrow down our search by allowing
			//us to add Restrictions to our query.
			CriteriaBuilder cb = s.getCriteriaBuilder();
			CriteriaQuery<Member> cq = cb.createQuery(Member.class);
			Root<Member> root = cq.from(Member.class);
			cq.select(root).where(cb.equal(root.get("username"), username));
			Query<Member> q = s.createQuery(cq);
			u = q.getSingleResult();
			tx.commit();
		}catch(HibernateException e) {
			e.printStackTrace();
			tx.rollback();
		}finally {
			s.close();
		}
		
		return u;
	}
	
	
	public void insertMember(Member m)
	{
		Session s = null;
		Transaction tx = null;
		try 
		{
			s=SessionFactory.getSession();
			tx=s.beginTransaction();
			s.save(m);
			tx.commit();
		}
		catch (HibernateException e)
		{
			e.printStackTrace();
			tx.rollback();
		}
		finally
		{
			s.close();
		}
	}
	
	public void insertItem(Item i)
	{
		Session s = null;
		Transaction tx = null;
		try 
		{
			s=SessionFactory.getSession();
			tx=s.beginTransaction();
			s.save(i);
			tx.commit();
		}
		catch (HibernateException e)
		{
			e.printStackTrace();
			tx.rollback();
		}
		finally
		{
			s.close();
		}
	}
	
	public Member getMemberById(int id) {
		Member m = null;
		Session s = null;
		Transaction tx=null;
		try {
			s = SessionFactory.getSession();
			tx=s.beginTransaction();
			m = s.get(Member.class, id);
			tx.commit();
		}
		catch(HibernateException e) 
		{
			e.printStackTrace();
			tx.rollback();
		}finally {
			s.close();
		}
		return m;
	}
	
}
