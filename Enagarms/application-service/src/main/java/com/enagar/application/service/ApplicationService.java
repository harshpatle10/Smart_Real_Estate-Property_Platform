package com.enagar.application.service;

import com.enagar.application.dto.ApplicationRequest;
import com.enagar.application.entity.Application;
import com.enagar.application.entity.ApplicationStatus;

import java.util.List;

public interface ApplicationService {

    String createApplication(
            ApplicationRequest request
    );


    List<Application> getAllApplications();

    Application getApplicationById(Long id);

    String updateStatus(
            Long id,
            ApplicationStatus status
    );

}