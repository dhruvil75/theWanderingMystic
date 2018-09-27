package com.theWanderingMystic.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PackageRepository extends MongoRepository {
	public void findall();
}
