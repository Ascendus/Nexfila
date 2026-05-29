
const API_URL = import.meta.env.VITE_API_URL

interface BotaoChamarProximoProps {
    setPessoaAtendida: (pessoa: any) => void
    carregarDados: () => void
}

function BotaoChamarProximo({ setPessoaAtendida, carregarDados }: BotaoChamarProximoProps) {

    async function handleChamarProximo() {
        const response = await fetch(`${API_URL}/fila/proximo`)

        if (response.ok) {
            const data = await response.json()
            setPessoaAtendida(data)
            await carregarDados()
        } else {
            alert("Fila vazia!")
        }

    }

    return (
        <div>
            <button className="btn-chamar" onClick={handleChamarProximo} >Chamar Próximo</button>
        </div>

    )
}

export default BotaoChamarProximo