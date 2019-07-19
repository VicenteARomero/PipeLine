package com.revature.web;



import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Service.MemberServices;
import com.revature.model.Member;

@RestController
@RequestMapping(value="/PlusUltraApi")
public class MemberController
{
	private MemberServices ms;
	
	@Autowired
	public void setMs(MemberServices ms)
	{
		this.ms=ms;
	}
	
	
	@GetMapping(value ="/validate")
	public @ResponseBody ResponseEntity<Object> getMemberByUsername()
	{
		return new ResponseEntity<Object>("Success",HttpStatus.OK);
		
	}
	
}
