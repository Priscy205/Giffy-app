import {API_KEY} from './settings'
import {API_URL} from './settings'


const fromApiResponseToGifs = apiResponse =>{
  const {data = []}=apiResponse
  if(Array.isArray(data)){
    const gifs = data.map(image =>{
      const {images, title, id} = image
      const {url} = images.downsized_medium
      return {title, id, url}
    })
    return gifs
  }
  return []

}


export default function getGifs({keyword = 'elephants'} = {}){
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
    {/*
      .then(res => res.json())
      .then(response => {
        const {data = [] } = response //data siempre regresa un array
        if (Array.isArray(data)){
             const gifs = data.map(image =>{
             const {images, title, id} = image
             const { url } = images.downsized_medium
             return { title, id, url}
           }) 
            return gifs
        }
        
      })*/}
}