interface EstatisticasProps{
    naFila: number
    atendidas: number
}

function Estatisticas({naFila, atendidas}: EstatisticasProps) {
    return (
        <div className="estatisticas-container" >
            <div className="estatistica-card">
                <p className="estatistica-label">Na fila</p>
                <h2 className="estatistica-numero">{naFila}</h2>
            </div>
            <div className="estatistica-card">
                <p className="estatistica-label">Atendidas</p>
                <h2 className="estatistica-numero">{atendidas}</h2>
            </div>
        </div>
    )
}

export default Estatisticas