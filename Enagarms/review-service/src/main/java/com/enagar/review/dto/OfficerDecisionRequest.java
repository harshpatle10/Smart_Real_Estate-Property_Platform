package com.enagar.review.dto;

import com.enagar.review.entity.ReviewStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OfficerDecisionRequest {

    private String officerName;

    private String remarks;

    private ReviewStatus status;
}