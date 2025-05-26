package com.example.alumniconnect.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Colleges_details")
public class RegisterCollegeEntity {

    @Id
    @Column(name = "collegeId", nullable = false, unique = true)
    private String collegeId;

    @Column(name = "collegeName", nullable = false)
    private String collegeName;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "state", nullable = false)
    private String state;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name = "postalCode", nullable = false)
    private String postalCode;

    @Column(name = "contactEmail", nullable = false)
    private String email;

    @Column(name = "contactPhone", nullable = false)
    private String phone;

    @Column(name = "websiteUrl")
    private String websiteUrl;

    @Column(name = "principalName", nullable = false)
    private String principalName;

    @Column(name = "logoUrl", nullable = false)
    private String logoUrl;

    @Column(name = "coverImg", nullable = false)
    private String coverImg;   
}
