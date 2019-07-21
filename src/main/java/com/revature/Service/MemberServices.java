package com.revature.Service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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
		getDataList();
		
		if(m.getUsername().equals("super2") && m.getPassword().equals("pass"))
		{
			return new ResponseEntity<Object>(m,HttpStatus.OK);
		}
		else 
		{
			return new ResponseEntity<Object>(HttpStatus.FORBIDDEN);
		}
	}
	
	private static void getDataList()
	{
	    final String uri = "https://us.api.blizzard.com/wow/auction/data/arthas?locale=en_US&access_token=USc0dB2Pb9yH8ucNlYpJL1anH2wo68EPO5";
	     
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	     
	    System.out.println(result);
	}
	
	
}
