package com.example.alumniconnect.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class RegisterCollegeDto {
    private String collegeId;
    private String collegeName;
    private String city;
    private String state;
    private String country;
    private String postalCode;

    private String email;         
    private String phone;        

    private String websiteUrl;           
    private String principalName;        

    private MultipartFile LogoImg;   

    private MultipartFile coverImg; 
    
}
