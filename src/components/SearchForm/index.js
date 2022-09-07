import React, {useReducer, useState} from 'react'
import { useLocation} from "wouter"

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const reducer = (state, param) =>{
    return {
        ...state,
        keyword: param,
        times: state.times + 1
    }
}


export default function SearchForm({initialKeyword= '', initialRating='g'}){
    //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    const [rating, setRating] = useState(initialRating)
    //const [times, setTimes] = useState (0)

    const [state, dispatch]=useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        times: 0
    })    //dispatch permite lanzar acciones para actualizar ese estado 

    const {keyword, times} =state

    const [path, pushLocation] = useLocation()

    const updateKeyword = (keyword) => {
        dispatch(keyword)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = evt =>{
        updateKeyword(evt.target.value)
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
            <small>{times}</small>
        </form>
        
        
    )
}

//export default React.memo(SearchForm)