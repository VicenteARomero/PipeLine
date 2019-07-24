package com.revature.Service;

import static org.hamcrest.CoreMatchers.nullValue;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.revature.model.Files;
import com.revature.model.Item;
import com.revature.model.Member;
import com.revature.repository.MemberRepo;
import com.revature.web.MemberController;

import net.sf.ehcache.search.parser.MValue.MShort;

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
	
	
	//this method validates login
	public ResponseEntity<Object> validate(Member m)
	{		
		Member testValue = mr.getMemberByUsername(m.getUsername());
		if(m!=null && testValue!=null && m.getPassword().equals(testValue.getPassword()))
		{
			
			return new ResponseEntity<Object>(testValue,HttpStatus.OK);
		}
		else 
		{
			return new ResponseEntity<Object>(HttpStatus.FORBIDDEN);
		}
	}
	//this method creates user
	public ResponseEntity<Object> createUser(Member m)
	{		
		if(m!=null)
		{
			mr.insertMember(m);
			return new ResponseEntity<Object>(HttpStatus.OK);
		}
		else 
		{
			return new ResponseEntity<Object>(HttpStatus.FORBIDDEN);
		}
	}
	
	//this method creates user
		public ResponseEntity<Object> returnItemList(Member m)
		{		
			if(m!=null)
			{
				Member x = mr.getMemberById(m.getId());
				
				return new ResponseEntity<Object>(HttpStatus.OK);
			}
			else 
			{
				return new ResponseEntity<Object>(HttpStatus.FORBIDDEN);
			}
		}
		
		//this method creates user
				public ResponseEntity<Object> populateItemList(Member m)
				{		
					if(m!=null && (m.getItems() != null))
					{
						Member x =null;
						
						for (Item item: m.getItems())
						{
							mr.insertItem(item);
						}						
						return new ResponseEntity<Object>(HttpStatus.OK);

					}
					else 
					{
						return new ResponseEntity<Object>(HttpStatus.FORBIDDEN);
					}
				}
				
		
		
	//This method will trigger every hour and update a json file stored in the database
	private static void getDataList()
	{
	    final String uri = "https://us.api.blizzard.com/wow/auction/data/arthas?locale=en_US&access_token=USc0dB2Pb9yH8ucNlYpJL1anH2wo68EPO5"; 
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    System.out.println(result);
	    
	    JSONParser parse;
	    JSONObject jobj; 
	    JSONArray jsonarr_1;
	    String url = null;

	    try
		{
	    	parse = new JSONParser();
			jobj = (JSONObject)parse.parse(result);
			jsonarr_1 = (JSONArray) jobj.get("files");
			for(int i=0;i<jsonarr_1.size();i++)
			{
				JSONObject jsonobj_1 = (JSONObject)jsonarr_1.get(i);
				url = (String)jsonobj_1.get("url");
				System.out.println(url);
				String itemList = restTemplate.getForObject(url, String.class);
			    System.out.println(itemList);
			}
			
		} catch (ParseException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}
	
	
	
}
