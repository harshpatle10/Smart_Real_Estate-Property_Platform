package com.enagar.review.dto;

import lombok.Data;

@Data
public class ApplicationEvent {

    private Long id;

    private String citizenName;

    private String buildingAddress;

    private String plotNumber;

    private String status;
}