package com.revature.repository;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.aspectj.weaver.bcel.UnwovenClassFileWithThirdPartyManagedBytecode.IByteCodeProvider;
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
	
	public List <Member> getMemberByUsername(Member m) {
		Member u = null;
		Session s = null;
		Transaction tx=null;
		Query q=null;
		List <Member> results=null;
		
		try 
		{
			s=SessionFactory.getSession();
			tx=s.beginTransaction();
			q=s.createQuery("FROM Member WHERE username = :username");
			q.setParameter("username", m.getUsername());
			results = q.list();
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
		return results;
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
	
	public void deleteItem(Item m) {
		Session s = null;
		Transaction tx = null;
		
		try {
			s = SessionFactory.getSession();
			tx = s.beginTransaction();
			s.delete(m);
			tx.commit();
		}catch(HibernateException e) {
			e.printStackTrace();
			tx.rollback();
		}finally {
			s.close();
		}
	}
	
	public Item getItem(Item i)
	{
		Item x = null;
		Session s = null;
		Transaction tx=null;
		try {
			s = SessionFactory.getSession();
			tx=s.beginTransaction();
			x = s.get(Item.class, i.getId());
			tx.commit();
		}
		catch(HibernateException e) 
		{
			e.printStackTrace();
			tx.rollback();
		}finally {
			s.close();
		}
		return x;
	}

}
