import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const handleInputhange = ({ target }) =>{
    setInputValue(()=> target.value);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    if( inputValue.trim().length <= 1 ){
      return;
    }
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={ handleOnSubmit }>

      <input 
        type="text"
        placeholder="Search for GIFs"
        value={ inputValue }
        onChange={ handleInputhange }
      />
    
    </form>
  )
}
