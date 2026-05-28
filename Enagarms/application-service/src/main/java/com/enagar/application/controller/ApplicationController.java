package com.enagar.application.controller;

import com.enagar.application.dto.ApplicationRequest;
import com.enagar.application.entity.Application;
import com.enagar.application.entity.ApplicationStatus;
import com.enagar.application.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applications")
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping
    public String createApplication(
            @RequestBody ApplicationRequest request
    ) {

        return applicationService
                .createApplication(request);
    }

    @GetMapping
    public List<Application> getAllApplications() {

        return applicationService
                .getAllApplications();
    }

    @GetMapping("/{id}")
    public Application getApplicationById(
            @PathVariable Long id
    ) {

        return applicationService
                .getApplicationById(id);
    }


    // it is use to change status in engineer dashboard

    @PutMapping("/{id}/status")
    public String updateStatus(

            @PathVariable Long id,

            @RequestParam ApplicationStatus status

    ) {

        return applicationService
                .updateStatus(id, status);
    }
}