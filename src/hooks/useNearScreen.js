import {useEffect, useState, useRef} from 'react'


export default function useNearScreen ({distance = '100px'}={}){
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect (function (){
        let observer

        const onChange = (entries, observer) =>{
            const el =entries[0]
            if(el.isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        }

        //un polyfill es una pequeña biblioteca que le agrega funcionalidades que falta al navegador
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
            ? IntersectionObserver
            : import ('intersection-observer')
            ).then(()=>{
                observer = new IntersectionObserver(onChange,{
                rootMargin: distance
            })
            observer.observe(fromRef.current) //current nos da el valor actual de esa referencia
            })
            return () => observer && observer.disconnect()
    })
    return {isNearScreen, fromRef}
}
