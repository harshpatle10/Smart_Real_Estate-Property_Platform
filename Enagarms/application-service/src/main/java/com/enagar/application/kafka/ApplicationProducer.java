package com.enagar.application.kafka;

import com.enagar.application.dto.ApplicationEvent;
import com.enagar.application.entity.Application;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class ApplicationProducer {

    private final KafkaTemplate<String, Object> kafkaTemplate;

    public ApplicationProducer(KafkaTemplate<String, Object> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendApplicationEvent(Application app) {

        kafkaTemplate.send("application-events", app);

        System.out.println("Message Sent: " + app);
    }
}