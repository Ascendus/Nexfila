package com.nexfila.api.controller;

import com.nexfila.api.exception.ApiException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ApiException.class)
    public ResponseEntity<Map<String, String>> handleApiException(ApiException apiException) {
        return ResponseEntity
                .status(apiException.getStatus())
                .body(Map.of("erro", apiException.getMessage()));
    }
}