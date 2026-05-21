package com.enagar.dto;

import lombok.Data;

@Data
public class BuildingApplicationRequest {

    private String applicantName;

    private String plotNumber;

    private String address;

    private String buildingType;

    private Long citizenId;
}