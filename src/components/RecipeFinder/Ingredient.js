import React from 'react'
import '../../styles/components/_ingredient.scss'

const Ingredient = ({ ingredientName, removeIngredient , index, savedIngredientNumber}) => {
  


  const determineColor = (index) => {
    if (index <= savedIngredientNumber) {
      return 'green'
    }
    
  }


  return (
    <p>{ingredientName} <button className={`ingredient-remove ${determineColor(index)}`} id='remove-ingredient' style={{ color: 'red' }} onClick={removeIngredient}
        type="button">x</button></p>
  )
}

export default Ingredient;