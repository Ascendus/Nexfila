package com.nexfila.api.service;

import com.nexfila.api.dto.PessoaResponse;
import com.nexfila.api.exception.ApiException;
import com.nexfila.api.model.Pessoa;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;

@Service
public class FilaService {

    private int contadorAtendidas = 0;

    private PriorityQueue<Pessoa> fila = new PriorityQueue<>(Comparator
            .comparing((Pessoa pessoa) -> pessoa.isIdoso() ? 0 : 1)
            .thenComparingInt(Pessoa::getOrdemChegada));

    private PessoaResponse toResponse(Pessoa pessoa) {
        return new PessoaResponse(
                pessoa.getId(),
                pessoa.getNome(),
                pessoa.getIdade(),
                pessoa.getOrdemChegada(),
                pessoa.isIdoso());
    }

    public PessoaResponse adicionar(String nome, int idade) {

        if (nome == null || nome.isBlank()) {
            throw new ApiException("Nome é obrigatorio", HttpStatus.BAD_REQUEST);
        }

        if (idade <= 0) {
            throw new ApiException("Idade deve ser maior que zero!", HttpStatus.BAD_REQUEST);
        }

        Pessoa pessoa = new Pessoa(nome, idade);
        fila.add(pessoa);
        return toResponse(pessoa);

    }

    public PessoaResponse chamarProximo() {
        if (fila.isEmpty()) {
            throw new ApiException("Fila vazia!", HttpStatus.NOT_FOUND);
        }

        Pessoa pessoa = fila.poll();
        contadorAtendidas++;
        return toResponse(pessoa);

    }

    public List<PessoaResponse> verFila() {
        return fila.stream()
                .sorted(Comparator.comparing((Pessoa pessoa) -> pessoa.isIdoso() ? 0 : 1)
                        .thenComparingInt(Pessoa::getOrdemChegada))
                .map(this::toResponse)
                .toList();

    }

    public int quantidadeNaFila() {
        return fila.size();
    }

    public int quantidadeAtendidas() {
        return contadorAtendidas;
    }


}
