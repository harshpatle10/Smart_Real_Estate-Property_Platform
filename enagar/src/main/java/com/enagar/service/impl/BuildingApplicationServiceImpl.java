package com.enagar.service.impl;

import com.enagar.dto.BuildingApplicationRequest;
import com.enagar.entity.BuildingApplication;
import com.enagar.enums.ApplicationStatus;
import com.enagar.repository.BuildingApplicationRepository;
import com.enagar.service.BuildingApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BuildingApplicationServiceImpl
        implements BuildingApplicationService {

    private final BuildingApplicationRepository repository;

    @Override
    public BuildingApplication create(
            BuildingApplicationRequest request
    ) {

        BuildingApplication app =
                BuildingApplication.builder()
                        .applicantName(
                                request.getApplicantName()
                        )
                        .plotNumber(
                                request.getPlotNumber()
                        )
                        .address(
                                request.getAddress()
                        )
                        .buildingType(
                                request.getBuildingType()
                        )
                        .citizenId(
                                request.getCitizenId()
                        )
                        .status(
                                ApplicationStatus.PENDING
                        )
                        .createdAt(
                                LocalDateTime.now()
                        )
                        .build();

        return repository.save(app);
    }

    @Override
    public List<BuildingApplication> getAll() {
        return repository.findAll();
    }

    @Override
    public List<BuildingApplication> getCitizenApps(
            Long citizenId
    ) {

        return repository.findByCitizenId(citizenId);
    }
}