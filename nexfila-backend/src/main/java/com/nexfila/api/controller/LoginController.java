package com.nexfila.api.controller;

import com.nexfila.api.dto.LoginRequest;
import com.nexfila.api.dto.LoginResponse;
import com.nexfila.api.service.LoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost",
        "https://nexfila.com.br",
        "https://www.nexfila.com.br"
})
@RestController
@RequestMapping("/api/auth")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest){
        LoginResponse response = loginService.login(loginRequest.getEmail(), loginRequest.getSenha());
        return ResponseEntity.ok(response);
    }

}
