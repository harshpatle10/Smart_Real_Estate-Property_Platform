package com.enagar.admin.controller;

import com.enagar.admin.dto.DashboardResponse;
import com.enagar.admin.dto.ZoneRequest;
import com.enagar.admin.entity.Zone;
import com.enagar.admin.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/zones")
    public String createZone(
            @RequestBody
            ZoneRequest request
    ) {

        return adminService
                .createZone(request);
    }

    @GetMapping("/zones")
    public List<Zone> getAllZones() {

        return adminService
                .getAllZones();
    }

    @GetMapping("/zones/{id}")
    public Zone getZoneById(
            @PathVariable Long id
    ) {

        return adminService
                .getZoneById(id);
    }

    @GetMapping("/dashboard")
    public DashboardResponse getDashboard() {

        return adminService
                .getDashboard();
    }
}