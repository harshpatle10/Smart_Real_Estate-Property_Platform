package com.enagar.admin.repository;

import com.enagar.admin.entity.Zone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ZoneRepository
        extends JpaRepository<Zone, Long> {
}