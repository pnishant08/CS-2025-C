package com.example.alumniconnect.dto;

// import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class UserInfo {
    private String user_name;
    private String email;
    private String collegeId;
    private String role;
    private String user_id;

    private String batch;

    private String branch;
}
