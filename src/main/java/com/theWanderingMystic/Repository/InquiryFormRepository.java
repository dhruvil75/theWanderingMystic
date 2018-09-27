package com.theWanderingMystic.Repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.theWanderingMystic.Entity.InquiryForm;

public interface InquiryFormRepository extends MongoRepository<InquiryForm,String>  {
	@Override
	public List<InquiryForm> findAll();
//	@Override
//	public InquiryForm findById();

}

