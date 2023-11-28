import React from 'react';
import Ingredient from './Ingredient';
import toast, { Toaster } from 'react-hot-toast';
import '../../styles/components/_ingredients-list.scss'

const IngredientsList = ({ ingredientsList, setIngredientsList, savedIngredientNumber }) => {

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
        // console.log(savedIngredientNumber)
        // console.log(index)
        return <Ingredient ingredientName={ingredient} key={index} index={index} removeIngredient={handleRemoveIngredient}
          savedIngredientNumber={savedIngredientNumber} />
      })}
    </div>
  );
}

export default IngredientsList