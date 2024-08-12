import Conteudo from "./Conteudo";
import logo from './logo.svg';
import React, { Component, useState } from 'react';


function App() {
  let [nroCliques, setNroCliques] = useState(0);
  
  function fizUmClique() {
    setNroCliques(nroCliques+1);
    alert("Botão clicado.")
  }

  var texto = "um texto contido numa variável";

  return (
    <div className="App">
      <Conteudo
        texto="Botão clicado "
        Logo={logo} 
        ncliques = {nroCliques}
        onClick={fizUmClique}
      />
    </div>
  );
}

export default App;
