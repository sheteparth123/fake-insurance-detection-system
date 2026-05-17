package com.insurance.fraud_service.repository;

import com.insurance.fraud_service.entity.FraudAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FraudAnalysisRepository
        extends JpaRepository<FraudAnalysis, Long> {
}