import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  
  const [categories, setCategories] = useState(['Cowboy Bebop']);

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
