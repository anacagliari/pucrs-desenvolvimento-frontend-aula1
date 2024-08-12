import React from 'react';
import './App.css';


function Conteudo(props) {
    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" />
            <p>
                "botão clicado {props.ncliques} vezes"
            </p>
            <input type="button" value="botão" onClick={props.onClick}></input>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>);
}

export default Conteudo;
