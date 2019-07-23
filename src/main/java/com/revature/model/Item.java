package com.revature.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
@Entity
@Table(name = "item", schema = "proj2")
public class Item
{
	@Id
	@Column(name = "id")
	private int id;
	@Column(name = "minPrice")
	private double minPrice;
	@Column(name = "item_timeStamp")
	private long timeStamp;
	@ManyToOne
	@JoinColumn(name = "member_id")
	private Member m;
	
	public Item()
	{
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Item(int id, double minPrice, long timeStamp)
	{
		super();
		this.id = id;
		this.minPrice = minPrice;
		this.timeStamp = timeStamp;
	}
	
	public Item(int id, double minPrice, long timeStamp, Member member)
	{
		super();
		this.id = id;
		this.minPrice = minPrice;
		this.timeStamp = timeStamp;
		this.m = member;
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
	public Member getMember()
	{
		return m;
	}
	public void setMember(Member member)
	{
		this.m = member;
	}
	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((m == null) ? 0 : m.hashCode());
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
		if (m == null)
		{
			if (other.m != null)
				return false;
		} else if (!m.equals(other.m))
			return false;
		if (Double.doubleToLongBits(minPrice) != Double.doubleToLongBits(other.minPrice))
			return false;
		if (timeStamp != other.timeStamp)
			return false;
		return true;
	}
	@Override
	public String toString()
	{
		return "Item [id=" + id + ", minPrice=" + minPrice + ", timeStamp=" + timeStamp + "]";
	}
	
	
	
}
