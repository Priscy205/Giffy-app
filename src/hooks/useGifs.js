import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs ({keyword} = {keyword: null}) {
    const [loading, setLoading]  = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState (0)
    const {gifs, setGifs} = useContext(GifsContext)

    //recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(function(){   //useEffect es una funcion que se ejecuta cada vez que se renderiza el componente
        setLoading(true)
        
        getGifs({keyword: keywordToUse})
        .then(gifs =>{
            setGifs(gifs)
            setLoading(false)
            //guardamos la keyword en el localStorage
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, keywordToUse, setGifs])

    useEffect(function (){
        if (page == INITIAL_PAGE) return

        setLoadingNextPage(true)
        getGifs({keyword: keywordToUse, page})
            .then(nextGifs =>{
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [keywordToUse, page, setGifs])

    return {loading, loadingNextPage, gifs, setPage}
}
