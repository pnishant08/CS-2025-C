package com.example.alumniconnect.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.alumniconnect.entity.RegisterRequestEntity;

@Repository
public interface CollegeRepository extends JpaRepository<RegisterRequestEntity,Long> {
    
}
