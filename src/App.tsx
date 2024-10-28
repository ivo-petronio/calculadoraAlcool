import { useState } from 'react'
import logoImg from './assets/img/gasolina.png'
import './App.css'

function App() {

  return (
    <main className="container">
      <div className="logo">
        <img src={logoImg} />
      </div>
      <h1 className="titulo"> What's the Better Option? </h1>
      <form className="form">
        <label> Álcool (preço por litro): </label>
        <input
        className="input"
        type="number"
        placeholder="4.60"
        min="1"
        step="0.01"
        required
        />
        <label> Gasolina (preço por litro): </label>
        <input
        className="input"
        type="number"
        placeholder="6.34"
        min="1"
        step="0.01"
        required
        />
        <input type="submit" value="Calcular" className="button" />
      </form>
    </main>
  )
}

export default App
