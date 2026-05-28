package com.enagar.application.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class DocumentResponse {

    private String documentName;

    private String documentUrl;
}