import {act, renderHook} from '@testing-libraryreact@^13.1'
import useForm from './hook'

test ('should change keyword',() => {
    const {result} = renderHook(() => useForm())
    
    act(()=>{ //simula como react se comporta en un navegador
        result.current.updateKeyword('batman')
    })
    
    expect(result.current.keyword).toBe('batman')
})

test ('should use initial values', () =>{
    const {result} = renderHook(()=> useForm({
        initialKeyword: 'matrix'
    }))
    expect (result.current.keyword).toBe('matrix')
})

test ('should update correctly times when used twice', () =>{
    const {result} = renderHook(()=> useForm({
        initialKeyword: 'matrix'
    }))
    act(()=>{ //simula como react se comporta en un navegador
        result.current.updateKeyword('b')
        result.current.updateKeyword('ba')

    })
    expect (result.current.keyword).toBe('ba')
    expect(result.current.times).toBe(2)
})