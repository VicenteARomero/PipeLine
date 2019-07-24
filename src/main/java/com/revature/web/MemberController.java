package com.revature.web;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.Service.MemberServices;
import com.revature.model.Item;
import com.revature.model.Member;

@CrossOrigin
@RestController
@RequestMapping(value = "/Api")
public class MemberController
{
	private MemberServices ms;

	private static Logger LOGY = LogManager.getLogger(MemberController.class);

	@Autowired
	public void setMs(MemberServices ms)
	{
		this.ms = ms;
	}

	// Validates Members login
	@PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Object> getMemberByUsername(@RequestBody Member m)
	{
		return ms.validate(m);
	}

	// creates new user
	@PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Object> insertMember(@RequestBody Member m)
	{

		return ms.createUser(m);

	}

	// return item list
	@PostMapping(value = "/list", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Object> getFavorites(@RequestBody Member m)
	{

		return ms.returnItemList(m);

	}

	// populates item
	@PostMapping(value = "/addFavorite", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Object> populateItemList(@RequestBody Item i)
	{

		return ms.insertItem(i);

	}
	
	@GetMapping(value = "/ping",produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Object> pingOutsideApi()
	{
		return ms.getDataList();
	}

}
