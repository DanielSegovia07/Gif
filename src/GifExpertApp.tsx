import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  // Convertimos las categorías a minúsculas para comparaciones
  const categories2 = categories.map(category => category.toLowerCase());

  // Función para agregar una nueva categoría
  const onAddCategory = (newCategory) => {
    if (categories2.includes(newCategory.toLowerCase())) return;
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  console.log(categories);

  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        currentCategories={categories}
      />
      {/* Listado de gifs */}
 
        {
          categories.map( (category) => (
          <GifGrid key={category} category={ category}
          />))
        }
    
      {/* Gif item */}
    </>
  );
};
