package com.example.alumniconnect.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.hibernate.annotations.CurrentTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "RegistrationRequest")
@Data
@NoArgsConstructor
public class RegisterRequestEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;

    @Column(unique = true)
    private String email;

    private String mobileNo;
    private String subject;

    @Column(columnDefinition = "TEXT")
    private String message;

    @CurrentTimestamp
    private LocalDateTime createdAt;
}
