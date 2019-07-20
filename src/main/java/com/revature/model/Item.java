package com.revature.model;

public class Item
{
	
	private int id;
	private double minPrice;
	private long timeStamp;
	private int memberId;
	
	public Item()
	{
		super();
		// TODO Auto-generated constructor stub
	}
	public Item(int id, double minPrice, long timeStamp, int memberId)
	{
		super();
		this.id = id;
		this.minPrice = minPrice;
		this.timeStamp = timeStamp;
		this.memberId = memberId;
	}
	public int getId()
	{
		return id;
	}
	public void setId(int id)
	{
		this.id = id;
	}
	public double getMinPrice()
	{
		return minPrice;
	}
	public void setMinPrice(double minPrice)
	{
		this.minPrice = minPrice;
	}
	public long getTimeStamp()
	{
		return timeStamp;
	}
	public void setTimeStamp(long timeStamp)
	{
		this.timeStamp = timeStamp;
	}
	public int getMemberId()
	{
		return memberId;
	}
	public void setMemberId(int memberId)
	{
		this.memberId = memberId;
	}
	@Override
	public String toString()
	{
		return "Item [id=" + id + ", minPrice=" + minPrice + ", timeStamp=" + timeStamp + ", memberId=" + memberId
				+ "]";
	}
	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + memberId;
		long temp;
		temp = Double.doubleToLongBits(minPrice);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + (int) (timeStamp ^ (timeStamp >>> 32));
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
		Item other = (Item) obj;
		if (id != other.id)
			return false;
		if (memberId != other.memberId)
			return false;
		if (Double.doubleToLongBits(minPrice) != Double.doubleToLongBits(other.minPrice))
			return false;
		if (timeStamp != other.timeStamp)
			return false;
		return true;
	}
}
