import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

interface FormAdicionarPessoaProps {
    carregarDados: () => void
}

function FormAdicionarPessoa({ carregarDados }: FormAdicionarPessoaProps) {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [erro, setErro] = useState('')
    const [sucesso, setSucesso] = useState('')

    async function handleAdicionar() {
        const response = await fetch(`${API_URL}/fila/adicionar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome: nome, idade: Number(idade) })
        })

        if (response.ok) {
            setNome('')
            setIdade('')
            setErro('')
            setSucesso('Pessoa adicionada na fila com sucesso!')
            await carregarDados()
        }
        else {
            const data = await response.json()
            setErro(data.erro)
            setSucesso('')
        }
    }


    return (
        <div className="form-container">
            <h2>Adicionar Pessoa</h2>
            <div className="form-inputs">
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />
            </div>
            <button className="btn-primary" onClick={handleAdicionar} >Adicionar</button>
            {erro && <p className="texto-erro">{erro}</p>}
            {sucesso && <p className="texto-sucesso">{sucesso}</p>}

        </div>
    )

}

export default FormAdicionarPessoa