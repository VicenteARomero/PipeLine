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
	@Column(name="serialNumber")
	private int serialNumber;
	@Column(name = "item_Name")
	private String name;
	@JoinColumn(name="member_id")
	private int member_id;
	
	public Item()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public Item(int id, int serialNumber, String name, int member_id)
	{
		super();
		this.id = id;
		this.serialNumber = serialNumber;
		this.name = name;
		this.member_id = member_id;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public int getSerialNumber()
	{
		return serialNumber;
	}

	public void setSerialNumber(int serialNumber)
	{
		this.serialNumber = serialNumber;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public int getMember_id()
	{
		return member_id;
	}

	public void setMember_id(int member_id)
	{
		this.member_id = member_id;
	}

	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + member_id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + serialNumber;
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
		if (member_id != other.member_id)
			return false;
		if (name == null)
		{
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (serialNumber != other.serialNumber)
			return false;
		return true;
	}

	@Override
	public String toString()
	{
		return "Item [id=" + id + ", serialNumber=" + serialNumber + ", name=" + name + ", member_id=" + member_id
				+ "]";
	}

}
