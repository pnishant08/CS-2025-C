package com.example.alumniconnect.dto;


import lombok.Data;

@Data
public class SignupRequestDto {
    private String user_name;
    private String email;
    private String collegeId;
    private String role;
    private String password;
}