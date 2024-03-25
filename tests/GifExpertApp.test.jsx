import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => { 
  test('debe de tener al menos la categoría por defecto renderizada', () => { 

    const defaultCategory = 'Cowboy Bebop';

    render(<GifExpertApp defaultCategory={defaultCategory}/>);

    expect(screen.getByRole('heading', { level: 3 }).innerHTML).toBe(defaultCategory);
   
   });

   test('debe de tener los elementos primarios renderizados', ()=>{

    const {container} = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
   });

   test('debe de mostrar una única categoría y no duplicados', ()=>{
    const category = 'Cowboy Bebop';

    render(<GifExpertApp defaultCategory={category} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target:{value: category}});
    fireEvent.submit(form);

    expect(screen.getAllByText(category).length).toBe(1);
   });
 });