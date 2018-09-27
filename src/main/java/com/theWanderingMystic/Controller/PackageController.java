package com.theWanderingMystic.Controller;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.theWanderingMystic.Entity.Package;
import com.theWanderingMystic.Repository.*;

@RestController
public class PackageController {
	@Autowired
	private PackageRepository pr;

	@RequestMapping("/packages")
	public List<com.theWanderingMystic.Entity.Package> hello() {

		// @ResponseStatus(HttpStatus.OK);

		System.out.println(pr.findAll());
		return pr.findAll();
//		return "hello";
	}
	
	@RequestMapping("/package")
	public void packagebyname() {

		// @ResponseStatus(HttpStatus.OK);
		Package p = new Package("Paris",988888);
		pr.insert(p);
//		System.out.println(pr.findById("5b99f70494fceb23dc0b4d7e"));
//		return pr.findById("5b99f70494fceb23dc0b4d7e");
//		return "hello";
	}

}
