import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Sirve para hacer mocks no solo de mis librerías sino de terceros también
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => { 
  const category = 'Cowboy Bebop';
  
  test('debe de mostrar el loading inicialmente', () => { 
  
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category}/>);
    screen.debug();
    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
   });

   test('debe de mostrar items cuando se cargan las imágenes desde useFetchGifs() ', () => { 

      const gifs = [
        {
          id: 'ABC', 
          title: 'Cowboy Title',
          url:'https://localhost/cowboy.jpg'
        },
        {
          id: '123', 
          title: 'Saitama',
          url:'https://localhost/saitama.jpg'
        }
      ];
      useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
      });

      render(<GifGrid category={category}/>);
      expect(screen.getAllByRole('img').length).toBe(2);
    });
 });