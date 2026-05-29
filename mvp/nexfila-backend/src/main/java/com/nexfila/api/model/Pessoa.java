package com.nexfila.api.model;

public class Pessoa {

    private int id;
    private String nome;
    private int idade;
    private int ordemChegada;

    private static int contadorId = 0;
    private static int contadorOrdemChegada = 0;

    public Pessoa(String nome, int idade) {
        this.id = ++contadorId;
        this.nome = nome;
        this.idade = idade;
        this.ordemChegada = ++contadorOrdemChegada;
    }

    public boolean isIdoso() {
        return this.idade >= 60;
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
}
