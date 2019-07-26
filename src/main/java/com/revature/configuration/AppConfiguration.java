package com.revature.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Scope;

import com.revature.Service.MemberServices;
import com.revature.model.Member;
import com.revature.repository.MemberRepo;
import com.revature.util.SessionFactory;

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
}
