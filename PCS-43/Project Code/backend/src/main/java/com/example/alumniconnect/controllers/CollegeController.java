package com.example.alumniconnect.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.alumniconnect.dto.CollegeDto;
import com.example.alumniconnect.dto.RegisterCollegeDto;
import com.example.alumniconnect.dto.RegisterRequestDTO;
import com.example.alumniconnect.enums.StaticEnums;
import com.example.alumniconnect.responseModal.ResponseModal;
import com.example.alumniconnect.services.CollegeService;
import com.example.alumniconnect.utils.EmailService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api/colleges")
public class CollegeController {
    private final Logger log = LogManager.getLogger(CollegeController.class);

    @Autowired
    CollegeService collegeService;

    @Autowired
    EmailService emailService;

    @GetMapping("/healthcheck")
    public ResponseModal<String> healthCheck() {
        ResponseModal<String> response = new ResponseModal<>();

        emailService.sendSimpleMessage("tusharsahani0000@gmail.com", "tusharsahani000@gmail.com", "Checking the mail Service", "just ceck mail service is working or not");
        response.setFinalResponse(StaticEnums.SUCCESS_RESPONSE_CODE.staticData,
                StaticEnums.SUCCESS_RESPONSE_MESSAGE.staticData);

        return response;
    }

    @PostMapping("/registrationrequest")
    public ResponseModal<RegisterRequestDTO> collegeRegRequest(@RequestBody RegisterRequestDTO request,
            @RequestHeader String unq) {
        ResponseModal<RegisterRequestDTO> response = new ResponseModal<>();
        try {
            collegeService.registerRequestService(request, response, unq);

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

    @PostMapping("/registercollege")
    public ResponseModal<CollegeDto> collegeRegistration(@ModelAttribute RegisterCollegeDto request,
            @RequestHeader String unq) {
        ResponseModal<CollegeDto> response = new ResponseModal<>();
        try {
            collegeService.registerCollegeService(request, response, unq);

        } catch (Exception e) {
            log.error(
                    "[UNQ_{}] Error processing college registration request [ErrorMessage_{}] CollegeController : collegeRegistration()",
                    unq, e.getMessage());
            response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData,
                    StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }

        response.setApiResponseTime(
                new SimpleDateFormat(StaticEnums.SIMPLE_DATE_FORMATE.staticData).format(new Date()));

        return response;
    }

    @GetMapping("/allColleges/{param}")
    public ResponseModal<Object> getAllColleges(@PathVariable String param,@RequestHeader String unq) {
        ResponseModal<Object> response = new ResponseModal<>();
        try {
            collegeService.getAllCollegeService(param,response, unq);

        } catch (Exception e) {
            log.error(
                    "[UNQ_{}] Error processing college registration request [ErrorMessage_{}] CollegeController : collegeRegistration()",
                    unq, e.getMessage());
            response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData,
                    StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }

        response.setApiResponseTime(
                new SimpleDateFormat(StaticEnums.SIMPLE_DATE_FORMATE.staticData).format(new Date()));

        return response;
    }
    

}
