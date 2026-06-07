interface ListaFilaProps {
    fila: any[]
}

function ListaFila({ fila }: ListaFilaProps) {
    return (
        <div className="lista-container">
            <h2>Fila de Atendimento</h2>
            {fila.length === 0 ? (
                <p className="texto-secundario">Fila vazia!</p>
            ) : (
                fila.map((pessoa) => (
                    <div key={pessoa.id} className="pessoa-card">
                        <span className="senha">Senha: {pessoa.senha}</span>
                        <span>{pessoa.nome} - Idade: {pessoa.idade}</span>
                        <span className={pessoa.idoso ? "badge-idoso" : "badge-normal"}>
                            {pessoa.idoso ? "IDOSO" : "Normal"}
                        </span>
                    </div>
                ))
            )}
        </div>
    )
}

export default ListaFila