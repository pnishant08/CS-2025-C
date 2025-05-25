package com.example.alumniconnect.entity;

import java.util.Set;

import com.example.alumniconnect.entity.enums.Role;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_details")
@Data
@NoArgsConstructor
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    private String user_name;

    @Column(unique = true)
    private String email;

    private String password;

    @ManyToOne
    @JoinColumn(name = "college_id") 
    private RegisterCollegeEntity college;

    private String role;

    private String batch;

    private String branch;

}
