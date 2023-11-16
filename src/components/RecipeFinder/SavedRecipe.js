import React from 'react';
import parse from 'html-react-parser';

const SavedRecipe = ({ recipe }) => {

  return (
    <div className="single_recipe">
        <div className="clicked-recipe">
            <h2>{recipe.title}</h2>
            <div className="full-recipe">
          <div >
              <img className="image" alt="pic of food"  src={recipe.image} />
          </div>          
    <div >
      <h3>Ingredients:</h3>
      <ul>
          {recipe.extendedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient.original}</li>
          ))}
      </ul>
            </div>
            <h3>Instructions:</h3>
                {parse(`${recipe.instructions}`)}   
            <h3>Time to cook: {recipe.readyInMinutes} minutes </h3>
            
            </div>
        </div>
  </div>
  )
}

export default SavedRecipe;