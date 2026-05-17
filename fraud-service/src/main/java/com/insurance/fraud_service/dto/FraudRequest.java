package com.insurance.fraud_service.dto;

import lombok.Data;

@Data
public class FraudRequest {

    private Long claimId;

    private Double claimAmount;

    private String description;
}