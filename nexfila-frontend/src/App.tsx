import { useEffect, useState } from "react"
import Estatisticas from "./components/Estatisticas"
import FormAdicionarPessoa from "./components/FormAdicionarPessoa"
import BotaoChamarProximo from "./components/BotaoChamarProximo"
import PessoaAtendida from "./components/PessoaAtendida"
import ListaFila from "./components/ListaFila"
import Versao from "./components/Versao"
import Login from "./components/Login"
import './App.css'

const API_URL = import.meta.env.VITE_API_URL


function App() {

  const [fila, setFila] = useState<any[]>([])
  const [pessoaAtendida, setPessoaAtendida] = useState<any>(null)
  const [estatisticas, setEstatisticas] = useState({ naFila: 0, atendidas: 0 })
  const [logado, setLogado] = useState(false)

  async function carregarDados() {
    const [responseFila, responseEstat] = await Promise.all([
      fetch(`${API_URL}/fila/ver`),
      fetch(`${API_URL}/fila/estatisticas`)
    ])

    const dataFila = await responseFila.json()
    const dataEstat = await responseEstat.json()
    setFila(dataFila)
    setEstatisticas(dataEstat)

  }

  useEffect(() => {
    carregarDados()
  }, [])

  if (!logado) {
    return <Login onLogin={() => setLogado(true)} />
  }

  return (
    <div>
      <header>
        <h1>Nexfila</h1>
        <p className="tagline">Gestão Inteligente de Atendimentos</p>
        <button className="btn-sair" onClick={() => setLogado(false)}>Sair</button>
      </header>
      <div className="container">
        <Estatisticas naFila={estatisticas.naFila} atendidas={estatisticas.atendidas} />
        <FormAdicionarPessoa carregarDados={carregarDados} />
        <BotaoChamarProximo setPessoaAtendida={setPessoaAtendida} carregarDados={carregarDados} />
        {pessoaAtendida && <PessoaAtendida pessoa={pessoaAtendida} />}
        <ListaFila fila={fila} />
      </div>
      <Versao />
    </div>
  )
}

export default App