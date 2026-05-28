package com.enagar.review.repository;

import com.enagar.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository
        extends JpaRepository<Review, Long> {
}