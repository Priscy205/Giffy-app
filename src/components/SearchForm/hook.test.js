import {renderHook} from '@testing-libraryreact@^13.1'
import useForm from './hook'

test ('should change keyword',() => {
    const {result} = renderHook(() => useForm())
    result.current.updateKeyword('batman')
    
    expect(result.current.keyword).toBe('batman')
})