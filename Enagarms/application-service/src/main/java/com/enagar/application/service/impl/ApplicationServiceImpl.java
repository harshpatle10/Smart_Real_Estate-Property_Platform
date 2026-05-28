package com.enagar.application.service.impl;

import com.enagar.application.dto.ApplicationEvent;
import com.enagar.application.dto.ApplicationRequest;
import com.enagar.application.entity.Application;
import com.enagar.application.entity.ApplicationStatus;
import com.enagar.application.repository.ApplicationRepository;
import com.enagar.application.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

// for kafka
import com.enagar.application.kafka.ApplicationProducer;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl
        implements ApplicationService {

    private final ApplicationRepository applicationRepository;

     // for kafka
     private final ApplicationProducer producer;

    @Override
    public String createApplication(
            ApplicationRequest request
    ) {

        Application application =
                Application.builder()
                        .citizenName(
                                request.getCitizenName()
                        )
                        .buildingAddress(
                                request.getBuildingAddress()
                        )
                        .plotNumber(
                                request.getPlotNumber()
                        )
                        .status(
                                ApplicationStatus.PENDING
                        )
                        .remarks("Application Submitted")
                        .createdAt(LocalDateTime.now())
                        .build();

     Application data =   applicationRepository.save(application);
        // for kafka
        producer.sendApplicationEvent(data);

        return "Application Submitted Successfully";
    }

    @Override
    public List<Application> getAllApplications() {

        return applicationRepository.findAll();
    }

    @Override
    public Application getApplicationById(Long id) {

        return applicationRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Application not found"
                        ));
    }


    @Override
    public String updateStatus(
            Long id,
            ApplicationStatus status
    ) {

        Application application =
                applicationRepository
                        .findById(id)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Application Not Found"
                                )
                        );

        application.setStatus(status);

        applicationRepository
                .save(application);

        return "Status Updated Successfully";
    }
}