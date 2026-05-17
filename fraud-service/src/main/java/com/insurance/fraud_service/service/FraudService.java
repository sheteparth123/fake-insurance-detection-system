package com.insurance.fraud_service.service;

import com.insurance.fraud_service.dto.FraudRequest;
import com.insurance.fraud_service.entity.FraudAnalysis;
import com.insurance.fraud_service.repository.FraudAnalysisRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FraudService {

    private final FraudAnalysisRepository repository;

    public FraudAnalysis analyzeClaim(
            FraudRequest request
    ) {

        int score = 10;
        String risk = "LOW";
        String reason = "Claim appears normal";

        if(request.getClaimAmount() > 500000) {

            score += 40;
            risk = "MEDIUM";
            reason = "High claim amount";
        }

        if(request.getDescription()
                .toLowerCase()
                .contains("urgent")) {

            score += 20;
            risk = "HIGH";
            reason = "Suspicious urgent wording";
        }

        FraudAnalysis analysis =
                FraudAnalysis.builder()
                        .claimId(request.getClaimId())
                        .fraudScore(score)
                        .riskLevel(risk)
                        .reason(reason)
                        .build();

        return repository.save(analysis);
    }
}
