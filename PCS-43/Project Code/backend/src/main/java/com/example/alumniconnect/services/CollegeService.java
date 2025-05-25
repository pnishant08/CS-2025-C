package com.example.alumniconnect.services;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.alumniconnect.dto.CollegeDto;
import com.example.alumniconnect.dto.RegisterCollegeDto;
import com.example.alumniconnect.dto.RegisterRequestDTO;
import com.example.alumniconnect.entity.RegisterCollegeEntity;
import com.example.alumniconnect.entity.RegisterRequestEntity;
import com.example.alumniconnect.enums.StaticEnums;
import com.example.alumniconnect.repositories.CollegeRepository;
import com.example.alumniconnect.repositories.RegisterCollege;
import com.example.alumniconnect.responseModal.ResponseModal;
import com.example.alumniconnect.utils.EmailService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class CollegeService {
    private final Logger log = LogManager.getLogger(CollegeService.class);
    
    @Autowired
    ObjectMapper objectMapper;

    private final ModelMapper modelMapper;
    private final CollegeRepository collegeRepository;
    private final RegisterCollege registerCollege;

    public CollegeService(ModelMapper modelMapper,CollegeRepository collegeRepository,RegisterCollege registerCollege){
        this.modelMapper = modelMapper;
        this.collegeRepository = collegeRepository;
        this.registerCollege = registerCollege;
    }

    @Autowired
    EmailService emailService;

    @Autowired
    private Cloudinary cloudinary;

    public void registerRequestService(RegisterRequestDTO request,ResponseModal<RegisterRequestDTO> response,String unq){
        try {
            log.info("[UNQ_{}] Inside CollegeService:registerRequestService() [Request_{}]",unq,request);

            RegisterRequestEntity redRequestEntity = modelMapper.map(request, RegisterRequestEntity.class);
            RegisterRequestEntity savedRequest = collegeRepository.save(redRequestEntity);

            String body = String.format(
                "Hi %s,\n\n" +
                "Thank you for making the college registration request with GradCircle.\n" +
                "We have verified your request and successfully initiated your registeration request.\n\n" +
                "You can register you college with GradCircle on the link provided below:\n" +
                "Registration Link: http://192.168.123.237:3001/registerCollege\n\n" +
                "If you need any support, feel free to contact us at support@gradcircle.com or call 123-456-7890.\n\n" +
                "Thank you,\n" +
                "Team GradCircle",
                savedRequest.getName()
            );
            emailService.sendSimpleMessage("tusharsahani0000@gmail.com", savedRequest.getEmail(), "College Registration Request Confirmation", body);

            response.setApiResponseData(modelMapper.map(savedRequest, RegisterRequestDTO.class));

            log.info("[UNQ_{}] College registration request processed successfully [Response_{}]",unq,response.getApiResponseData());
                
            } catch (Exception e) {
                log.error("[UNQ_{}] Error processing college registration request [ErrorMessage_{}] CollegeService : registerRequestService()" ,unq, e.getMessage());
                response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData, StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }
    }

    public void registerCollegeService(RegisterCollegeDto request, ResponseModal<CollegeDto> response, String unq) {
        try {
            log.info("[UNQ_{}] Inside CollegeService:registerCollegeService() [Request_{}]", unq, request);
    
            String logoUrl = null;
            if (request.getLogoImg() != null && !request.getLogoImg().isEmpty()) {
                try {
                    
                    @SuppressWarnings("unchecked")
                    Map<String, Object> uploadResult = cloudinary.uploader().upload(request.getLogoImg().getBytes(), ObjectUtils.emptyMap());
                    logoUrl = uploadResult.get("secure_url").toString();
                } catch (Exception e) {
                    log.error("[UNQ_{}] Cloudinary logo upload failed: {}", unq, e.getMessage());
                }
            } else {
                log.warn("[UNQ_{}] No logo image provided", unq);
            }
    
            String coverUrl = null;
            if (request.getCoverImg() != null && !request.getCoverImg().isEmpty()) {
                try {
                    @SuppressWarnings("unchecked")
                    Map<String, Object> uploadResult = cloudinary.uploader().upload(request.getCoverImg().getBytes(), ObjectUtils.emptyMap());
                    coverUrl = uploadResult.get("secure_url").toString();
                } catch (Exception e) {
                    log.error("[UNQ_{}] Cloudinary cover image upload failed: {}", unq, e.getMessage());
                }
            } else {
                log.warn("[UNQ_{}] No cover image provided", unq);
            }
    
            RegisterCollegeEntity redRequestEntity = modelMapper.map(request, RegisterCollegeEntity.class);

            redRequestEntity.setLogoUrl(logoUrl);
            redRequestEntity.setCoverImg(coverUrl);
            
            System.out.println(redRequestEntity);
            RegisterCollegeEntity savedRequest = registerCollege.save(redRequestEntity);
    
            response.setApiResponseData(modelMapper.map(savedRequest, CollegeDto.class));
    
            log.info("[UNQ_{}] College registration request processed successfully [Response_{}]", unq, response.getApiResponseData());
    
        } catch (Exception e) {
            log.error("[UNQ_{}] Error processing college registration request [ErrorMessage_{}] CollegeService : registerCollegeService()", unq, e.getMessage());
            response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData, StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }
    }

    public void getAllCollegeService(String param, ResponseModal<Object> response, String unq) {
        try {
            log.info("[UNQ_{}] Inside CollegeService:getAllCollegeService()", unq);
            
            if(param.equals("All")){
                List<RegisterCollegeEntity> collegeEntities = registerCollege.findAll();
                if(collegeEntities.isEmpty()) {
                    log.error("[UNQ_{}] No colleges found ", unq);
                    response.setFinalResponse(StaticEnums.ERROR_MESSAGE.staticData, StaticEnums.SOMETHING_WENT_WRONG.staticData);
                    return;
                }

                List<CollegeDto> dtos = collegeEntities.stream()
                    .map(college -> modelMapper.map(college, CollegeDto.class))
                    .collect(Collectors.toList());
                response.setFinalResponse(StaticEnums.SUCCESS_CODE.staticData, StaticEnums.SUCCESS_RESPONSE_MESSAGE.staticData);
                response.setApiResponseData(dtos);
            }
            else{
                Optional<RegisterCollegeEntity> collegeEntity = registerCollege.findById(param);
                if(collegeEntity.isEmpty()) {
                    log.error("[UNQ_{}] College with ID {} not found", unq, param);
                    response.setFinalResponse(StaticEnums.ERROR_MESSAGE.staticData, StaticEnums.SOMETHING_WENT_WRONG.staticData);
                    return;
                }
                response.setFinalResponse(StaticEnums.SUCCESS_CODE.staticData, StaticEnums.SUCCESS_RESPONSE_MESSAGE.staticData);
                response.setApiResponseData(modelMapper.map(collegeEntity, CollegeDto.class));
            }
            
        
            log.info("[UNQ_{}] Successfully retrieved all colleges [Response_{}]", unq, response);
        } catch (Exception e) {
            log.error("[UNQ_{}] Error retrieving all colleges [ErrorMessage_{}] CollegeService : getAllCollegeService()", unq, e.getMessage());
            response.setFinalResponse(StaticEnums.ERROR_RESPONSE_CODE.staticData, StaticEnums.SOMETHING_WENT_WRONG.staticData);
        }
    }
    
}
