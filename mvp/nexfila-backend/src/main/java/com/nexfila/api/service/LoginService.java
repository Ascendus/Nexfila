package com.nexfila.api.service;

import com.nexfila.api.dto.LoginResponse;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private static final String EMAIL = "thiago@nexfila.com.br";
    private static final String SENHA = "123456";

    public LoginResponse login(String email, String senha) {
        if (EMAIL.equals(email) && SENHA.equals(senha)) {
            return new LoginResponse(true, "Login realizado com sucesso");
        } else {
            return new LoginResponse(false, "Email ou senha incorretos!");
        }
    }


}
