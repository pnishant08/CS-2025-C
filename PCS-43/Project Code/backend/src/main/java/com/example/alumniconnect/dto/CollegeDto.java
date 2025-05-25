package com.example.alumniconnect.dto;


import lombok.Data;

@Data
public class CollegeDto {
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

    private String LogoImg;   

    private String coverImg; 
}
