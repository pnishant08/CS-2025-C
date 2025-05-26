package com.example.alumniconnect.responseModal;

import com.example.alumniconnect.enums.StaticEnums;
public class ResponseModal<T> {

    private String apiResponseCode;
    private String apiResponseMessage;
    private T apiResponseData;
    private String apiResponseTime;

    public ResponseModal() {
        this.apiResponseCode = StaticEnums.SUCCESS_RESPONSE_CODE.staticData;
        this.apiResponseMessage = StaticEnums.SUCCESS_RESPONSE_MESSAGE.staticData;
        this.apiResponseTime = "";
        this.apiResponseData = null;
    }

    public ResponseModal(String apiResponseCode, String apiResponseMessage, String apiResponseTime, String apiResponseFrom, T apiResponseData) {
        this.apiResponseCode = apiResponseCode;
        this.apiResponseMessage = apiResponseMessage;
        this.apiResponseTime = apiResponseTime;
        this.apiResponseData = apiResponseData;
    }

    public String getApiResponseCode() {
        return apiResponseCode;
    }

    public void setApiResponseCode(String apiResponseCode) {
        this.apiResponseCode = apiResponseCode;
    }

    public String getApiResponseMessage() {
        return apiResponseMessage;
    }

    public void setApiResponseMessage(String apiResponseMessage) {
        this.apiResponseMessage = apiResponseMessage;
    }

    public T getApiResponseData() {
        return apiResponseData;
    }

    public void setApiResponseData(T apiResponseData) {
        this.apiResponseData = apiResponseData;
    }

    public String getApiResponseTime() {
        return apiResponseTime;
    }

    public void setApiResponseTime(String apiResponseTime) {
        this.apiResponseTime = apiResponseTime;
    }

    public void setFinalResponse(String apiResponseCode, String apiResponseMessage) {
        this.setApiResponseCode(apiResponseCode);
        this.setApiResponseMessage(apiResponseMessage);
    }

    @Override
    public String toString() {
        return "ApiResponseModel {" +
                "apiResponseCode='" + apiResponseCode + '\'' +
                ", apiResponseMessage='" + apiResponseMessage + '\'' +
                ", apiResponseData=" + apiResponseData +
                ", apiResponseTime='" + apiResponseTime + '\'' +
                '}';
    }

}