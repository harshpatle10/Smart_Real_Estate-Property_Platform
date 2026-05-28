package com.enagar.application.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "applications")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String citizenName;

    private String buildingAddress;

    private String plotNumber;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;

    private String remarks;

    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "application",
            cascade = CascadeType.ALL)
    private List<Document> documents;
}