package com.enagar.review.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "reviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long applicationId;

    private String engineerName;

    private String officerName;

    private String remarks;

    @Enumerated(EnumType.STRING)
    private ReviewStatus status;

    private LocalDateTime reviewDate;
}