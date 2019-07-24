package com.revature.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "minPrice")
	private double minPrice;
	@Column(name = "item_timeStamp")
	private long timeStamp;
	@JoinColumn(name="member_id")
	private int member_id;

	public Item()
	{
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Item(double minPrice, long timeStamp)
	{
		super();
		this.minPrice = minPrice;
		this.timeStamp = timeStamp;
	}
	
	public Item(int id, double minPrice, long timeStamp)
	{
		super();
		this.id = id;
		this.minPrice = minPrice;
		this.timeStamp = timeStamp;
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

	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
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
