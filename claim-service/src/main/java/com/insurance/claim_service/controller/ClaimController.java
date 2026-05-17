package com.insurance.claim_service.controller;



import com.insurance.claim_service.dto.ClaimRequest;
import com.insurance.claim_service.service.ClaimService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/claims")
@RequiredArgsConstructor
public class ClaimController {

    private final ClaimService claimService;

    @PostMapping
    public String createClaim(
            @RequestBody ClaimRequest request
    ) {
        return claimService.createClaim(request);
    }
}
