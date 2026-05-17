package com.insurance.fraud_service.kafka;

import com.insurance.fraud_service.dto.FraudRequest;
import com.insurance.fraud_service.event.ClaimCreatedEvent;
import com.insurance.fraud_service.service.FraudService;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KafkaConsumer {

    private final FraudService fraudService;

    @KafkaListener(
            topics = "claim-created-topic",
            groupId = "fraud-group"
    )
    public void consumeClaimEvent(
            String message
    ) {

        System.out.println(
                "EVENT RECEIVED: " + message
        );

        String[] data =
                message.split(",");

        FraudRequest request =
                new FraudRequest();

        request.setClaimId(
                Long.parseLong(data[0])
        );

        request.setClaimAmount(
                Double.parseDouble(data[1])
        );

        request.setDescription(
                data[2]
        );

        fraudService.analyzeClaim(request);

        System.out.println(
                "FRAUD ANALYSIS COMPLETED"
        );
    }
}