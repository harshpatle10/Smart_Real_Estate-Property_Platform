package com.enagar.service;

import com.enagar.dto.BuildingApplicationRequest;
import com.enagar.entity.BuildingApplication;

import java.util.List;

public interface BuildingApplicationService {

    BuildingApplication create(
            BuildingApplicationRequest request
    );

    List<BuildingApplication> getAll();

    List<BuildingApplication> getCitizenApps(
            Long citizenId
    );
}