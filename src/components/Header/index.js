import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './styles.css'
import logo from '../../images/logo.jpg'

export default function Header() {

    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')

    //useEffect(() => {
            //const response = fetch(`https://swapi.dev/api//people/?search=${search}`)
            //console.log(response);
        
     // }, [query])

     useEffect(() => {
        axios
          .get(`https://swapi.dev/api//people/?search=${query}`)
          .then(res => {
            //setCategories(res.data.trivia_categories)
            console.log(res)
          })
      }, [query])

    const updateSearch = e => {
        setSearch(e.target.value)
        console.log(search);
    }
    
    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        console.log(query)
    
        //setSearch('')
    }
    
    return (
        <div>
           <header>
                <img src={logo} alt="Stars Wars" />
                <form onSubmit={getSearch} className="inputs">
                    <input id="search" type="text" placeholder="Pesquise aqui por um personagem" onChange={updateSearch} />
                    <input className="btn" type='submit' value="Pesquisar" />
                </form>
           </header> 
        </div>
    )
}
