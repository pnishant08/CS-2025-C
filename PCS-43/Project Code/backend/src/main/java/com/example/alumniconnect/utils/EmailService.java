package com.example.alumniconnect.utils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailService {
    private final Logger log = LogManager.getLogger(EmailService.class);

    @Autowired
    private JavaMailSender emailSender;
    
    public void sendSimpleMessage(String from,String to, String subject, String text) {
    	try {
    		SimpleMailMessage message = new SimpleMailMessage(); 
            message.setFrom(from);
            message.setTo(to); 
            message.setSubject(subject); 
            message.setText(text);
            emailSender.send(message);
		} catch (NullPointerException e) {
			log.error("NullPointerException while sending Simple email ",e);
		} catch (Exception e) {
			log.error("Exception while sending Simple email {}",e.getMessage());
		}
    }
}
