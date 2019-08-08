package com.revature.testMVC;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.Matchers.*;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;


import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.http.converter.xml.Jaxb2RootElementHttpMessageConverter;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.DefaultMockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.Service.MemberServices;
import com.revature.model.Member;
import com.revature.web.MemberController;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:test-servlet.xml")
@WebAppConfiguration
public class MemberControlTest {

	@Autowired
	private WebApplicationContext wac;

	/*
	 * This @Mock annotation comes from Mockito. It is used to denote thatwe 	 	 *are mocking an object.
	 */
	@Mock
	private MemberServices ms;

	/*
	 * This annotation injects our mocks into our movieController object.
	 */
	@InjectMocks
	private MemberController memberController;

	private MockMvc mockMvc;

	@Before
	public void setUp() {
		/*
		 * This initializes any mocks we've created.
		 */
		MockitoAnnotations.initMocks(this);
		/*
		 * Create a mock instance of our movie controller.
		 */
		mockMvc = MockMvcBuilders.standaloneSetup(memberController)
				.setMessageConverters(new MappingJackson2HttpMessageConverter(),new Jaxb2RootElementHttpMessageConverter())
				.build();
	}

	@Test
	public void testGetAllMoviesEndpoint() 
	{
		Member m = new Member(0,"jose","pass","","");
		
		
		try 
		{
			when(ms.validate(m)).thenReturn(new ResponseEntity<Object>(m,HttpStatus.OK));
			
			mockMvc.perform(post("/Api/login")
					
				.accept(MediaType.APPLICATION_JSON_VALUE)
		        .contentType(MediaType.APPLICATION_JSON_VALUE)
		        .content(asJsonString(m))
		        
					)
			
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andDo(MockMvcResultHandlers.print());
			
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		}
	}
	

	
	public static String asJsonString(final Object obj) {
	    try {
	        return new ObjectMapper().writeValueAsString(obj);
	    } catch (Exception e) {
	        throw new RuntimeException(e);
	    }
	}

}
