package com.example.alumniconnect.enums;
public enum StaticEnums {
    SUCCESS_CODE("200"),
    LOG_PRINT("URN"),
    SUCCESS_RESPONSE_CODE("200"),
    SUCCESS_RESPONSE_MESSAGE("Success"),
    PENDING_RESPONSE_CODE("101"),
    PENDING_MESSAGE("PENDING"),
    ERROR_RESPONSE_CODE("401"),
    SOMETHING_WENT_WRONG("Something went Wrong!"),
    RESPONSECODE("responseCode"),
    RESPONSE("RESPONSE"),
    RESPONSEMESSAGE("responseMessage"),
    ERROR_MESSAGE("errorMessage"),
	SIMPLE_DATE_FORMATE("yyyy-MM-dd HH-mm-ss");

    public final String staticData;

    StaticEnums(String staticData) {
        this.staticData = staticData;
    }
}