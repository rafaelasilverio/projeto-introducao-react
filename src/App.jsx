import { useState } from 'react'
import logo from './assets/logo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [nome, setNome] = useState('Fórum Ops');

  function mudarNome() {
    setNome('Suporte Educacional');
  }

  return (
    <>
      <div>
        <img src={logo} className="logo react" alt="React logo" />
      </div>

      <h1>{nome}</h1>

      <button onClick={mudarNome}>
        Clique para mudar o nome
      </button>
    </>
  )
}

export default App
