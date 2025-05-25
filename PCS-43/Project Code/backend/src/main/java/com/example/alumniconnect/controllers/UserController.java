package com.example.alumniconnect.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.alumniconnect.dto.UserInfo;
import com.example.alumniconnect.enums.StaticEnums;
import com.example.alumniconnect.responseModal.ResponseModal;
import com.example.alumniconnect.services.UserService;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final Logger log = LogManager.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @GetMapping("/getAllUsers/{collegeId}")
    public ResponseModal<List<UserInfo>> getAllUserController(@PathVariable String collegeId,
            @RequestHeader String unq) {
        ResponseModal<List<UserInfo>> response = new ResponseModal<>();
        try {
            userService.getAllUsers(collegeId, unq, response);

        } catch (Exception e) {
            log.error(
                    "[UNQ_{}] Error processing college registration request [ErrorMessage_{}] CollegeController : collegeRegRequest()",
                    unq, e.getMessage());
            response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData,
                    StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }

        response.setApiResponseTime(
                new SimpleDateFormat(StaticEnums.SIMPLE_DATE_FORMATE.staticData).format(new Date()));
        return response;
    }

}
