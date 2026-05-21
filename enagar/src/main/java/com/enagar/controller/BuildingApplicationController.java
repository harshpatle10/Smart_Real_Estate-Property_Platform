package com.enagar.controller;

import com.enagar.dto.BuildingApplicationRequest;
import com.enagar.entity.BuildingApplication;
import com.enagar.service.BuildingApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
@CrossOrigin("*")
public class BuildingApplicationController {

    private final BuildingApplicationService service;

    @PostMapping
    public BuildingApplication create(
            @RequestBody BuildingApplicationRequest request
    ) {

        return service.create(request);
    }

    @GetMapping
    public List<BuildingApplication> getAll() {

        return service.getAll();
    }

    @GetMapping("/citizen/{id}")
    public List<BuildingApplication> getCitizenApps(
            @PathVariable Long id
    ) {

        return service.getCitizenApps(id);
    }
}