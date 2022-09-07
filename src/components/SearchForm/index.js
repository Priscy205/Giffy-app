import React, {useState} from 'react'
import { useLocation} from "wouter"

const RATINGS = ['g', 'pg', 'pg-13', 'r']


function SearchForm(){
    const [keyword, setKeyword] = useState('')
    const [rating, setRating] = useState(RATINGS[0])
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    const handleChangeRating = (evt) =>{
        setRating(evt.target.value)
    }


    return(
        <form onSubmit ={handleSubmit}>
                <input 
                    id="buscar"    
                    placeholder= "Search a gif here..." 
                    onChange={handleChange} 
                    type='text' 
                    value={keyword} />
                <button id="boton">Buscar</button>
            <select onChange={handleChangeRating} value={rating}>
                <option disabled> Rating type</option>
                {RATINGS.map((rating) => (
                <option key={rating}>{rating}</option> ))}
            </select>
        </form>
        
        
    )
}

export default React.memo(SearchForm)