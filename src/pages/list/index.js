import React, { Component } from 'react'

import api from '../../services/api'
import './styles.css'

export default class list extends Component {

    state = {
        people: [],
        next: '',
        page: 1
    }
 
   componentDidMount() {
       this.loadPeople()
   }

   loadPeople = async (page = 1) => {
       const response = await api.get(`/people/?page=${page}`)
       console.log(response.data);

       const people = response.data.results
       const next = response.data.next

       this.setState({ people, page, next})
   }

   prevPage = () => { 
       const { page } = this.state
       if (page === 1) return
       const pageNumber = page - 1

       this.loadPeople(pageNumber)
       window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
   }
   
   nextPage = () => {
       const { page, next } = this.state
       if (next === null) return
       const pageNumber = page + 1

       this.loadPeople(pageNumber)
       window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }

    render() {
        const { people, page, next } = this.state

        return (
        <>
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
                <button className="btn" disabled={page === 1} onClick={this.prevPage}>Prev</button>
                <button className="btn" disabled={next === null} onClick={this.nextPage}>Next</button>
        </div>
        </>
    )
    };

}
