package com.insurance.claim_service.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "claims")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Claim {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userEmail;

    private Double claimAmount;

    private String description;

    private LocalDate incidentDate;

    @Enumerated(EnumType.STRING)
    private ClaimStatus status;

    private Integer fraudScore;

    @Enumerated(EnumType.STRING)
    private RiskLevel riskLevel;
}