import React from 'react'

import Routes from './routes'
import './App.css';
import logo from './images/logo.jpg'

import { FaGithub } from 'react-icons/fa';  
import { FaLinkedin } from 'react-icons/fa'


function App() {
  return (
    <div className="App">
        <header>
                <img src={logo} alt="Stars Wars" />
           </header>
      <Routes />
      <footer>
        <p>Desenvolvido por Luiza Campos</p>
        <div>
        <a href="https://github.com/luizaacampos" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/luiza-de-almeida-campos/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </footer>
    </div>
  )
}

export default App;
