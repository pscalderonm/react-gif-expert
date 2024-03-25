import {GifItem} from '../../src/components/GifItem';
import { render, screen } from '@testing-library/react';

describe('Al evaluar GifItem debería', () => { 
  const title = 'Saitama';
  const url = "https://one-punch.com/saitama.jpg";
  
  test('Hacer match con el snapshot', () => {    
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el URL y el ATL indicado', () => { 
      render(<GifItem title={title} url={url} />);
      
      const {alt, src} = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(title);
   });

   test('Debe de mostrar el título en el componente', () => { 
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
    });
 });