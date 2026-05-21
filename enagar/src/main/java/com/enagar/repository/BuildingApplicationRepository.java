package com.enagar.repository;

import com.enagar.entity.BuildingApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BuildingApplicationRepository
        extends JpaRepository<BuildingApplication, Long> {

    List<BuildingApplication> findByCitizenId(Long citizenId);

    List<BuildingApplication> findByAssignedEngineerId(Long engineerId);
}