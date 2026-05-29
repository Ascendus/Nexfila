interface PessoaAtendidaProps {
    pessoa: any
}

function PessoaAtendida({ pessoa }: PessoaAtendidaProps) {
    return (
        <div className="pessoa-atendida">
            <p>Atendendo agora</p>
            <span className="senha">Senha: {pessoa.senha}</span>
            <h2>{pessoa.nome}</h2>
            <span className={pessoa.idoso ? "badge-idoso" : "badge-normal"}>
                {pessoa.idoso ? "Idoso" : "Normal"}
            </span>
        </div>
    )

}

export default PessoaAtendida;