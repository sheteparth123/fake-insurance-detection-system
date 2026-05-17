package com.insurance.claim_service.kafka;

import com.insurance.claim_service.event.ClaimCreatedEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KafkaProducer {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public void sendClaimEvent(
            ClaimCreatedEvent event
    ) {

        String message =
                event.getClaimId() + ","
                        + event.getClaimAmount() + ","
                        + event.getDescription();

        kafkaTemplate.send(
                "claim-created-topic",
                message
        );

        System.out.println(
                "EVENT SENT: " + message
        );
    }
}