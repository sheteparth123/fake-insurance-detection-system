package com.insurance.claim_service.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ClaimRequest {

    private Double claimAmount;

    private String description;

    private LocalDate incidentDate;
}
