import React, {useState} from "react"
import {Link, useLocation} from "wouter"
import './index.css';

const POPULAR_GIFS = ["cat", "elephant", "dog", "zebra", "lion"]

export default function Home(){
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
        <>
            <form onSubmit ={handleSubmit} >
                <input id="buscar" placeholder= "Search a gif here..." onChange={handleChange} type='text' value={keyword} />
                <button id="boton">Buscar</button>
            </form>
            <h3 className="App-title">Gifs populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif)=> (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif} </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}