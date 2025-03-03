import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import {renderHook, waitFor} from '@testing-library/react'

describe('Pruebas en el Hook de UseFetchGifs', () => {
     test('Debe de regresar un estado inicial',() => {
        const { result } = renderHook(() => useFetchGifs('One Punch') )
        const {images, isLoading } = result.current

        expect( images.length).toBe(0);
        expect( isLoading).toBeTruthy();
     }) 

     test('Debe de retornar un arreglo de imagenes e isLoading en false',async() => {
        const { result } = renderHook(() => useFetchGifs('One Punch') )
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        const {images, isLoading } = result.current
        
        expect( images.length).toBeGreaterThan(0);
        expect( isLoading).toBeFalsy();
     }) 
})