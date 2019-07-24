package com.revature.aspect;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect
{
	private static Logger LOGY = LogManager.getLogger(LoggingAspect.class);
	
	@Pointcut("execution(public * *(..))")
	public void logAll() 
	{
		
	}
	
	@Before("logAll()")
	public void logBefore(JoinPoint jp) 
	{
		LOGY.info("The " + jp.getSignature().getName() + " method is about to be executed.");
	}
	
	@After("logAll()")
	public void logAfter(JoinPoint jp) {
		LOGY.info("The " + jp.getSignature().getName() + " method has executed.");
	}
	
	@AfterReturning(pointcut="logAll()", returning="returnedValue")
	public void logAfterReturning(JoinPoint jp, Object returnedValue) {
		LOGY.info("The " + jp.getSignature().getName() + " method was just completed and it returned " + returnedValue);
	}
	
}
