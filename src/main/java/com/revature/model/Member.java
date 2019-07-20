package com.revature.model;


public class Member
{
	private int id;
	private String username;
	private String password;
	private String serverName;
	private String region;
	
	
	public Member()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public Member(int id, String username, String password, String serverName, String region)
	{
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.serverName = serverName;
		this.region = region;
	}
	
	public Member(String username, String password)
	{
		this.username=username;
		this.password=password;
		id=0;
		serverName="";
		region ="";
		
	}
	
	public int getId()
	{
		return id;
	}
	public void setId(int id)
	{
		this.id = id;
	}
	public String getUsername()
	{
		return username;
	}
	public void setUsername(String username)
	{
		this.username = username;
	}
	public String getPassword()
	{
		return password;
	}
	public void setPassword(String password)
	{
		this.password = password;
	}
	public String getServerName()
	{
		return serverName;
	}
	public void setServerName(String serverName)
	{
		this.serverName = serverName;
	}
	public String getRegion()
	{
		return region;
	}
	public void setRegion(String region)
	{
		this.region = region;
	}
	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((region == null) ? 0 : region.hashCode());
		result = prime * result + ((serverName == null) ? 0 : serverName.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj)
	{
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Member other = (Member) obj;
		if (id != other.id)
			return false;
		if (password == null)
		{
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (region == null)
		{
			if (other.region != null)
				return false;
		} else if (!region.equals(other.region))
			return false;
		if (serverName == null)
		{
			if (other.serverName != null)
				return false;
		} else if (!serverName.equals(other.serverName))
			return false;
		if (username == null)
		{
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	@Override
	public String toString()
	{
		return "Member [id=" + id + ", username=" + username + ", password=" + password + ", serverName=" + serverName
				+ ", region=" + region + "]";
	}
	
		
	
}
