import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css';
import logo from './images/logo.jpg'

import { FaGithub } from 'react-icons/fa';  
import { FaLinkedin } from 'react-icons/fa'

function App() {

  const [people, setPeople] = useState([])
  const [next, setNext] = useState('')
  const [page, setPage] = useState(1)

  function loadPeople(page = 1) {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then(response => {
        // console.log(response.data)
        
        setPeople(response.data.results)
        setNext(response.data.next)
      })
  } 

  useEffect(() => {
    loadPeople()
  }, [])

  function prevPage() {
    if (page === 1) return
    const pageNumber = page - 1
    setPage(pageNumber)

    loadPeople(pageNumber)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }

  function nextPage() {
    if (next === null) return
    const pageNumber = page + 1
    setPage(pageNumber)

    loadPeople(pageNumber)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className="App">
          <header>
                  <img src={logo} alt="Stars Wars" />
          </header>
        
          <div className="container">
              {people.map(person => {
                  return <div className="card" key={person.name}>
                              <h2>{person.name}</h2>
                              <p><strong>Height:</strong> {person.height} cm</p>
                              <p><strong>Mass:</strong> {person.mass} kg</p>
                              <p><strong>Hair color:</strong> {person.hair_color}</p>
                              <p><strong>Skin color:</strong> {person.skin_color}</p>
                              <p><strong>Eye color:</strong> {person.eye_color}</p>
                              <p><strong>Birth year:</strong> {person.birth_year}</p>
                              <p><strong>Gender:</strong> {person.gender}</p>
                          </div>
              })}
          </div>
          <div className="btn-container">
                  <button className="btn" disabled={page === 1} onClick={prevPage}>Prev</button>
                  <button className="btn" disabled={next === null} onClick={nextPage}>Next</button>
          </div>

        <footer>
          <p>Desenvolvido por Luiza Campos</p>
          <div>
          <a href="https://github.com/luizaacampos" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/luiza-de-almeida-campos/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App;
