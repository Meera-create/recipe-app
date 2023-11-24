import React from 'react';
import parse from 'html-react-parser';
import StarRating from '../StarRating';

const SavedRecipe = ({ recipe }) => {

  return (
    <div className="single_recipe">
      <div className="clicked-recipe">
        <h2>{recipe.title}</h2>
        <div className="full-recipe">
          {recipe.image !== undefined && 
            <div>
              <img className="image" alt="pic of food"  src={recipe.image} />
            </div>}          
          <div>
            {recipe.savedRecipe && <StarRating recipe={recipe} />}
            <h3>Ingredients:</h3>
            <ul>
              {console.log(recipe.extendedIngredients)}
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