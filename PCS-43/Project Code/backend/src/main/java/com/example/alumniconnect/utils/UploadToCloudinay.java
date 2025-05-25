package com.example.alumniconnect.utils;

import com.cloudinary.Cloudinary;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Component
public class UploadToCloudinay {
    private final Logger log = LogManager.getLogger(UploadToCloudinay.class);

    private final Cloudinary cloudinary;

    public UploadToCloudinay(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    public String uploadImageAndGetUrl(MultipartFile file, String collegeId) {
        try {
            log.info("---------Uploading image to Cloudinary: uploadImageAndGetUrl()---------");
            
            if (file == null || file.isEmpty()) {
                throw new IllegalArgumentException("Image file must not be null or empty");
            }
            if (collegeId == null || collegeId.isBlank()) {
                throw new IllegalArgumentException("College ID must not be null or blank");
            }

            Map<String, Object> options = Map.of("public_id", "colleges/" + collegeId,"overwrite", true);

            Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), options);

            return uploadResult.get("secure_url").toString();

        } catch (IOException e) {
            log.error("Error uploading image to Cloudinary: {}", e.getMessage());
            
        }
        catch(Exception e){
            log.error("Exception in uploading image to Cloudinary: {}", e.getMessage());
         
        }
        return "";
    }
}
