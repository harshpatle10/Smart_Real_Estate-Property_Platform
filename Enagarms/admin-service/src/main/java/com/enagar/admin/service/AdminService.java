package com.enagar.admin.service;

import com.enagar.admin.dto.DashboardResponse;
import com.enagar.admin.dto.ZoneRequest;
import com.enagar.admin.entity.Zone;

import java.util.List;

public interface AdminService {

    String createZone(
            ZoneRequest request
    );

    List<Zone> getAllZones();

    Zone getZoneById(Long id);

    DashboardResponse getDashboard();
}