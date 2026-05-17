package com.insurance.fraud_service.service;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class GeminiService {

    @Value("${openrouter.api.key}")
    private String apiKey;

    private final WebClient.Builder webClientBuilder;

    public String analyzeClaim(String description) {

        try {

            String body = """
                {
                  "model": "openai/gpt-3.5-turbo",
                  "messages": [
                    {
                      "role": "user",
                      "content": "Analyze this insurance claim for fraud: %s"
                    }
                  ]
                }
                """.formatted(description);

            String response = webClientBuilder.build()
                    .post()
                    .uri("https://openrouter.ai/api/v1/chat/completions")
                    .header("Authorization", "Bearer " + apiKey)
                    .header("HTTP-Referer", "http://localhost:8083")
                    .header("X-Title", "Fraud Detection System")
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(body)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            ObjectMapper mapper = new ObjectMapper();

            JsonNode root = mapper.readTree(response);

            String aiText = root
                    .get("choices")
                    .get(0)
                    .get("message")
                    .get("content")
                    .asText();

            return aiText;

        } catch (Exception e) {

            e.printStackTrace();

            return "AI analysis unavailable: " + e.getMessage();
        }
    }
}