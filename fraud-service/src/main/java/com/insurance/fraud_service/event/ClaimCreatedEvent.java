package com.insurance.fraud_service.event;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClaimCreatedEvent {

    private Long claimId;

    private Double claimAmount;

    private String description;
}