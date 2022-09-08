import React, {useReducer} from 'react'
import { useLocation} from "wouter"
import useForm from './hook'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchForm({initialKeyword= '', initialRating='g',}){
    const {keyword, rating, times, updateKeyword, updateRating} =useForm({initialKeyword, initialRating,})

    const [path, pushLocation] = useLocation()

    const handleChange = (evt) =>{
        updateKeyword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = (evt) =>{
        updateRating(evt.target.value)
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
            <small>{times}</small>
        </form>
        
        
    )
}

//export default React.memo(SearchForm)