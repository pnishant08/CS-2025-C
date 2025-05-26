package com.example.alumniconnect.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.alumniconnect.dto.AuthRequestDto;
import com.example.alumniconnect.dto.AuthResponseDto;
import com.example.alumniconnect.dto.SignupRequestDto;
import com.example.alumniconnect.enums.StaticEnums;
import com.example.alumniconnect.responseModal.ResponseModal;
import com.example.alumniconnect.services.AuthService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final Logger log = LogManager.getLogger(AuthController.class);

    @Autowired
    private AuthService authService;

    @PostMapping("/signup/{collegeId}")
    public ResponseModal<AuthResponseDto> signup(@RequestBody SignupRequestDto request,@PathVariable String collegeId, @RequestHeader String unq) {
        ResponseModal<AuthResponseDto> response = new ResponseModal<>();
        try {
            authService.signup(request,response,collegeId, unq);
        } catch (Exception e) {
            log.error(
                    "[UNQ_{}] Error processing college registration request [ErrorMessage_{}] AuthController : signup()",
                    unq, e.getMessage());
            response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData,
                    StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }

        response.setApiResponseTime(
                new SimpleDateFormat(StaticEnums.SIMPLE_DATE_FORMATE.staticData).format(new Date()));
        return response;
    }

    @PostMapping("/login")
    public ResponseModal<AuthResponseDto> login(@RequestBody AuthRequestDto request, @RequestHeader String unq,HttpServletResponse httpresponse) {
        ResponseModal<AuthResponseDto> response = new ResponseModal<>();
        try {
            authService.login(request,response, unq,httpresponse);
        } catch (Exception e) {
            log.error(
                    "[UNQ_{}] Error processing college registration request [ErrorMessage_{}] AuthController : login()",
                    unq, e.getMessage());
            response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData,
                    StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }

        response.setApiResponseTime(
                new SimpleDateFormat(StaticEnums.SIMPLE_DATE_FORMATE.staticData).format(new Date()));
        return response;
    }
}
