package com.enagar.application.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ApplicationResponse {

    private Long id;

    private String status;

    private String message;
}