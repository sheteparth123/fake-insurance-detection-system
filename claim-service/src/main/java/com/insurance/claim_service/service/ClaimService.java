package com.insurance.claim_service.service;



import com.insurance.claim_service.dto.ClaimRequest;
import com.insurance.claim_service.entity.*;
import com.insurance.claim_service.event.ClaimCreatedEvent;
import com.insurance.claim_service.kafka.KafkaProducer;
import com.insurance.claim_service.repository.ClaimRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClaimService {

    private final ClaimRepository claimRepository;
    private final KafkaProducer kafkaProducer;

    public String createClaim(
            ClaimRequest request
    ) {

        Claim claim = Claim.builder()
//                .userEmail("parth@gmail.com")
                .userEmail(
                        SecurityContextHolder
                                .getContext()
                                .getAuthentication()
                                .getName()
                )
                .claimAmount(request.getClaimAmount())
                .description(request.getDescription())
                .incidentDate(request.getIncidentDate())
                .status(ClaimStatus.PENDING)
                .fraudScore(0)
                .riskLevel(RiskLevel.LOW)
                .build();

        Claim savedClaim=claimRepository.save(claim);
        ClaimCreatedEvent event =
                ClaimCreatedEvent.builder()
                        .claimId(savedClaim.getId())
                        .claimAmount(savedClaim.getClaimAmount())
                        .description(savedClaim.getDescription())
                        .build();

        kafkaProducer.sendClaimEvent(event);

        return "Claim Submitted Successfully";
    }
}
