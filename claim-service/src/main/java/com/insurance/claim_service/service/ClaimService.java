package com.insurance.claim_service.service;



import com.insurance.claim_service.dto.ClaimRequest;
import com.insurance.claim_service.entity.*;
import com.insurance.claim_service.repository.ClaimRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClaimService {

    private final ClaimRepository claimRepository;

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

        claimRepository.save(claim);

        return "Claim Submitted Successfully";
    }
}
