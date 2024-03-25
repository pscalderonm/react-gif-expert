import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => { 
  const category = 'Cowboy Bebop';
  test('debe devolver el estado inicial', () => { 

      const { result } = renderHook( ()=>useFetchGifs(category) );
      const { images, isLoading } = result.current;
      
      expect( images.length ).toBe(0);
      expect( isLoading ).toBeTruthy();
   });

   test('debe de retornar una arreglo de imágenes y el isLoading en false', async () => { 

    const { result } = renderHook( ()=>useFetchGifs(category) );
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0),
      {
        timeout: 6000, //6 sec
      }
    );
    
    const { images, isLoading } = result.current;
    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
 });
 });