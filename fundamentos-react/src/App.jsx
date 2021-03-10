import React from 'react'
import Primeiro from './components/Primeiro.jsx'
//import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import './App.css'

export default props =>
  <div className="App">
    <Card titulo="Exercicio X">
      Conteúdo
    </Card>
    <Card titulo="Exercicio Componente">
      <Primeiro />
    </Card>



    {/*<ComFilhos>
      <ul>
        <li>Gustavo</li>
        <li>Ana</li>
        <li>Fernanda</li>
      </ul>
    </ComFilhos>

    {/*<Primeiro />
    <ComParametro titulo="este é um titulo" subtitulo="este é um subtitulo" />
    <ComParametro titulo="opaaaa" subtitulo="eitaaaa" />*/}
  </div>
