package com.example.alumniconnect.dto;

import lombok.Data;

@Data
public class AuthRequestDto {
    private String email;
    private String password;
    private String collegeId;
}

