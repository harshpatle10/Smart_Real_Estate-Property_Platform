package com.enagar.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ReviewResponse {

    private Long reviewId;

    private String status;

    private String message;
}