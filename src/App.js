import React from 'react'

import Routes from './routes'
import Header from './components/Header'
import './App.css';

import { FaGithub } from 'react-icons/fa';  
import { FaLinkedin } from 'react-icons/fa'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <footer>
        <p>Desenvolvido por Luiza Campos</p>
        <div>
        <a href="https://github.com/luizaacampos" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/luiza-de-almeida-campos/" target="_blank"><FaLinkedin /></a>
        </div>
      </footer>
    </div>
  )
}

export default App;
