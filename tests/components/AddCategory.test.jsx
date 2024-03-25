import {AddCategory} from '../../src/components/AddCategory';

const { render, screen, fireEvent } = require("@testing-library/react");

describe('Pruebas en <AddCategory/>', () => { 
  test('debe de cambiar el valor de la caja de texto', () => { 
    
      const typedInputVal = 'Cowboy Bebop';
      render(<AddCategory onNewCategory={()=>{}} />);
      const input = screen.getByRole('textbox');
      fireEvent.input(input, { target: {value: typedInputVal} });
      //screen.debug();
      expect(input.value).toBe(typedInputVal);
   });

   test('debe de llamar onNewCategory si el input tiene un valor', () => { 
      //Arrange
      const inputValue = "Cowboy Bebop";
      const onNewCategory = jest.fn(); // Se usa bastante
      render(<AddCategory onNewCategory={onNewCategory} />);
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      //Act
      fireEvent.input(input, { target: {value: inputValue} });
      fireEvent.submit(form);

      //Assert
      expect(input.value).toBe('');
      expect(onNewCategory).toHaveBeenCalledTimes(1);
      expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar al newCategory si el input está vacío', () => { 
      //Arrange

      const onNewCategory = jest.fn(); // Se usa bastante
      render(<AddCategory onNewCategory={onNewCategory} />);
      const form = screen.getByRole('form');

      //Act
      fireEvent.submit(form);

      //Assert
      expect(onNewCategory).toHaveBeenCalledTimes(0);
     });
 });