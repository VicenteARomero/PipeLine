package com.revature.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.revature.model.Member;
import com.revature.repository.MemberRepo;

@Service("ms")
public class MemberServices
{
	private MemberRepo mr;
	
	@Autowired
	public MemberServices(MemberRepo mr)
	{
		this.mr=mr;
	}
	
	public void setMr(MemberRepo mr)
	{
		this.mr=mr;
	}
	
	public ResponseEntity<Object> validate(Member m)
	{	
		/*
		if()
		{
			return new ResponseEntity<Object>("Success",HttpStatus.OK);

		}
		else
		{
			return new ResponseEntity<Object>("Failed",HttpStatus.OK);

		}
		*/
		
		return new ResponseEntity<Object>("Validation successful",HttpStatus.OK);
	}
	
	
}
