package com.revature.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Scope;

import com.revature.Service.MemberServices;
import com.revature.model.Member;
import com.revature.repository.MemberRepo;

@Configuration
@EnableAspectJAutoProxy(proxyTargetClass=true)
public class AppConfiguration
{
	@Bean(value="mr2")
	@Scope(scopeName = "singleton")
	public MemberRepo getMemberRepo()
	{
		return new MemberRepo();
	}
	
	@Bean(value="ms2")
	@Scope(scopeName="singleton")
	public MemberServices getMemberServices()
	{
		return new MemberServices(new MemberRepo());
	}
	
	/*
	@Bean(value="member")
	@Scope(scopeName="singleton")
	public Member getMember(int id,String username,String password,String serverName,String region)
	{
		return new Member(id,username,password,serverName,region);
	}
	
	/*
	@Bean(value="mm")
	@Scope(scopeName="singleton")
	public Member getMember(String username,String password)
	{
		return new Member(0,username,password,"","");
	}
	*/
	
}
