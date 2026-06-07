package com.nexfila.api.dto;

public class PessoaResponse {
    private int id;
    private String nome;
    private int idade;
    private int ordemChegada;
    private String senha;
    private boolean idoso;

    public PessoaResponse(int id, String nome, int idade, int ordemChegada, boolean idoso) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.ordemChegada = ordemChegada;
        this.senha = String.format("%03d", ordemChegada);
        this.idoso = idoso;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }

    public int getOrdemChegada() {
        return ordemChegada;
    }

    public String getSenha() {
        return senha;
    }

    public boolean isIdoso() {
        return idoso;
    }
}


