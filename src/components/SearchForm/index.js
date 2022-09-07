import React, {useState} from 'react'
import { useLocation} from "wouter"


function SearchForm({onSubmit}){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }


    return(
        <form onSubmit ={handleSubmit} >
                <input id="buscar" placeholder= "Search a gif here..." onChange={handleChange} type='text' value={keyword} />
                <button id="boton">Buscar</button>
            </form>
    )
}

export default React.memo(SearchForm)