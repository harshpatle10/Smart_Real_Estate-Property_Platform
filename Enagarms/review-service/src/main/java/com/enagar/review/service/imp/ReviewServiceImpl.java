package com.enagar.review.service.imp;

import com.enagar.review.dto.EngineerReviewRequest;
import com.enagar.review.dto.OfficerDecisionRequest;
import com.enagar.review.entity.Review;
import com.enagar.review.entity.ReviewStatus;
import com.enagar.review.repository.ReviewRepository;
import com.enagar.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl
        implements ReviewService {

    private final ReviewRepository reviewRepository;

    @Override
    public String createReview(
            EngineerReviewRequest request
    ) {

        Review review = Review.builder()
                .applicationId(
                        request.getApplicationId()
                )
                .engineerName(
                        request.getEngineerName()
                )
                .remarks(
                        request.getRemarks()
                )
                .status(
                        ReviewStatus.UNDER_REVIEW
                )
                .reviewDate(
                        LocalDateTime.now()
                )
                .build();

        reviewRepository.save(review);

        return "Review Added Successfully";
    }

    @Override
    public String officerDecision(
            Long reviewId,
            OfficerDecisionRequest request
    ) {

        Review review = reviewRepository
                .findById(reviewId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review not found"
                        ));

        review.setOfficerName(
                request.getOfficerName()
        );

        review.setRemarks(
                request.getRemarks()
        );

        review.setStatus(
                request.getStatus()
        );

        reviewRepository.save(review);

        return "Decision Updated Successfully";
    }

    @Override
    public List<Review> getAllReviews() {

        return reviewRepository.findAll();
    }

    @Override
    public Review getReviewById(Long id) {

        return reviewRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review not found"
                        ));
    }
}