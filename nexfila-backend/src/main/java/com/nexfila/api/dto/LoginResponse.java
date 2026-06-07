package com.nexfila.api.dto;

public class LoginResponse {

    private boolean sucesso;
    private String mensagem;

    public LoginResponse(boolean sucesso, String mensagem) {
        this.sucesso = sucesso;
        this.mensagem = mensagem;
    }

    public boolean isSucesso(){
        return sucesso;
    }

    public String getMensagem() {
        return mensagem;
    }
}
