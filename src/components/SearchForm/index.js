import React, {useState} from 'react'

export default function SearchForm({onSubmit}){
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        onSubmit(keyword)
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