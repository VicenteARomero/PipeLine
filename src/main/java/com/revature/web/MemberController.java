package com.revature.web;



import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Service.MemberServices;
import com.revature.model.Member;

@CrossOrigin(origins="/**")
@RestController
@RequestMapping(value="/Api")
public class MemberController
{
	
	private MemberServices ms;
	
	@Autowired
	public void setMs(MemberServices ms)
	{
		this.ms=ms;
	}
	
	//Validates Members login
	
	@RequestMapping(value ="/login",consumes=MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.OPTIONS )
	public @ResponseBody ResponseEntity<Object> getMemberByUsername(@RequestBody Member m)
	{
		return ms.validate(m);
	}
	/*
	@PostMapping(value="/createMember")
	public @ResponseBody ResponseEntity<Object> createMember(@RequestBody Member m)
	{
		return ms.createUser();
	}
	*/
}
