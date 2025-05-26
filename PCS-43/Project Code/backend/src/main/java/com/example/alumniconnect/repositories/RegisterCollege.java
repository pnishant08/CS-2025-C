package com.example.alumniconnect.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.alumniconnect.entity.RegisterCollegeEntity;

@Repository
public interface RegisterCollege extends JpaRepository<RegisterCollegeEntity,String> {
    Optional<RegisterCollegeEntity> findByCollegeId(String collegeId);
}
