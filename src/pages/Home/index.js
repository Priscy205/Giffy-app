import React, {useState} from "react"
import {Link, useLocation} from "wouter"
import './index.css';
import ListOfGifs from "../../components/ListOfGifs";
import {useGifs} from '../../hooks/useGifs'
import Category from '../../components/Category'


const POPULAR_GIFS = ["Avengers", "Gatos", "Matrix", "Groot", "Princesas"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

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
            {/* 
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <h3 className="App-title">Gifs de animales</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif)=> (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif} </Link>
                    </li>
                ))}
            </ul>*/}

            <div className="App-main">
                <div className="App-results">
                <h3 className="App-title">Última búsqueda</h3>
                <ListOfGifs gifs = {gifs}/>
                </div>
                <div className="App-category">
                    <Category
                        name="Categorias populares"
                        options={POPULAR_GIFS}
                    />
                    <Category
                        name="Mascotas"
                        options={['Perros', 'Gatos', 'Hamster']}
                    />
                </div>
            </div>
        </>
    )
}