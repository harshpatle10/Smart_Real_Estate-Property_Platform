package com.enagar.review.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EngineerReviewRequest {

    private Long applicationId;

    private String engineerName;

    private String remarks;
}