import React, {useContext} from 'react'
import Gif from '../../components/Gif'
import useSingleGif from '../../hooks/useSingleGif'
import Spinner from '../../components/Spinner'

export default function Detail({params}){
    const {gif, isLoading, isError} = useSingleGif({id: params.id})

    if (isLoading) return <Spinner />
    if (!gif) return null
    
    return <>
        <h3 className="App-title">{gif.title}</h3>
       <Gif {...gif}/> 
    </>
    
}