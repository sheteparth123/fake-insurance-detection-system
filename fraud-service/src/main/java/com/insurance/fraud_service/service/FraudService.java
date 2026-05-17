package com.insurance.fraud_service.service;

import com.insurance.fraud_service.service.GeminiService;
import com.insurance.fraud_service.dto.FraudRequest;
import com.insurance.fraud_service.entity.FraudAnalysis;
import com.insurance.fraud_service.repository.FraudAnalysisRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FraudService {

    private final FraudAnalysisRepository repository;
    private final GeminiService geminiService;

    public FraudAnalysis analyzeClaim(
            FraudRequest request
    ) {

        int score = 10;
        String risk = "LOW";
        String reason = "Claim appears normal";

        // Rule-based fraud detection
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

        // Gemini AI Analysis
        String aiAnalysis =
                geminiService.analyzeClaim(
                        request.getDescription()
                );

        // Add AI response to reason
        reason = reason + "\n\nAI Analysis:\n" + aiAnalysis;

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