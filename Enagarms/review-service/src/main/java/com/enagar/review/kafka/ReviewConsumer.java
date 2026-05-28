package com.enagar.review.kafka;

import com.enagar.review.dto.ApplicationEvent;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class ReviewConsumer {

    @KafkaListener(
            topics = "application-events",
            groupId = "review-group"
    )
    public void consume(ApplicationEvent event) {

        System.out.println(
                "Review Received Application: "
                        + event.getCitizenName()
        );

        System.out.println(
                "Plot Number: "
                        + event.getPlotNumber()
        );
    }
}