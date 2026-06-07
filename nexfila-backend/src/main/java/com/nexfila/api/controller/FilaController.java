package com.nexfila.api.controller;

import com.nexfila.api.dto.PessoaRequest;
import com.nexfila.api.dto.PessoaResponse;
import com.nexfila.api.service.FilaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost",
        "https://nexfila.com.br",
        "https://www.nexfila.com.br"
})
@RestController
@RequestMapping("/api/fila")
public class FilaController {

    private final FilaService filaService;

    public FilaController(FilaService filaService) {
        this.filaService = filaService;
    }

    @PostMapping("/adicionar")
    public ResponseEntity<PessoaResponse> adicionar(@RequestBody PessoaRequest pessoaRequest) {
        PessoaResponse response = filaService.adicionar(pessoaRequest.getNome(), pessoaRequest.getIdade());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/proximo")
    public ResponseEntity<PessoaResponse> chamarProximo() {
        PessoaResponse response = filaService.chamarProximo();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/ver")
    public ResponseEntity<List<PessoaResponse>> verFila() {
        return ResponseEntity.ok(filaService.verFila());
    }

    @GetMapping("/estatisticas")
    public ResponseEntity<Map<String, Integer>> estatisticas() {
        return ResponseEntity.ok(Map.of(
                "naFila", filaService.quantidadeNaFila(),
                "atendidas", filaService.quantidadeAtendidas()
        ));

    }


}
