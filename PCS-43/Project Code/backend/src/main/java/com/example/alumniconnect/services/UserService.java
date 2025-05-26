package com.example.alumniconnect.services;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.alumniconnect.dto.UserInfo;
import com.example.alumniconnect.entity.UserEntity;
import com.example.alumniconnect.enums.StaticEnums;
import com.example.alumniconnect.repositories.UserRepository;
import com.example.alumniconnect.responseModal.ResponseModal;

@Service
public class UserService {
    private final Logger log = LogManager.getLogger(UserService.class);

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    UserRepository userRepository;

    public void getAllUsers(String collegeId, String unq, ResponseModal<List<UserInfo>> response) {
        try {
            log.info("[UNQ_{}] Inside UserService:getAllUsers()", unq);

            List<UserEntity> allusers = userRepository.findAllByCollege_CollegeId(collegeId);

            List<UserInfo> users = allusers.stream().map(user -> modelMapper.map(user, UserInfo.class))
                    .collect(Collectors.toList());

            response.setApiResponseData(users);
            response.setFinalResponse(StaticEnums.SUCCESS_RESPONSE_CODE.staticData,
                    StaticEnums.SUCCESS_RESPONSE_MESSAGE.staticData);

            log.info("[UNQ_{}] All users get successfully [Response_{}]", unq,
                    users);

        } catch (Exception e) {
            log.error(
                    "[UNQ_{}] Error processing college registration request [ErrorMessage_{}] UserService : getAllUsers()",
                    unq, e.getMessage());
            response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData,
                    StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }
    }
}
