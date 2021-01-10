import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './styles.css'
import logo from '../../images/logo.jpg'

export default function Header() {

    const [search, setSearch] = useState('')

    //useEffect(() => {
        //axios
        //.get(`https://swapi.dev/api//people/?search=${search}`)
        //.then(res => {
            //console.log(res.data)
        //})
    //}, [searchCharacter])

    function listCharacters(name) {
        const url = `https://swapi.dev/api//people/?search=${search}`

        const res = fetch(url)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                    })
    }

    function searchCharacter() {
        let search = document.getElementById('search').value
        if (search !== '') {
            listCharacters(search)
        }
    }
    
    return (
        <div>
           <header>
                <img src={logo} alt="Stars Wars" />
                <div className="inputs">
                    <input id="search" type="text" placeholder="Pesquise aqui por um personagem" />
                    <input className="btn" type='submit' value="Pesquisar" onClick={searchCharacter} />
                </div>
           </header> 
        </div>
    )
}
