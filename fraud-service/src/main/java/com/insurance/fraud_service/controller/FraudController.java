package com.insurance.fraud_service.controller;

import com.insurance.fraud_service.dto.FraudRequest;
import com.insurance.fraud_service.entity.FraudAnalysis;
import com.insurance.fraud_service.service.FraudService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/fraud")
@RequiredArgsConstructor
public class FraudController {

    private final FraudService fraudService;

    @PostMapping("/analyze")
    public FraudAnalysis analyzeClaim(
            @RequestBody FraudRequest request
    ) {

        return fraudService.analyzeClaim(request);
    }
}