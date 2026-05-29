import { useState } from "react"

interface LoginProps {
    onLogin: () => void
}

function Login({ onLogin }: LoginProps) {
    
    const [email, setEmail] = useState('thiago@nexfila.com.br')
    const [senha, setSenha] = useState('123456')
    const [erro, setErro] = useState('')

    const API_URL = import.meta.env.VITE_API_URL

    async function handleLogin() {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        })
        const data = await response.json()
        if (data.sucesso) {
            onLogin()
        } else {
            setErro(data.mensagem)
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1 className="login-titulo">Nexfila</h1>
                <p className="login-subtitulo">FILA DE ATENDIMENTO</p>

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="login-input"
                />

                {erro && <p className="texto-erro">{erro}</p>}

                <button className="login-btn" onClick={handleLogin}>
                    ENTRAR
                </button>
            </div>
        </div>
    )
}

export default Login