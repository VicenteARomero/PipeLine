package com.revature.Service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.revature.model.Member;
import com.revature.repository.MemberRepo;
import com.revature.web.MemberController;

@Service("ms")
public class MemberServices
{
	private MemberRepo mr;
	private static Logger LOGY = LogManager.getLogger(MemberServices.class);

	
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
		LOGY.info("Entered validate method in Member Services");
		
		if(m.getUsername().equals("super2") && m.getPassword().equals("pass"))
		{
			return new ResponseEntity<Object>(m,HttpStatus.OK);
		}
		else 
		{
			return new ResponseEntity<Object>(HttpStatus.FORBIDDEN);
		}
	}
	
	
}
