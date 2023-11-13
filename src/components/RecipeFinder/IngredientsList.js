import React from 'react';
import Ingredient from './Ingredient';
import toast, { Toaster } from 'react-hot-toast';

const IngredientsList = ({ ingredientsList, setIngredientsList }) => {

  const handleRemoveIngredient = (e) => {
    e.preventDefault();
    const removedIngredient = e.target.parentElement.firstChild.data;
    const newIngredientsList = ingredientsList.filter((ingredient) => ingredient !== removedIngredient);
    setIngredientsList([...newIngredientsList]);
    toast.success("Ingredient removed!");
  }

  return (
    <div>
      <Toaster />
      {ingredientsList.map((ingredient, index) => {
        return <Ingredient ingredientName={ingredient} key={index} removeIngredient={handleRemoveIngredient} />
      })}
    </div>
  );
}

export default IngredientsList