package com.theWanderingMystic.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.theWanderingMystic.Entity.InquiryForm;
import com.theWanderingMystic.Repository.InquiryFormRepository;

@RestController
public class InquiryFormController {
	@Autowired
	private InquiryFormRepository ifr;
	
	@PostMapping(value = "/inquiryform")
	public InquiryForm create(@RequestBody InquiryForm obj) {
		System.out.println(ifr.insert(obj));
		return obj;
	}
	
	@GetMapping("/inquiryform")
	public List<InquiryForm> viewall(){
		return ifr.findAll();
	}
	
	@GetMapping("/inquiryform/{id}")
	public Optional<InquiryForm> getOne(@PathVariable("id") String id ) {
		return ifr.findById(id);
		
	}
	
	@PutMapping("/inquiryform/{id}")
	public InquiryForm updateOne(@PathVariable("id") String id, @RequestBody InquiryForm obj){
		return ifr.save(obj);		
		
	}
	
}




