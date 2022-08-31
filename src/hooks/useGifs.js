import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs ({keyword} = {keyword: null}) {
    const [loading, setLoading]  = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(function(){   //useEffect es una funcion que se ejecuta cada vez que se renderiza el componente
        setLoading(true)
        //recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'gatitos'
        
        getGifs({keyword: keywordToUse})
        .then(gifs =>{
            setGifs(gifs)
            setLoading(false)
            //guardamos la keyword en el localStorage
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, setGifs])

    return {loading, gifs}
}
