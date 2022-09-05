import { useEffect } from 'react'
import {useState} from 'react'
import getSingleGif from '../services/getSingleGifs'
import {useGifs} from './useGifs'

export default function useSingleGif ({id}){
    const {gifs} = useGifs()
    const gifFromCache = gifs.find(singleGif =>
    singleGif.id === id)

    const [gif, setGif] = useState(gifFromCache)

    useEffect(function(){
        if(!gif){
            //llamar al servicio si no tenemos gif   
            getSingleGif({id}) 
            .then(setGif)
            }    
        }, [gif, id])   

    return {gif}
}