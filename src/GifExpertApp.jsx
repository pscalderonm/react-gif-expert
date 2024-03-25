import PropTypes from 'prop-types';
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = ({defaultCategory=''}) => {
  
  const [categories, setCategories] = useState([defaultCategory]);

  const handleAddCategory = ( newCategory ) =>{
    if (categories.includes(newCategory)){
      return;
    }

    setCategories(( list ) => [ newCategory, ...list ]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory
        onNewCategory={ handleAddCategory }
      />

      {/* React no promueve el uso de indices de arrays para manejo de keys */}
      { categories.map((category)=>(
            <GifGrid 
              key={ category } 
              category={ category } 
            />
        )) 
      }
    </>
  )
}


GifExpertApp.propTypes = {
  defaultCategory: PropTypes.string
};