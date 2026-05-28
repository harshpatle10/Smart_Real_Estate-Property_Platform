package com.enagar.review.controller;

import com.enagar.review.dto.EngineerReviewRequest;
import com.enagar.review.dto.OfficerDecisionRequest;
import com.enagar.review.entity.Review;
import com.enagar.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public String createReview(
            @RequestBody
            EngineerReviewRequest request
    ) {

        return reviewService
                .createReview(request);
    }

    @PutMapping("/{id}")
    public String officerDecision(
            @PathVariable Long id,

            @RequestBody
            OfficerDecisionRequest request
    ) {

        return reviewService
                .officerDecision(id, request);
    }

    @GetMapping
    public List<Review> getAllReviews() {

        return reviewService
                .getAllReviews();
    }

    @GetMapping("/{id}")
    public Review getReviewById(
            @PathVariable Long id
    ) {

        return reviewService
                .getReviewById(id);
    }
}