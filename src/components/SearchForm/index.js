import React, {useReducer} from 'react'
import { useLocation} from "wouter"

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) =>{
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
          return {
            ...state,
            keyword: action.payload,
            times: state.times + 1
        }  
        case ACTIONS.UPDATE_RATING:
          return {
            ...state,
            rating: action.payload
        }  
        default:
            return state
    }
}


export default function SearchForm({initialKeyword= '', initialRating='g'}){
    const [state, dispatch]=useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        times: 0
    })    //dispatch permite lanzar acciones para actualizar ese estado 

    const {keyword, rating, times} =state

    const [path, pushLocation] = useLocation()

    const handleChange = (evt) =>{
        dispatch({type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = (evt) =>{
        dispatch({type: ACTIONS.UPDATE_RATING, payload: evt.target.value})
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