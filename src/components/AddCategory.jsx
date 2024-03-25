import { useState } from "react"
import PropTypes from 'prop-types';

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
    <form onSubmit={ handleOnSubmit } aria-label="form">

      <input 
        type="text"
        placeholder="Search for GIFs"
        value={ inputValue }
        onChange={ handleInputhange }
      />
    
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
