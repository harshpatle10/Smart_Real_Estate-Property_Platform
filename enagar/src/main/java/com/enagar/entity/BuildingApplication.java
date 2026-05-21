package com.enagar.entity;

import com.enagar.enums.ApplicationStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "building_applications")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BuildingApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String applicantName;

    private String plotNumber;

    private String address;

    private String buildingType;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;

    @Column(length = 1000)
    private String engineerRemark;

    @Column(length = 1000)
    private String officerRemark;

    private Long citizenId;

    private Long assignedEngineerId;

    private Long reviewedByOfficerId;

    private LocalDateTime createdAt;
}