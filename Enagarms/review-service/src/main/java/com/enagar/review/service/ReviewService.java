package com.enagar.review.service;

import com.enagar.review.dto.EngineerReviewRequest;
import com.enagar.review.dto.OfficerDecisionRequest;
import com.enagar.review.entity.Review;

import java.util.List;

public interface ReviewService {

    String createReview(
            EngineerReviewRequest request
    );

    String officerDecision(
            Long reviewId,
            OfficerDecisionRequest request
    );

    List<Review> getAllReviews();

    Review getReviewById(Long id);
}