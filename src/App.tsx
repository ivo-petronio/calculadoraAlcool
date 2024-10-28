import { useState, FormEvent } from 'react'
import logoImg from './assets/img/gasolina.png'
import './App.css'

function App() {

  interface InfoProps {
    title: string,
    precoAlcool: string | number,
    precoGasolina: string | number
  }

  const [alcool, setAlcool] = useState(1);
  const [gasolina, setGasolina] = useState(1);
  const [info, setInfo] = useState<InfoProps>();

  function calcular( event: FormEvent ) {
    event.preventDefault();
    let calculo = alcool / gasolina;
    if(calculo < 0.7) {
      setInfo({
        title: "Abasteça com Álcool!",
        precoAlcool: formataMoeda(alcool),
        precoGasolina: formataMoeda(gasolina)
      });
    } else {
      setInfo({
        title: "Abasteça com Gasolina!",
        precoAlcool: alcool,
        precoGasolina: gasolina
      });
    }
  }

  function formataMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
    return valorFormatado;
  }

  return (
    <main className="container">
      <div className="logo">
        <img src={logoImg} />
      </div>
      <h1 className="titulo"> What's the Better Option? </h1>
      <form className="form" onSubmit={calcular}>
        <label> Álcool (preço por litro): </label>
        <input
        className="input"
        type="number"
        placeholder="4.60"
        min="1"
        step="0.01"
        value={alcool}
        onChange={e => setAlcool(parseFloat(e.target.value))}
        required
        />
        <label> Gasolina (preço por litro): </label>
        <input
        className="input"
        type="number"
        placeholder="6.34"
        min="1"
        step="0.01"
        value={gasolina}
        onChange={e => setGasolina(parseFloat(e.target.value))}
        required
        />
        <input type="submit" value="Calcular" className="button"/>
      </form>

      {info && Object.keys(info).length > 0 && (
        <section className="result">
          <h3 className="resultTitle"> {info?.title} </h3>
          <span className="resultOption"> Alcool: {info?.precoAlcool} </span>
          <span className="resultOption"> Gasolina: {info?.precoGasolina} </span>
        </section>
      )}

    </main>
  )
}

export default App;

