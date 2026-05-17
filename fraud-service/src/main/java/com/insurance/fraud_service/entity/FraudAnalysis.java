package com.insurance.fraud_service.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "fraud_analysis")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FraudAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long claimId;

    private Integer fraudScore;

    private String riskLevel;

    @Column(columnDefinition = "TEXT")
    private String reason;
}