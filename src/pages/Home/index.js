import React, {useState} from "react"
import {Link, useLocation} from "wouter"

const POPULAR_GIFS = ["cat", "elephant", "dog", "zebra", "lion"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushlocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        console.log(keyword)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return(
        <>
            <form onSubmit ={handleSubmit} >
                <input placeholder= "Search a gif here..."onChange={handleChange} type='text' value={keyword} />
            </form>
            <h3 className="App-title">Gifs de animales</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif)=> (
                    <li key={pupularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif} </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}