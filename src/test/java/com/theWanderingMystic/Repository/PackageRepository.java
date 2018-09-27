package com.theWanderingMystic.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.theWanderingMystic.Entity.Package;
import java.util.List;

public interface PackageRepository extends MongoRepository<Package,String> {
//    public List<Package> findByprice(Integer price);
	@Override
	public List<Package> findAll();
//    public List<Package> findByName(String Name);

//	public List<Package> findbyName(String string);
}






