package com.revature.model;

public class Files
{
	private String url;
	private long lastModified;
	public Files()
	{
		super();
		// TODO Auto-generated constructor stub
	}
	public Files(String url, long lastModified)
	{
		super();
		this.url = url;
		this.lastModified = lastModified;
	}
	public String getUrl()
	{
		return url;
	}
	public void setUrl(String url)
	{
		this.url = url;
	}
	public long getLastModified()
	{
		return lastModified;
	}
	public void setLastModified(long lastModified)
	{
		this.lastModified = lastModified;
	}
	@Override
	public String toString()
	{
		return "Files [url=" + url + ", lastModified=" + lastModified + "]";
	}
	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (lastModified ^ (lastModified >>> 32));
		result = prime * result + ((url == null) ? 0 : url.hashCode());
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
		Files other = (Files) obj;
		if (lastModified != other.lastModified)
			return false;
		if (url == null)
		{
			if (other.url != null)
				return false;
		} else if (!url.equals(other.url))
			return false;
		return true;
	}
}
