package com.enagar.admin.service.impl;

import com.enagar.admin.dto.DashboardResponse;
import com.enagar.admin.dto.ZoneRequest;
import com.enagar.admin.entity.Zone;
import com.enagar.admin.repository.ZoneRepository;
import com.enagar.admin.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl
        implements AdminService {

    private final ZoneRepository zoneRepository;

    @Override
    public String createZone(
            ZoneRequest request
    ) {

        Zone zone = Zone.builder()
                .zoneName(
                        request.getZoneName()
                )
                .zoneCode(
                        request.getZoneCode()
                )
                .city(
                        request.getCity()
                )
                .createdAt(
                        LocalDateTime.now()
                )
                .build();

        zoneRepository.save(zone);

        return "Zone Created Successfully";
    }

    @Override
    public List<Zone> getAllZones() {

        return zoneRepository.findAll();
    }

    @Override
    public Zone getZoneById(Long id) {

        return zoneRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Zone not found"
                        ));
    }

    @Override
    public DashboardResponse getDashboard() {

        long totalZones =
                zoneRepository.count();

        return new DashboardResponse(
                totalZones,
                "Dashboard Loaded Successfully"
        );
    }
}