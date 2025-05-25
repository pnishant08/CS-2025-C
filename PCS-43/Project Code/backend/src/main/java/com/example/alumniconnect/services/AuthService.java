package com.example.alumniconnect.services;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.alumniconnect.dto.AuthRequestDto;
import com.example.alumniconnect.dto.AuthResponseDto;
import com.example.alumniconnect.dto.SignupRequestDto;
import com.example.alumniconnect.dto.UserInfo;
import com.example.alumniconnect.entity.RegisterCollegeEntity;
import com.example.alumniconnect.entity.UserEntity;
import com.example.alumniconnect.enums.StaticEnums;
import com.example.alumniconnect.repositories.RegisterCollege;
import com.example.alumniconnect.repositories.UserRepository;
import com.example.alumniconnect.responseModal.ResponseModal;
import com.example.alumniconnect.utils.JwtUtil;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.core.userdetails.User;
import java.util.Optional;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class AuthService {
    private final Logger log = LogManager.getLogger(AuthService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    RegisterCollege collegeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    ModelMapper modelMapper;

    public void signup(SignupRequestDto request, ResponseModal<AuthResponseDto> response, String collegeId,
            String unq) {
        try {
            log.info("[UNQ_{}] AuthService:signup", unq);

            if (userRepository.existsByEmail(request.getEmail())) {
                response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData, "Email already exists");
                return;
            }

            RegisterCollegeEntity college = collegeRepository.findByCollegeId(collegeId)
                    .orElseThrow(() -> new RuntimeException("College not found"));

            UserEntity user = new UserEntity();
            user.setEmail(request.getEmail());
            user.setUser_name(request.getUser_name());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setCollege(college);
            user.setRole(request.getRole());

            userRepository.save(user);

            response.setFinalResponse(StaticEnums.SUCCESS_CODE.staticData,
                    StaticEnums.SUCCESS_RESPONSE_MESSAGE.staticData);
        } catch (Exception e) {
            log.error("[UNQ_{}] Error in signup: {}", unq, e.getMessage());
            response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData,
                    StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }
    }

    public void login(AuthRequestDto request, ResponseModal<AuthResponseDto> response, String unq,
            HttpServletResponse httpresponse) {

        try {
            log.info("[UNQ_{}] AuthService:login", unq);

            Optional<RegisterCollegeEntity> college = collegeRepository.findByCollegeId(request.getCollegeId());

            if (college.isEmpty()) {
                log.error(" [UNQ_{}] College not found for ID: {}", unq, request.getCollegeId());
                response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData, "College not found");
                return;
            }
            UserEntity user = userRepository.findByEmailAndCollege_CollegeId(request.getEmail(), request.getCollegeId())
                    .orElseThrow(() -> new RuntimeException("User not found for college"));

            if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData, "Invalid credentials");
                return;
            }

            String token = jwtUtil.generateToken(new User(
                    user.getEmail(), user.getPassword(), List.of()));

            UserInfo userInfo = modelMapper.map(user,UserInfo.class);

            Cookie authTokenCookie = new Cookie("authToken", token);
            authTokenCookie.setHttpOnly(true);
            // authTokenCookie.setPath("/");

            String userInfoJson = new ObjectMapper().writeValueAsString(userInfo);
            String encodedUserInfoJson = java.net.URLEncoder.encode(userInfoJson, java.nio.charset.StandardCharsets.UTF_8.toString());
            Cookie userInfoCookie = new Cookie("userInfo", encodedUserInfoJson);
            userInfoCookie.setHttpOnly(true);
            // userInfoCookie.setPath("/");

            httpresponse.addCookie(authTokenCookie);
            httpresponse.addCookie(userInfoCookie);
            
            response.setApiResponseData(new AuthResponseDto(token, userInfo));
            response.setFinalResponse(StaticEnums.SUCCESS_CODE.staticData,
                    StaticEnums.SUCCESS_RESPONSE_MESSAGE.staticData);
        } catch (Exception e) {
            log.error("[UNQ_{}] Error in login: {} {}", unq, e.getMessage(), e);
            response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData,
                    StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }
    }
}
