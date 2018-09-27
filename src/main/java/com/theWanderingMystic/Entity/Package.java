package com.theWanderingMystic.Entity;

import org.springframework.data.annotation.Id;

public class Package {
	@Id
	public String Id;
	public String Name;
	public Integer Price;
	
	public Package() {
	}
	public Package(Package p) {
		this.Id = p.Id;
		this.Name = p.Name;
		this.Price = p.Price;
	}
	public Package(String name, int price) {
		// TODO Auto-generated constructor stub
		this.Name = name;
		this.Price = price;
	}
	@Override
	public String toString() {
		return " Id:" + this.Id + " Name: " + this.Name + "Price: "  + this.Price ;
	}
}