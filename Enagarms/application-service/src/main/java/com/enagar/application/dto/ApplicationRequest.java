package com.enagar.application.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApplicationRequest {

    private String citizenName;

    private String buildingAddress;

    private String plotNumber;
}