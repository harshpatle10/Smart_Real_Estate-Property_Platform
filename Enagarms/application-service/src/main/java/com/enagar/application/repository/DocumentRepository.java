package com.enagar.application.repository;

import com.enagar.application.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository
        extends JpaRepository<Document, Long> {
}