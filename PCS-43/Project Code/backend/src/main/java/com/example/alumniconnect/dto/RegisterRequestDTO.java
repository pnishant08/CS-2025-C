package com.example.alumniconnect.dto;

import lombok.Data;

@Data
public class RegisterRequestDTO {
    private String name;

    private String email;
    private String mobileNo;
    private String subject;
    private String message;
}
