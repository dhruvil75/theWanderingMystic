package com.theWanderingMystic.Entity;


import org.springframework.data.annotation.Id;

public class InquiryForm {
	@Id
	public String _id;
	public String Name;
	public String Number;
	public String Email;
	public String Destination;
	public String Message;
	public String HeadCount;
	public String DateOfTravel;
	
	public InquiryForm(String Name,String Number, String Email, String Destination, String Message, String HeadCount, String DateOfTravel) {
		
		this.Name = Name;
		this.Number = Number;
		this.Email = Email;
		this.Destination = Destination;
		this.Message = Message;
		this.HeadCount = HeadCount;
		this.DateOfTravel = DateOfTravel;
		
	}
	
	@Override
	public String toString() {
		return "Id: " + _id + " || \nNumber: " + Number + " Destination: " + Destination + "Message: " + Message;
		
	}
	
}
