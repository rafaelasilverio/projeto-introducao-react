import { useState } from 'react'
import logo from './assets/logo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [nome, setNome] = useState('Fórum Ops');

  function mudarNome() {
    if (nome === 'Fórum Ops') {
      setNome('Suporte Educacional');
    } else {
      setNome('Fórum Ops');
    }
  }

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Logo de Suporte Educacional" />
      </div>

      <h1>{nome}</h1>

      <button onClick={mudarNome}>
        Clique para mudar o nome
      </button>

    </>
  )
}

export default App
