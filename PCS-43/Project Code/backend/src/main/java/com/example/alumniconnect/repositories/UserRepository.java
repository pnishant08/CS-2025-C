package com.example.alumniconnect.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alumniconnect.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    // Find a user by email
    Optional<UserEntity> findByEmailAndCollege_CollegeId(String email, String collegeId);

    boolean existsByEmail(String email);

    List<UserEntity> findAllByCollege_CollegeId(String collegeId);

}